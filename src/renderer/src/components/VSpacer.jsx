import PropTypes from 'prop-types'

const VSpacer = ({ size }) => {
  return <div style={{ display: 'block', height: size + 'px' }}></div>
}

export default VSpacer

VSpacer.propTypes = {
  size: PropTypes.number.isRequired
}
