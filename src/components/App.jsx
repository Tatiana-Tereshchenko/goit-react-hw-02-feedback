import { Component } from 'react';
import { Feedbackoptions } from './Feedbackoptions/Feedbackoptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';




export class App extends Component  {
    state = {
      good: 0,
      neutral: 0,
      bad: 0
    }

  handelFeedback = (type) => {
    this.setState((prevState) => ({
        [type]: prevState[type] +1
      }) )
    }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state
    return good + neutral + bad
  }
  
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state
    const totalFeedback = this.countTotalFeedback();
    return totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const pozitivPercentage = this.countPositiveFeedbackPercentage();
    
    return (
      <div>
        <Section title='Please leave feedback'>
          <Feedbackoptions
            options={['good', 'neutral', 'bad']}
            onLeaveFback = {this.handelFeedback}
          />
        </Section>
        <Section title='Statistics'>
          {totalFeedback === 0 ? (<Notification message="There is no feedback" />) : (<Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={pozitivPercentage}
          />)}
        </Section>
      </div>
    ) 
  }
  
};
