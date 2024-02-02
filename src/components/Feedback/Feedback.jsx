import { Component } from 'react';
import styles from './Feedback.module.css';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';

class Feedback extends Component {
  static voteOptions = ['good', 'neutral', 'bad'];

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    const { good } = this.state;
    if (total === 0) {
      return 0;
    }
    return Number(((good / total) * 100).toFixed(2));
  }

  onLeaveFeedback = keyName => {
    this.setState(prevState => {
      return {
        [keyName]: prevState[keyName] + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;

    const total = this.countTotalFeedback();
    const percent = this.countPositiveFeedbackPercentage();

    return (
      <div className={styles.wrapper}>
        <Section title={'Please leave feedback ❤️'}>
          <FeedbackOptions
            options={Feedback.voteOptions}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title={'Statistics 📊'}>
          {Boolean(total) && (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={percent}
            />
          )}
          {Boolean(!total) && <Notification message="There is no feedback" />}
        </Section>
      </div>
    );
  }
}

export default Feedback;
