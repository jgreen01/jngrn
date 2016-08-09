import createNavBar from 'components/NavBar';
import createFooter from 'components/Footer';

require('sass/App.scss');

export default React => () => {
  const Footer = createFooter(React);
  const NavBar = createNavBar(React);

  return (
    <div id="page-container">
      <NavBar />
      <div className="content">
      </div>
      <Footer />
    </div>
  );
};
