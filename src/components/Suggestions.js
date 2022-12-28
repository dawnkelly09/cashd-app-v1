const Suggestions = ({ suggestions }) => {

  
  return (
    <>
      {suggestions.map((suggestion) => (
        <p key={suggestions.id}>{suggestions.text}</p>
      ))}
    </>
  )
}

export default Suggestions