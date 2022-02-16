import React from 'react'

import './QuestAndAns.css'

import { ReactComponent as ChevronIcon } from '../assets/icons/chevron.svg'

const QuestAndAns = ({ question, answer, onHandleClickQuestion, id, activeAnswer }) => {
  const handleButtonClick = () => {
    onHandleClickQuestion(id)
  }

  return (
    <button className='QuestAndAns btn' onClick={handleButtonClick}>
      <div className='q-and-a__question'>
        <p>{question}</p>
        <ChevronIcon className={`chevron-icon ${activeAnswer === id ? 'active' : ''}`} />
      </div>
      <p className={`q-and-a__answer ${activeAnswer === id ? 'active' : ''}`}>{answer}</p>
    </button>
  )
}

export default QuestAndAns
