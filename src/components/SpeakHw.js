import React from 'react'
import { FaMicrophone } from 'react-icons/fa'

class WritingHw extends React.Component {
  render() {
    return (
      <div className='speakHw'>
        <FaMicrophone className='speakIcon' />
        <div className='homeworkText'>
          <p>{this.props.text}</p>
        </div>
      </div>
    )
  }
}

export default WritingHw
