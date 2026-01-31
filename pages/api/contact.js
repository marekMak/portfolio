import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message, website } = req.body || {};

  if (website) return res.status(200).json({ success: true });

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "Missing fields" });
  }

  if (String(message).length > 5000) {
    return res
      .status(400)
      .json({ success: false, message: "Message too long" });
  }

  try {
    await resend.emails.send({
      from: `Kontakt formulár <${process.env.MAIL_FROM}>`,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: `Nová správa od ${name}`,
      html: `
        <h3>Nová správa z webu</h3>
        <p><strong>Meno:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Správa:</strong></p>
        <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (e) {
    console.error("RESEND ERROR:", e);
    return res.status(500).json({ success: false });
  }
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
