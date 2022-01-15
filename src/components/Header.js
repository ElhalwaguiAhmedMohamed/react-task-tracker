import PropTypes from "prop-types";
import Button from "./Button";
const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Open"}
        onClick={onAdd}
      />
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
