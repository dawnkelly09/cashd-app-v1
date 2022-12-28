import Suggestion from "./Suggestion"

const Suggestions = ({ suggestions }) => {
  return (
    <>
      {suggestions.map((suggestion) => (
        <Suggestion key={suggestions.id} suggestion={suggestion} />
      ))}
    </>
  )
}

export default Suggestions