import styles from './Feedback.module.css';

const Section = ({ title, children }) => {
  return (
    <div className={styles.block}>
      <h4 className={styles.blockTitle}>{title}</h4>
      {children}
    </div>
  );
};

export default Section;
