import Header from './components/Header'
import Button from './components/Button'
import TextArea from './components/TextArea'
import Suggestions from './components/Suggestions'
//import generateAction from './generate'
import { useState } from 'react'


function App() {

  const [suggestions, makeSuggestions] = useState([
    {
      id: 1,
      text: "Durban Poison is great for additional creativity!",
    },
    {
      id: 2,
      text: "Han Solo Burger will help you sleep.",
    },
  ])
  
  const onClick = () => {
    console.log('click')
  }
  return (
    <div className='container'>
      <Header title="Welcome to Cash'd" />
      <TextArea />
      <Button color='#0099cc' 
              text='Suggest a Strain' 
              onClick={onClick} />
      <Suggestions suggestions={suggestions}/>
      

      
    </div>
  );
}

export default App;
