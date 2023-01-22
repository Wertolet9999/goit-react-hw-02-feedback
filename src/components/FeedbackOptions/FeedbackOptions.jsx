import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    <button
      className={css.button}
      type="button"
      name={options}
      onClick={onLeaveFeedback}
    >
      {options}
    </button>
  </>
);

FeedbackOptions.propTypes = {
  options: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};