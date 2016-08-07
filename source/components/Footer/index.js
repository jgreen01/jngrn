require('sass/components/Footer/Footer.scss');

export default React => () => (
  <div className="footer-component">
    <a
      className="home-link"
      href="jongreen.me"
    >
      Home
    </a>
    <div className="footer-plug">
      <a
        className="plug-link"
        href="https://github.com/jgreen82"
      >
        github
      </a>
      <a
        className="plug-link"
        href="https://www.linkedin.com/in/jonathong"
      >
        linkedin
      </a>
      <span className="footer-copyright">&copy; Jon Green</span>
    </div>
  </div>
);
