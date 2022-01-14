import PropTypes from "prop-types";
import Button from "./Button";
const Header = ({ title }) => {
  const onClick = () => {
    console.log("Click");
  };
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Hello" onClick={onClick} />
    </header>
  );
};

//default value
Header.defaultProps = {
  title: "task tracker",
};

// css in js
// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// };

// Header.propTypes = {
//   title: PropTypes.string,
// };

export default Header; //used to be requiredader
