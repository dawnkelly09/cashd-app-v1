import React, { useState } from 'react';

const TextArea = () => {

    const [userInput, setUserInput] = useState('')

    const onUserChangedText = (event) => {
        //tests the text input is working
      //console.log(event.target.value)
      setUserInput(event.target.value)
    };
    
  return (
    <div className="prompt-container">
        <textarea placeholder="What can Cash'd help you find today?" 
        className='prompt-box' 
        value={userInput}
        onChange={onUserChangedText} />
    </div>
  )
}

export default TextArea