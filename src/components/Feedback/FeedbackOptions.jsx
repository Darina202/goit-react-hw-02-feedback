import styles from './Feedback.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const buttonElements = options.map(name => (
    <button
      onClick={() => onLeaveFeedback(name)}
      className={styles.btn}
      key={name}
    >
      {name}
    </button>
  ));
  return buttonElements;
};

export default FeedbackOptions;
