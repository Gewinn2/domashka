import React, { useContext } from 'react'
import Homework from '../components/Homework'
import { CurrentHwContext } from '../index'
import { Link, useParams } from 'react-router-dom'

function Archive(props) {
  const data = useContext(CurrentHwContext)
  const { lessonId } = useParams()

  return (
    <div className='archive'>
      {data[lessonId - 1].archiveHomework.map((homework) => {
        const path = `/Archive/${lessonId}/ArchiveHomework/${homework.id}`
        return (
          <Link to={path}>
            <Homework homework={homework} />
          </Link>
        )
      })}
    </div>
  )
}

export default Archive
