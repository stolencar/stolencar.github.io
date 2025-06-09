import Film from "../components/Film";
import Btn from "../components/Btn";
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
          <img src="/logo.png" className="hero-img" />
          <h1 className="hero-title">Welcome to Stolen Car Productions!</h1>
          <p className="hero-description">Small time production company comprised of film lovers and future film makers</p>
        </div>
        <div className="films">
          {data.films.map((film) => {
            return <Film key={film.id} data={film} />;
          })}
        </div>
      </div>
      <Footer />
      <div className="icons">
        <Btn
          src="/icons/discord.svg"
          title="Join our Discord"
          onClick={() => window.open("https://discord.gg/fEhW3UvPak", "_blank")}
        />
        <Btn src="/icons/mode.svg" title="Toggle light mode" onClick={toggleMode} />
        <Btn
          src="/icons/github.svg"
          title="Website source code"
          onclick={() => window.open("https://github.com/stolencar/stolencar.github.io", "_blank")}
        />
      </div>
    </>
  );
}

export default Home;
