import createCircledIcon from '../shared/CircledIcon';

require('sass/components/Footer/index.scss');

export default React => () => {
  const CircledIcon = createCircledIcon(React);
  return (
    <div className="footer-component">
      <div className="footer-plug">
        <a className="footer-plug-link"
          href="https://github.com/jgreen82"
        >
          <CircledIcon>github</CircledIcon>
        </a>
        <a className="footer-plug-link"
          href="https://www.linkedin.com/in/jonathong"
        >
          <CircledIcon>linkedin</CircledIcon>
        </a>
      </div>
      <div className="footer-copyright">
        <span className="footer-copyright-text">Handcrafted with Love. &copy; Jon Green</span>
      </div>
    </div>
  );
};