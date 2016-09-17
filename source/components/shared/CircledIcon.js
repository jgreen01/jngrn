require('sass/components/shared/CircledIcon.scss');

export default React => ({ children }) => (
  <div className="circledicon-component">
    <div className="circledicon-child">{ children }</div>
  </div>
);
