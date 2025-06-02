function Footer() {
  return (
    <footer className="footer">
      <div className="footer-copy">&copy; {new Date().getFullYear()} Stolen Car Productions</div>
      <div>
        Made by{" "}
        <a href="https://tonymac129.github.io" target="_blank">
          Tony Macaroni
        </a>{" "}
        with{" "}
        <a href="https://react.dev" target="_blank">
          React
        </a>
      </div>
    </footer>
  );
}

export default Footer;
