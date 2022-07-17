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


  render() {

    return (
      <Container>
        <Section title={'Please leave feedback'}>
          <Button text={'Good'} />
          <Button text={'Neutral'} />
          <Button text={'Bad'} />
          <Statistics
            title={'Statistics'}
            good={this.state.good}
            bad={this.state.bad}
            neutral={this.state.neutral}
          />
        </Section>
      </Container>
  
    );
  }
};
