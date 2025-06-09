import { motion } from "framer-motion";

function Film({ data }) {
  return (
    <motion.div
      className="film"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      whileHover={{scale:1.02,y:-5}}
      viewport={{ once: true }}
      transition={{ duration: 0.7, type: "spring" }}
    >
      <img src={data.poster} className="film-poster" />
      <div className="film-info">
        <h2 className="film-title">{data.title}</h2>
        <p className="film-description">{data.description}</p>
        <div className="film-details">
          <span>{data.director}</span>•<span>{data.releaseDate}</span>•<span>{data.genre}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default Film;
