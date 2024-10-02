import React from 'react'
import './styles/App.css'
import './styles/homework.css'
import './styles/header.css'
import './styles/user.css'
import './styles/lesson.css'
import './styles/footer.css'
import './styles/archive.css'
import './styles/answer.css'
import './styles/comment.css'
import './styles/inputComment.css'
import MainLessons from './pages/MainLessons'

function App() {
  return (
    <div>
      <MainLessons />
      {/* <MainHw users={this.state.users} homework={this.state.lessons[0]} /> */}
    </div>
  )
}

export default App
