import Header from './components/Header'
import Button from './components/Button'
import TextArea from './components/TextArea'
import { useState } from 'react'

function App() {

  

  return (
    <div className='container'>
      <Header title="Welcome to Cash'd" />
      <TextArea />
      <Button color="#0099CC" text="Suggest a Strain"/>

      
    </div>
  );
}

export default App;
