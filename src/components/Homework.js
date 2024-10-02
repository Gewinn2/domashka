import React from 'react'
import WritingHw from '../components/WritingHw'
import SpeakHw from '../components/SpeakHw'

function Homework(props) {
  const deadline = props.homework.deadline
  const speakDiscription = props.homework.speakDiscription
  const writingDiscription = props.homework.writingDiscription
  const today = new Date()
  const dd = parseInt(String(today.getDate()).padStart(2, '0'))
  const mm = parseInt(String(today.getMonth() + 1).padStart(2, '0'))

  const deadlineDay = parseInt(deadline.split('.')[0])
  const deadlineMonth = parseInt(deadline.split('.')[1])
  return (
    <div className='homework'>
      <p className='dateNumber'>
        {deadlineMonth < mm || (deadlineMonth === mm && deadlineDay < dd)
          ? 'Дедлайн прошел: ' + deadline
          : 'Срок сдачи: ' + deadline}
      </p>
      {speakDiscription === '' && writingDiscription === '' ? (
        <div>Ничего не задано!</div>
      ) : (
        ''
      )}
      {writingDiscription !== '' ? <WritingHw text={writingDiscription} /> : ''}

      {writingDiscription !== '' ? <SpeakHw text={speakDiscription} /> : ''}
      <div className='speakHw'></div>
    </div>
  )
}

export default Homework
