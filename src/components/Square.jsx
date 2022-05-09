import PropTypes from "prop-types";

export default function Square({ index, mark, clickHandler }) {
  return (
    <div
      className="square"
      onClick={() => {
        clickHandler(index);
      }}
      onKeyDown={() => {
        clickHandler(index);
      }}
      role="button"
      tabIndex={0}
    >
      {mark}
    </div>
  );
}

Square.propTypes = {
  index: PropTypes.number.isRequired,
  mark: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};
