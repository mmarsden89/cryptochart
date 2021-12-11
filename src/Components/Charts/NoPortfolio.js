const NoPortfolio = (props) => {
  const { handleNewPortfolio } = props;
  return (
    <div className="no-portfolio">
      <h1>hmm..</h1>
      <h3>doesn't look like you have a portfolio set up</h3>
      <h4>would you like to do that now?</h4>
      <button onClick={handleNewPortfolio}>set up now?</button>
    </div>
  );
};

export default NoPortfolio;
