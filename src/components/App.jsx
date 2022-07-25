import { Component } from "react";
import { Container } from "./Container/Container";
import { Section } from "./Section/Section";
import { Button } from "./Button/Button";
import { Statistics } from "./Statistics/Statistics";


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }


  handleGoodFeedback = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  handleNeutralFeedback = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }))
  };

  handleBadFeedback = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }))
  };

  countTotalFeedback = ({ good, bad, neutral }) => {
    
    const totalFeedback = good + bad + neutral;
  
    return totalFeedback;
  };
  


  render() {

    const { good, bad, neutral } = this.state;

    return (
      
      <Container>
        <Section title={'Please leave feedback'}>
          <Button text={'Good'}  onIncrement={this.handleGoodFeedback}/>
          <Button text={'Neutral'} onIncrement={this.handleNeutralFeedback}/>
          <Button text={'Bad'} onIncrement={this.handleBadFeedback} />
          <Statistics
            title={'Statistics'}
            good={good}
            bad={bad}
            neutral={neutral}
            total={this.countTotalFeedback}
               
          />
        </Section>
      </Container>
  
    );
  }
};
