import PropTypes from 'prop-types'
import { SectionText } from './Notification.styles'

export default function Notification({ message }) {
  return <SectionText>{message}</SectionText>
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
}
