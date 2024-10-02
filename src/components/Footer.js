import React from 'react'
import { FiAlignJustify } from 'react-icons/fi'
import { Link, Outlet } from 'react-router-dom'
import { BsFillPersonFill } from 'react-icons/bs'

class Footer extends React.Component {
  render() {
    return (
      <div>
        <Outlet />
        <div className='footer'>
          <div className='border'></div>
          <div className='footerCont'>
            <Link to={'/'} className='buttonLeft'>
              <FiAlignJustify className='icon' />
              <p className='text'>Дисциплины</p>
            </Link>
            <Link className='buttonRight'>
              <BsFillPersonFill className='icon' />
              <p className='text'>Группа</p>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
