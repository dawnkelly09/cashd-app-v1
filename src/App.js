import Header from './components/Header'
import Button from './components/Button'
import TextArea from './components/TextArea'
import Suggestions from './components/Suggestions'
import { useState } from 'react'
//import ReactGA from 'react-ga'

//import generateAction from './generate'



function App() {

  const [suggestions, setSuggestions] = useState([
    {
      id: 1,
      text: 'This is some text about cannabis strains',
    },
    {
      id: 2,
      text: 'More text about cannabis strains',
    },
    {
      id: 3,
      text: 'This is the final text about cannabis strains',
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
      <Suggestions suggestions={suggestions} />
      

      
    </div>
  );
}

export default App;
