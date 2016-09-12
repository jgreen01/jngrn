import createHeader from 'components/Header';
import createFooter from 'components/Footer';

require('sass/App.scss');

export default React => () => {
  const Footer = createFooter(React);
  const Header = createHeader(React);

  return (
    <div id="page-container">
      <Header />
      <div className="content">
      </div>
      <Footer />
    </div>
  );
};
