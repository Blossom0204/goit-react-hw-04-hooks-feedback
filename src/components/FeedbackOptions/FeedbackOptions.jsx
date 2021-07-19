import PropTypes from 'prop-types'
import { FeedbackButtons, CustomButton } from './FeedbackOptions.styles'

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <FeedbackButtons>
    {Object.keys(options).map((option) => (
      <CustomButton
        key={option}
        type="button"
        name={option}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </CustomButton>
    ))}
  </FeedbackButtons>
)

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}
export default FeedbackOptions
