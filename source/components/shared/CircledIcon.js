require('sass/components/shared/CircledIcon.scss');

export default React => ({ svg }) => (
  <div className="circledicon-component"
    dangerouslySetInnerHTML={ { __html: svg } }
  />
);
