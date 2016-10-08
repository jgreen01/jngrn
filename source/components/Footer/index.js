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
        <div className="footer-links">
          <a className="footer-link"
            href="https://github.com/jgreen82"
          >
            <CircledIcon svg={ gitHubIcon } />
          </a>
          <a className="footer-link"
            href="https://www.linkedin.com/in/jonathong"
          >
            <CircledIcon svg={ linkedinIcon } />
          </a>
          <a className="footer-link"
            href="https://medium.com/@jgreen539"
          >
            <CircledIcon svg={ mediumIcon } />
          </a>
        </div>
      </div>
      <div className="footer-copyright">
        <span className="footer-copyright-msg">
          Solving hard problems elegantly. &copy; Jon Green
        </span>
      </div>
    </div>
  );
};
