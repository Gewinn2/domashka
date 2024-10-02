import React, { useContext } from 'react'
import Lesson from '../components/Lesson'
import LessonsHeader from '../components/LessonsHeader'
import { DataContext } from '../index'

function MainLessons() {
  const data = useContext(DataContext)

  return (
    <div>
      <LessonsHeader groupName={data.groupName} />
      {data.lessons.map((lesson) => (
        <Lesson
          id={lesson.id}
          photos={data.photos}
          lessonName={lesson.lesson_name}
          currentHomework={lesson.currentHomework}
        />
      ))}
    </div>
  )
}

export default MainLessons
