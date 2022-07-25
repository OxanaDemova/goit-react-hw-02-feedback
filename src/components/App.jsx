import { Component } from "react";
import { Container } from "./Container/Container";
import { Section } from "./Section/Section";

import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }


  handleFeedbackOptions = (e) => {
    const btnTarget = e.target.textContent.toLowerCase();
    this.setState(prevState => ({
      [btnTarget]: prevState[btnTarget] + 1,
    }))
  };




  countTotalFeedback()  {
    
    return Object.values(this.state).reduce((total, item) => total + item, 0);
  
    
  };

  countPositiveFeedbackPercentage() {
    const { good, bad, neutral } = this.state;
    return Math.ceil(good / (good + bad + neutral) * 100);
  }
  


  render() {

    const { good, bad, neutral } = this.state;

    return (
      
      <Container>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleFeedbackOptions}
          />

          <Statistics
            title={'Statistics'}
            good={good}
            bad={bad}
            neutral={neutral}
            total={this.countTotalFeedback()}
            positive={this.countPositiveFeedbackPercentage()}
               
          />
        </Section>
      </Container>
  
    );
  }
};
