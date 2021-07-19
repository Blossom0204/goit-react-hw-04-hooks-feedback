import PropTypes from 'prop-types'
import { SectionText } from './Section.styles'

export default function Section({ title, children }) {
  return (
    <>
      <SectionText>{title}</SectionText>
      {children}
    </>
  )
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}
