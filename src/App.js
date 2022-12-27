import Header from './components/Header'
import Button from './components/Button'
import TextArea from './components/TextArea'
//import generateAction from './generate'
//import { useState } from 'react'


function App() {
  
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
      

      
    </div>
  );
}

export default App;
