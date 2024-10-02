import React from 'react'

function Comment(props) {
  return (
    <div className='comment'>
      <img className='userPhoto' src={props.user.photo} alt='' />
      {props.text}
      <div className='value'>
        <p className='userName'>
          {props.user.first_name} {props.user.last_name}
        </p>
        <p>{props.value}</p>
      </div>
    </div>
  )
}

export default Comment
