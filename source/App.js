import createHeader from 'components/Header';
import createFooter from 'components/Footer';
import createSection from 'components/Section';

require('sass/App.scss');

export default React => () => {
  const Footer = createFooter(React);
  const Header = createHeader(React);
  const Section = createSection(React);

  return (
    <div id="page-container">
      <Header />
      <div className="content">
        <Section> // is the section component even needed
          <div className="">
          </div>
        </Section>
      </div>
      <Footer />
    </div>
  );
};
