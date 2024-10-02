import React, { useContext, useState } from 'react'
import { CurrentHwContext } from '../index'
import { useParams } from 'react-router-dom'
import { BsStar } from 'react-icons/bs'
import { FaFilePdf, FaFileWord, FaFileExcel } from 'react-icons/fa'
import { BsStarFill } from 'react-icons/bs'

import Comment from '../components/Comment'
import GalleryCarousel from 'react-gallery-carousel'
import 'react-gallery-carousel/dist/index.css'
import Homework from '../components/Homework'
import Modal from 'react-modal'
import ReactRating from 'react-rating'
import InputComment from '../components/InputComment'

const getIcon = (fileType) => {
  switch (fileType) {
    case 'pdf':
      return <FaFilePdf className='linkIcon' />
    case 'doc':
    case 'docx':
      return <FaFileWord className='linkIcon' />
    case 'xls':
    case 'xlsx':
      return <FaFileExcel className='linkIcon' />
    default:
      return null
  }
}

function Answer() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [rating, setRating] = useState(0)

  const openModal = () => setModalIsOpen(true)
  const closeModal = () => setModalIsOpen(false)

  const data = useContext(CurrentHwContext)
  const { lessonId, userId, archiveHomeworkId } = useParams()

  const homeworkPath =
    archiveHomeworkId === undefined
      ? data[lessonId - 1].currentHomework
      : data[lessonId - 1].archiveHomework[archiveHomeworkId - 1]

  const user = homeworkPath.users[userId - 1]
  const firstName = user.first_name
  const lastName = user.last_name
  const filledScore = Math.round(user.score)

  return (
    <div className='answer'>
      <div className='profile'>
        <img src={user.photo} alt='' />
        <p>
          {firstName} {lastName}
        </p>
      </div>

      <Homework homework={homeworkPath} />

      <div className='textScore'>
        <p className='textAnswer'>Ответ к заданию:</p>
        <div className='stars' onClick={openModal}>
          {[...Array(filledScore)].map(() => (
            <BsStarFill className='star' />
          ))}
          {[...Array(5 - filledScore)].map(() => (
            <BsStar className='star' />
          ))}
          <p className='score'>{user.score}</p>
        </div>
      </div>
      <hr />
      <div className='files'>
        <div className='carousel-container'>
          <GalleryCarousel
            className='carousel'
            images={user.answer.images.map((image) => ({
              src: image.src,
            }))}
            hasThumbnails={true}
            hasIndexBoard={true}
            hasMediaButton={true}
            hasSizeButton={true}
          />
        </div>

        {user.answer.files.map((el) => (
          <a href={el.link}>{getIcon(el.fileType)}</a>
        ))}
      </div>
      <hr />

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <span className='modalScore'>{user.score}</span>
        {[...Array(filledScore)].map(() => (
          <BsStarFill className='star' />
        ))}
        {[...Array(5 - filledScore)].map(() => (
          <BsStar className='star' />
        ))}

        <div className='chooseScore'>
          <p>Оцените ответ</p>
          <ReactRating
            className='reactRating'
            initialRating={rating === 0 ? 5 : rating}
            quiet={true}
            start={0}
            stop={5}
            emptySymbol={<BsStar className='ratingStar' />}
            fullSymbol={<BsStarFill className='ratingStar' />}
            onChange={(value) => {
              setRating(value)
            }}
          />
          <button onClick={closeModal}>Сохранить</button>
        </div>
      </Modal>

      <div className='comments'>
        <div className='commentsTitle'>
          <p className='commentsText'>Комментарии</p>
          <p className='commentsCount'> {user.answer.comments.length}</p>
        </div>

        <div className='commentsList'>
          {user.answer.comments.map((el) => (
            <Comment
              key={el.userId}
              user={data[lessonId - 1].users[el.userId - 1]}
              value={el.value}
            />
          ))}
          <div className='addComment'>
            <InputComment />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Answer
