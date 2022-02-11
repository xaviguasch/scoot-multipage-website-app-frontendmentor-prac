import React from 'react'

import './QuestAndAns.css'

const QuestAndAns = ({ question, answer, onHandleClickQuestion, id, activeAnswer }) => {
  const handleButtonClick = () => {
    onHandleClickQuestion(id)
  }

  return (
    <button className='QuestAndAns btn' onClick={handleButtonClick}>
      <p className='q-and-a__question'>{question}</p>
      <p className={`q-and-a__answer ${activeAnswer === id ? 'active' : ''}`}>{answer}</p>
    </button>
  )
}

export default QuestAndAns
