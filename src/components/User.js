import React from 'react'
import { BsStar } from 'react-icons/bs'
import { Link } from 'react-router-dom'

class User extends React.Component {
  user = this.props.user

  render() {
    const path = `Answer/${this.user.id}`
    return (
      <div className='user'>
        <Link className='userLink' to={path}>
          <div className='user_info'>
            <img
              src='https://avatars.mds.yandex.net/i?id=2414e1a11e8ea018c07319af1c31604f93fa0baa-10165663-images-thumbs&n=13'
              className='user_photo'
              alt=''
            />
            <p className='user_name'>
              {this.user.first_name} {this.user.last_name}
            </p>
          </div>
          <div className='scoreWrap'>
            <BsStar className='scoreIcon' />
            <p className='scoreValue'>{this.props.user.score}</p>
          </div>
        </Link>
      </div>
    )
  }
}

export default User
