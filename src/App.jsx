import { useReducer } from 'react'
import Statistics from './components/Statistics/Statistics'
import Section from './components/Section/Section'
import Notification from './components/Notification/Notification'
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions'
import './App.css'

function countReducer(prevState, nextState) {
  return prevState + nextState
}

export default function App() {
  const [good, setGood] = useReducer(countReducer, 0)
  const [neutral, setNeutral] = useReducer(countReducer, 0)
  const [bad, setBad] = useReducer(countReducer, 0)
  const handleIncreament = (type) => {
    switch (type) {
      case 'good':
        setGood(1)
        break

      case 'neutral':
        setNeutral(1)
        break

      case 'bad':
        setBad(1)
        break

      default:
        return
    }
  }

  const countTotalFeedback = () => {
    return good + neutral + bad
  }

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100)
  }

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={handleIncreament}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </>
  )
}
