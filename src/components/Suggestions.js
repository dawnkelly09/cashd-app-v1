
const Suggestions = ({ suggestions }) => {
  

  return (
    <>
      {suggestions.map((suggestion) => (
        <h3 key={suggestion.id}>{suggestion.text}</h3>
      ))}
    </>
  )
}

export default Suggestions