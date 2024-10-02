import React from 'react'
import { FaPen } from 'react-icons/fa'

class WritingHw extends React.Component {
  render() {
    return (
      <div className='writingHw'>
        <FaPen className='writingIcon' />
        <div className='homeworkText'>
          <p>{this.props.text}</p>
        </div>
      </div>
    )
  }
}

export default WritingHw
