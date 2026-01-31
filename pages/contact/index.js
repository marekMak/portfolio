import { useState } from "react";
import Circles from "/components/Circles";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Contact = () => {
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    website: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();

      setStatus("success");
      setForm({ name: "", email: "", message: "" });

      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="h-screen bg-primary/30">
      <div className="container mx-auto py-32 flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            className="h2 text-center mb-12"
          >
            Zanechajte mi <span className="text-accent">správu.</span>
          </motion.h2>

          <motion.form
            onSubmit={handleSubmit}
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-6"
          >
            {/* SUCCESS */}
            {status === "success" && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-400 text-center"
              >
                ✅ Správa bola úspešne odoslaná. Ozvem sa čoskoro.
              </motion.p>
            )}

            {/* ERROR */}
            {status === "error" && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-center"
              >
                ❌ Niečo sa pokazilo. Skús to prosím neskôr.
              </motion.p>
            )}

            <div className="flex gap-x-6">
              <input
                name="website"
                value={form.website}
                onChange={handleChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <input
                name="name"
                onChange={handleChange}
                value={form.name}
                type="text"
                placeholder="meno"
                className="input"
                required
              />
              <input
                name="email"
                onChange={handleChange}
                value={form.email}
                type="email"
                placeholder="email"
                className="input"
                required
              />
            </div>

            <textarea
              name="message"
              onChange={handleChange}
              value={form.message}
              placeholder="text správy"
              className="textarea"
              required
            />

            <button
              disabled={status === "loading"}
              className={`btn rounded-full border max-w-[170px]
                ${
                  status === "loading"
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:border-accent"
                }
              `}
            >
              {status === "loading" ? "Odosielam..." : "Odoslať správu"}
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
