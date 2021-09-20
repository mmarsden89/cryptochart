import "./ErrorMessage.scss";

const ErrorMessage = (props) => {
  const { message } = props;
  return (
    <div className="error-container">
      <p>{message || ""}</p>
    </div>
  );
};

export default ErrorMessage;
