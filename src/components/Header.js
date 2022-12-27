import PropTypes from 'prop-types'

const Header = ({title}) => {
  return (
    <header className='header'>
        <h1>{title}</h1>
        <h2>Cash'd gives you easy to use tools to find your ideal cannabis strain</h2>
        
    </header>
  )
}

Header.defaultProps = {
    title: "Welcome to Cash'd",
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header