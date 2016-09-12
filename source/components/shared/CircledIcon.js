require('sass/components/shared/CircledIcon.scss');

export default React => ({ children }) => (
  <div className="circledicon-component">
    <span className="circledicon-icon">{ children }</span>
  </div>
);
