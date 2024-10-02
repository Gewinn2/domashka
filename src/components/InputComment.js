import React, { useState, useRef } from 'react'
import { IoIosSend } from 'react-icons/io'

const InputComment = () => {
  const [isFocused, setIsFocused] = useState(false)
  const textRef = useRef(null)

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    if (textRef.current.value.length === 0) setIsFocused(false)
  }

  return (
    <div className={`input-field`} onClick={handleFocus} onBlur={handleBlur}>
      <textarea ref={textRef} placeholder='Добавить комментарий...' />
      {isFocused && <div className='overlay' />}
      <div className={`arrow-wrap-display ${isFocused ? 'focused' : ''}`}>
        <div className={`arrow-wrap`}>
          <IoIosSend />
        </div>
      </div>
    </div>
  )
}

export default InputComment
