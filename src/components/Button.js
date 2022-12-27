

const Button = ({ color, text }) => {
  return (
    <button 
      style={{ backgroundColor: color }} 
      className='btn'
      onClick={null}>
        {text} 
    </button>
  )
}

export default Button