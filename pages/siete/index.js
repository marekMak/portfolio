import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { RxArrowTopRight } from "react-icons/rx";

import { fadeIn } from "../../variants";

export const getStaticProps = async () => {
  const res = await fetch(
    "https://baro.ibasterisk.sk/wp-json/wp/v2/posts?categories=24&per_page=100"
  );

  const data = await res.json();

  return {
    props: {
      data,
    },
    revalidate: 3600,
  };
};

const Siete = ({ data }) => {
  const [query, setQuery] = useState("");

  const filteredData = data.filter((item) =>
    item.title.rendered.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container mx-auto min-h-screen h-auto flex flex-col items-center py-20">
      <motion.h1
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="h1"
      >
        Siete<span className="text-accent">.</span>
      </motion.h1>

      {/* search */}
      <input
        type="text"
        placeholder="Hľadať článok..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="mb-10 mt-6 px-4 py-2 rounded w-full max-w-md text-[#271A4C]"
      />

      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 w-full"
      >
        {filteredData.map((item) => (
          <Link
            key={item.id}
            href={`/siete/${item.id}`}
            className="bg-[rgba(65,47,123,0.15)] z-50 h-max rounded-lg px-6 py-8 flex justify-between items-center group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300"
          >
            <div
              className="text-2xl text-white group-hover:text-accent transition-colors"
              dangerouslySetInnerHTML={{ __html: item.title.rendered }}
            />

            <RxArrowTopRight className="text-3xl group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
          </Link>
        ))}
      </motion.div>
    </div>
  );
};

export default Siete;
