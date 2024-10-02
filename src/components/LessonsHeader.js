import React from 'react'

class LessonsHeader extends React.Component {
  render() {
    return (
      <div className='lessonsHeader'>
        <p>{this.props.groupName}</p>
      </div>
    )
  }
}

export default LessonsHeader
