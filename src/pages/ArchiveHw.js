import React, { useContext } from 'react'
import User from '../components/User'
import Homework from '../components/Homework'
import { CurrentHwContext } from '../index'
import { useParams } from 'react-router-dom'

function ArchiveHw() {
  const data = useContext(CurrentHwContext)
  const { lessonId, archiveHomeworkId } = useParams()

  return (
    <div className='hwMain'>
      <Homework
        homework={data[lessonId - 1].archiveHomework[archiveHomeworkId - 1]}
      />
      <div className='usersList'></div>
      {data[lessonId - 1].currentHomework.users.map((el) => (
        <User key={el.id} user={el} />
      ))}
    </div>
  )
}

export default ArchiveHw
