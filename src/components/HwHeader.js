import React, { useContext } from 'react'
import { NavLink, Outlet, useParams } from 'react-router-dom'
import { CurrentHwContext } from '..'

function HwHeader(props) {
  const data = useContext(CurrentHwContext)
  const { lessonId } = useParams()

  const lessonName = data[lessonId - 1].lesson_name
  const homeworkPath = `/Homework/${lessonId}`
  const archivePath = `/Archive/${lessonId}`

  return (
    <>
      <header>
        <h1 className='title'>{lessonName}</h1>

        <div className='nav'>
          <NavLink to={homeworkPath} className='navButton'>
            Домашнее задание
          </NavLink>
          <NavLink to={archivePath} className='navButton'>
            Архив
          </NavLink>
        </div>
      </header>
      <Outlet />
    </>
  )
}

export default HwHeader
