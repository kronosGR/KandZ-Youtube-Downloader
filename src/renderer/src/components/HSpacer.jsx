import PropTypes from 'prop-types'
const HSpacer = ({ size }) => {
  return <div style={{ display: 'block', width: size + 'px' }}></div>
}

export default HSpacer

HSpacer.propTypes = {
  size: PropTypes.number.isRequired
}
