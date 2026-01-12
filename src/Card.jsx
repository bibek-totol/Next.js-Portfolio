import { motion } from "framer-motion";
const Card = ({ year, title, desc, link }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-white/10 backdrop-blur-md border border-white/10 shadow-xl hover:shadow-purple-500/30 transition-all duration-300 rounded-2xl p-6 md:p-8 text-left flex flex-col gap-3"
    >
      <p className="text-lg md:text-xl font-semibold text-purple-300">{year}</p>
      <p className="text-xl md:text-2xl font-bold text-white">{title}</p>
      {desc && <p className="text-sm md:text-base text-white/80">{desc}</p>}
      {link && (
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm md:text-base font-medium text-cyan-300 underline hover:text-cyan-200 transition"
        >
          {link.text}
        </a>
      )}
    </motion.div>
  );
  export default Card;
  