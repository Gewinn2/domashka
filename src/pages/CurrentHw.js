import React, { useContext } from 'react'
import User from '../components/User'
import Homework from '../components/Homework'
import { CurrentHwContext } from '../index'
import { useParams } from 'react-router-dom'

function CurrentHw() {
  const data = useContext(CurrentHwContext)
  const { lessonId } = useParams()
  return (
    <div className='hwMain'>
      <Homework homework={data[lessonId - 1].currentHomework} />
      <div className='usersList'></div>
      {data[lessonId - 1].currentHomework.users.map((el) => (
        <User key={el.id} user={el} />
      ))}
    </div>
  )
}

export default CurrentHw
