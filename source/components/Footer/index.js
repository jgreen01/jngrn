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
        <a className="footer-plug-link"
          href="https://github.com/jgreen82"
        >
          <CircledIcon>
            <div className="gh-svg"
              dangerouslySetInnerHTML={ { __html: gitHubIcon } }
            />
          </CircledIcon>
        </a>
        <a className="footer-plug-link"
          href="https://www.linkedin.com/in/jonathong"
        >
          <CircledIcon>
            <div className='in-svg'
              dangerouslySetInnerHTML={ { __html: linkedinIcon } }
            />
          </CircledIcon>
        </a>
        <a className="footer-plug-link"
        >
          <CircledIcon>
            <div className='m-svg'
              dangerouslySetInnerHTML={ { __html: mediumIcon } }
            />
          </CircledIcon>
        </a>
      </div>
      <div className="footer-copyright">
        <span className="footer-copyright-text">Handcrafted with Love. &copy; Jon Green</span>
      </div>
    </div>
  );
};
