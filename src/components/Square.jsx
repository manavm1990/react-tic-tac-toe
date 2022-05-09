import PropTypes from "prop-types";

export default function Square({ mark }) {
  return <div className="square">{mark}</div>;
}

Square.propTypes = {
  mark: PropTypes.string.isRequired,
};
