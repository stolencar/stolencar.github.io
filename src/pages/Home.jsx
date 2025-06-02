import Film from "../components/Film";
import Footer from "../components/Footer";
import { data } from "../assets/assets";

function Home() {
  function toggleMode() {
    document.body.classList.toggle("light-mode");
  }

  return (
    <>
      <div className="wrap">
        <div className="hero">
          <h1 className="hero-title">Welcome to Stolen Car Productions!</h1>
          <p className="hero-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sint nesciunt eligendi explicabo, molestias rerum quis
            unde numquam laboriosam temporibus, aliquid a, nisi eum quisquam. Maxime expedita pariatur assumenda itaque?
          </p>
        </div>
        <div className="films">
          {data.films.map((film) => {
            return <Film key={film.id} data={film} />;
          })}
        </div>
      </div>
      <Footer />
      <img src="/icons/mode.svg" className="mode" title="Toggle light mode" onClick={toggleMode} />
    </>
  );
}

export default Home;
