import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {
  return <button 
            onClick={onClick}
            className='btn'
            style = {{backgroundColor: color}}>
              {text}
        </button>
}

Button.defaultProps = {
  color: '#0099cc',
}

Button.propTypes = {
  test: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button