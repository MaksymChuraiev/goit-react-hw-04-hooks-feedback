import { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { StatisticsTitle } from './Statistics/Statistics.styled';
import { Notification } from 'components/Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrement = e => {
    const buttonName = e.target.textContent;

    switch (buttonName) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    if (!countTotalFeedback()) {
      return;
    }

    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions
        options={Object.keys({ good, neutral, bad })}
        onLeaveFeedback={handleIncrement}
      ></FeedbackOptions>
      <StatisticsTitle>Statistics</StatisticsTitle>
      {countTotalFeedback() > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Section>
  );
};

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   countTotalFeedback = () => {
//     return Object.values(this.state).reduce((total, item) => total + item, 0);
//   };

//   countPositiveFeedbackPercentage = () => {
//     const positivePercentage = Math.round(
//       (this.state.good / this.countTotalFeedback()) * 100
//     );

//     return positivePercentage;
//   };

//   handleIncrement = e => {
//     this.setState(prevState => ({
//       [e.target.textContent]: prevState[e.target.textContent] + 1,
//     }));
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();

//     return (
//       <Section title="Please leave feedback">
//         <FeedbackOptions
//           options={Object.keys(this.state)}
//           onLeaveFeedback={this.handleIncrement}
//         ></FeedbackOptions>
//         <StatisticsTitle>Statistics</StatisticsTitle>
//         {total > 0 ? (
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={this.countTotalFeedback()}
//             positivePercentage={this.countPositiveFeedbackPercentage()}
//           />
//         ) : (
//           <Notification message="There is no feedback" />
//         )}
//       </Section>
//     );
//   }
// }
