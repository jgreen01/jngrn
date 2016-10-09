import createFooter from 'components/Footer';

require('sass/App.scss');

export default React => () => {
  const Footer = createFooter(React);

  return (
    <div id="page-container">
      <div className="content">
        <div className="page-message">
          <div className="page-question">Why climb Mount Everest?</div>
          <div className="page-quote">
            "...there is something in man which responds to the challenge of
            this mountain and goes out to meet it, that the struggle is <i>the
            struggle of life itself upward and forever upward</i>..."
          </div>
          <i className="page-quote-author">- George Mallory</i>
        </div>
      </div>
      <Footer />
    </div>
  );
};
