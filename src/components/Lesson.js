import React from 'react'
import TextTruncate from 'react-text-truncate'
import { Link } from 'react-router-dom'

class Lesson extends React.Component {
  lessonName = this.props.lessonName
  currentHomework = this.props.currentHomework
  writingText = this.currentHomework.writingDiscription
  speakText = this.currentHomework.speakDiscription
  photos = this.props.photos
  path = `/homework/${this.props.id}`
  render() {
    return (
      <Link className='homeworkLink' to={this.path}>
        <div
          className={`lesson ${
            this.writingText + this.speakText === '' ? '' : 'filledTitle'
          }`}
        >
          <p className='lessonName'>{this.lessonName}</p>
          <div
            className={`lessonHomework ${
              this.writingText + this.speakText === '' ? '' : 'filledHomework'
            }`}
          >
            <div className='lessonText'>
              <TextTruncate
                line={2}
                element='p'
                truncateText='…'
                text={this.speakText}
                textTruncateChild=''
              />
              <TextTruncate
                line={2}
                element='p'
                truncateText='…'
                text={this.writingText}
                textTruncateChild=''
              />
              {/* <p>{this.speakText}</p> */}
            </div>
            <p className='deadline'>
              Срок сдачи: {this.currentHomework.deadline}
              <div className='userPhotos'>
                <img
                  id='backPhoto'
                  className='user_photo'
                  src='https://avatars.mds.yandex.net/i?id=4e3a3e999f387267a833faa58a8df886e3c42566-5885354-images-thumbs&n=13'
                  alt=''
                />
                <img
                  id='middlePhoto'
                  className='user_photo'
                  src='https://avatars.mds.yandex.net/i?id=9670951a831ad644d64b1f5f27b55f0ceee7bdc7-9085653-images-thumbs&n=13'
                  alt=''
                />

                <img
                  id='frontPhoto'
                  className='user_photo'
                  src='https://avatars.mds.yandex.net/i?id=deb28f4776788bbc376e4f4425ddf80cc219d716-7755864-images-thumbs&n=13'
                  alt=''
                />
              </div>
            </p>
          </div>
        </div>
      </Link>
    )
  }

  onclickLesson() {
    window.location = 'Homework/'
  }
}

export default Lesson
