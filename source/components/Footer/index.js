import createCircledIcon from '../shared/CircledIcon';

require('sass/components/Footer/index.scss');

const gitHubIcon = require('../../images/github.svg');
const linkedinIcon = require('../../images/linkedin.svg');
const mediumIcon = require('../../images/medium.svg');

export default React => () => {
  const CircledIcon = createCircledIcon(React);
  return (
    <div className="footer-component">
      <div className="footer-plug">
        <div className="footer-head">
          <div className="footer-logo">
            JG
          </div>
          <div className="footer-message">
            Solving hard problems elegantly.
          </div>
        </div>
        <div className="footer-links">
          <a className="footer-plug-link"
            href="https://github.com/jgreen82"
          >
            <CircledIcon svg={ gitHubIcon } />
          </a>
          <a className="footer-plug-link"
            href="https://www.linkedin.com/in/jonathong"
          >
            <CircledIcon svg={ linkedinIcon } />
          </a>
          <a className="footer-plug-link"
            href="https://medium.com/@jgreen539"
          >
            <CircledIcon svg={ mediumIcon } />
          </a>
        </div>
      </div>
      <div className="footer-copyright">
        <span className="footer-copyright-text">Handcrafted with Love. &copy; Jon Green</span>
      </div>
    </div>
  );
};
