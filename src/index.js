import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import ErrorPage from './pages/ErrorPage'
import CurrentHw from './pages/CurrentHw'
import Answer from './pages/Answer'
import Archive from './pages/Archive'

import HwHeader from './components/HwHeader'
import Footer from './components/Footer'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ArchiveHw from './pages/ArchiveHw'
import NewGroup from './pages/NewGroup'
import GroupSet from './pages/GroupSet'

const data = {
  UserData: {
    first_name: 'Дмитрий',
    second_name: 'Шагалин',
    photo:
      'https://avatars.mds.yandex.net/get-direct/5240674/bTmp2G_ylv8Vn36yWV36PA/x180',
    groups: [
      {
        groupId: 1,
        groudName: 'ЭФБО-01-23',
      },
      {
        groupId: 2,
        groudName: 'ЭФБО-10-23',
      },
      {
        groupId: 3,
        groudName: '11A крутой класс',
      },
    ],
  },

  groupName: 'ЭФБО-01-23',
  lessons: [
    {
      id: 1,
      lesson_name: 'Английский язык',
      archiveHomework: [
        {
          id: 1,
          deadline: '15.09',
          writingDiscription: 'Написать много всякого',
          speakDiscription: 'Рассказать много всякого',
          users: [
            {
              id: 1,
              first_name: 'Дмитрий',
              last_name: 'Шагалин',
              photo:
                'https://avatars.mds.yandex.net/i?id=51387854b9f59d386bfd42bd5fee21d8abefcd6b-3526614-images-thumbs&n=13',
              score: '4.4',
              answer: {
                images: [
                  {
                    src: 'https://avatars.mds.yandex.net/i?id=85b7a8d8f217294e264dfd81200f303d6f31bb91-12753081-images-thumbs&n=13',
                  },
                  {
                    src: 'https://avatars.mds.yandex.net/i?id=77f65f523dd67f8da06b1ef84251f18fda6c44a6-12540073-images-thumbs&n=13',
                  },
                  {
                    src: 'https://avatars.mds.yandex.net/i?id=68a4b4fe09f4c2865f4446bce0b18a41b5fd285b-9150090-images-thumbs&n=13',
                  },
                ],
                comments: [
                  {
                    userId: 2,
                    value:
                      'Илья, молодец! Проделана отличная работа. Повышение!',
                  },
                ],
                files: [
                  {
                    fileId: 1,
                    fileType: 'pdf',
                    link: 'https://online-edu.mirea.ru/pluginfile.php/1149291/mod_folder/content/0/%D0%9F%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B5%20%D0%B7%D0%B0%D0%BD%D1%8F%D1%82%D0%B8%D0%B5%20%E2%84%961.2.pdf?forcedownload=1',
                  },
                  {
                    fileId: 2,
                    fileType: 'docx',
                    link: 'https://online-edu.mirea.ru/pluginfile.php/1149291/mod_folder/content/0/%D0%9F%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B5%20%D0%B7%D0%B0%D0%BD%D1%8F%D1%82%D0%B8%D0%B5%20%E2%84%961.2.pdf?forcedownload=1',
                  },
                  {
                    fileId: 3,
                    fileType: 'xls',
                    link: 'https://online-edu.mirea.ru/pluginfile.php/1149291/mod_folder/content/0/%D0%9F%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B5%20%D0%B7%D0%B0%D0%BD%D1%8F%D1%82%D0%B8%D0%B5%20%E2%84%961.2.pdf?forcedownload=1',
                  },
                  {
                    fileId: 4,
                    fileType: 'xlsx',
                    link: 'https://online-edu.mirea.ru/pluginfile.php/1149291/mod_folder/content/0/%D0%9F%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B5%20%D0%B7%D0%B0%D0%BD%D1%8F%D1%82%D0%B8%D0%B5%20%E2%84%961.2.pdf?forcedownload=1',
                  },
                ],
              },
            },
          ],
        },
        {
          id: 2,
          deadline: '20.09',
          writingDiscription: 'Написать мало всякого',
          speakDiscription: 'Рассказать мало всякого',
        },
        {
          id: 3,
          deadline: '15.09',
          writingDiscription: 'Написать много всякого',
          speakDiscription: 'Рассказать много всякого',
        },
        {
          id: 4,
          deadline: '20.09',
          writingDiscription: 'Написать мало всякого',
          speakDiscription: 'Рассказать мало всякого',
        },
        {
          id: 5,
          deadline: '15.09',
          writingDiscription: 'Написать много всякого',
          speakDiscription: 'Рассказать много всякого',
        },
        {
          id: 6,
          deadline: '20.09',
          writingDiscription: 'Написать мало всякого',
          speakDiscription: 'Рассказать мало всякого',
        },
        {
          id: 7,
          deadline: '15.09',
          writingDiscription: 'Написать много всякого',
          speakDiscription: 'Рассказать много всякого',
        },
        {
          id: 8,
          deadline: '20.09',
          writingDiscription: 'Написать мало всякого',
          speakDiscription: 'Рассказать мало всякого',
        },
        {
          id: 9,
          deadline: '15.09',
          writingDiscription: 'Написать много всякого',
          speakDiscription: 'Рассказать много всякого',
        },
        {
          id: 10,
          deadline: '20.09',
          writingDiscription: 'Написать мало всякого',
          speakDiscription: 'Рассказать мало всякого',
        },
      ],
      currentHomework: {
        deadline: '30.09',
        writingDiscription:
          'Написать конспект на тему: "Почему в React так сложно делать вообще все?"',
        speakDiscription:
          'Пересказать 3 томика "Война и мир" и один томик Библии',
        users: [
          {
            id: 1,
            first_name: 'Дмитрий',
            last_name: 'Шагалин',
            photo:
              'https://avatars.mds.yandex.net/i?id=51387854b9f59d386bfd42bd5fee21d8abefcd6b-3526614-images-thumbs&n=13',
            score: '4.1',
            answer: {
              images: [
                {
                  src: 'https://avatars.mds.yandex.net/i?id=85b7a8d8f217294e264dfd81200f303d6f31bb91-12753081-images-thumbs&n=13',
                },
                {
                  src: 'https://avatars.mds.yandex.net/i?id=77f65f523dd67f8da06b1ef84251f18fda6c44a6-12540073-images-thumbs&n=13',
                },
                {
                  src: 'https://avatars.mds.yandex.net/i?id=68a4b4fe09f4c2865f4446bce0b18a41b5fd285b-9150090-images-thumbs&n=13',
                },
              ],
              comments: [
                {
                  userId: 2,
                  value: 'Илья, молодец! Проделана отличная работа. Повышение!',
                },
                {
                  userId: 1,
                  value: 'Илья, лучший!! Плюс вайб вообще',
                },
              ],
              files: [
                {
                  fileId: 1,
                  fileType: 'pdf',
                  link: 'https://online-edu.mirea.ru/pluginfile.php/1149291/mod_folder/content/0/%D0%9F%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B5%20%D0%B7%D0%B0%D0%BD%D1%8F%D1%82%D0%B8%D0%B5%20%E2%84%961.2.pdf?forcedownload=1',
                },
                {
                  fileId: 2,
                  fileType: 'docx',
                  link: 'https://online-edu.mirea.ru/pluginfile.php/1149291/mod_folder/content/0/%D0%9F%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B5%20%D0%B7%D0%B0%D0%BD%D1%8F%D1%82%D0%B8%D0%B5%20%E2%84%961.2.pdf?forcedownload=1',
                },
                {
                  fileId: 3,
                  fileType: 'xls',
                  link: 'https://online-edu.mirea.ru/pluginfile.php/1149291/mod_folder/content/0/%D0%9F%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B5%20%D0%B7%D0%B0%D0%BD%D1%8F%D1%82%D0%B8%D0%B5%20%E2%84%961.2.pdf?forcedownload=1',
                },
                {
                  fileId: 4,
                  fileType: 'xlsx',
                  link: 'https://online-edu.mirea.ru/pluginfile.php/1149291/mod_folder/content/0/%D0%9F%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B5%20%D0%B7%D0%B0%D0%BD%D1%8F%D1%82%D0%B8%D0%B5%20%E2%84%961.2.pdf?forcedownload=1',
                },
              ],
            },
          },
          {
            id: 2,
            first_name: 'Илья',
            last_name: 'Жилов',
            photo:
              'https://avatars.mds.yandex.net/i?id=2414e1a11e8ea018c07319af1c31604f93fa0baa-10165663-images-thumbs&n=13',
            score: '5.0',
          },
          {
            id: 3,
            first_name: 'Даниил',
            last_name: 'Постников',
            photo:
              'https://avatars.mds.yandex.net/i?id=2414e1a11e8ea018c07319af1c31604f93fa0baa-10165663-images-thumbs&n=13',
            score: '',
          },
          {
            id: 4,
            first_name: 'Ксения',
            last_name: 'Акимова',
            photo:
              'https://avatars.mds.yandex.net/i?id=2414e1a11e8ea018c07319af1c31604f93fa0baa-10165663-images-thumbs&n=13',
            score: '4.6',
          },
          {
            id: 5,
            first_name: 'Александр',
            last_name: 'Михлеев',
            photo:
              'https://avatars.mds.yandex.net/i?id=2414e1a11e8ea018c07319af1c31604f93fa0baa-10165663-images-thumbs&n=13',
            score: '',
          },
        ],
      },
      users: [
        {
          id: 1,
          first_name: 'Дмитрий',
          last_name: 'Шагалин',
          photo:
            'https://avatars.mds.yandex.net/i?id=51387854b9f59d386bfd42bd5fee21d8abefcd6b-3526614-images-thumbs&n=13',
          score: '4.4',
          answer: {
            images: [
              {
                src: 'https://avatars.mds.yandex.net/i?id=85b7a8d8f217294e264dfd81200f303d6f31bb91-12753081-images-thumbs&n=13',
              },
              {
                src: 'https://avatars.mds.yandex.net/i?id=77f65f523dd67f8da06b1ef84251f18fda6c44a6-12540073-images-thumbs&n=13',
              },
              {
                src: 'https://avatars.mds.yandex.net/i?id=68a4b4fe09f4c2865f4446bce0b18a41b5fd285b-9150090-images-thumbs&n=13',
              },
              // Добавьте другие изображения
            ],
            comments: [
              {
                userId: 2,
                value: 'Илья, молодец! Проделана отличная работа. Повышение!',
              },
            ],
          },
        },
        {
          id: 2,
          first_name: 'Илья',
          last_name: 'Жилов',
          photo:
            'https://avatars.mds.yandex.net/i?id=2414e1a11e8ea018c07319af1c31604f93fa0baa-10165663-images-thumbs&n=13',
          score: '5.0',
        },
        {
          id: 3,
          first_name: 'Даниил',
          last_name: 'Постников',
          photo:
            'https://avatars.mds.yandex.net/i?id=2414e1a11e8ea018c07319af1c31604f93fa0baa-10165663-images-thumbs&n=13',
          score: '',
        },
        {
          id: 4,
          first_name: 'Ксения',
          last_name: 'Акимова',
          photo:
            'https://avatars.mds.yandex.net/i?id=2414e1a11e8ea018c07319af1c31604f93fa0baa-10165663-images-thumbs&n=13',
          score: '4.6',
        },
        {
          id: 5,
          first_name: 'Александр',
          last_name: 'Михлеев',
          photo:
            'https://avatars.mds.yandex.net/i?id=2414e1a11e8ea018c07319af1c31604f93fa0baa-10165663-images-thumbs&n=13',
          score: '',
        },
      ],
    },
    {
      any_homework: true,
      id: 2,
      users: [
        {
          id: 1,
          first_name: 'Дмитрий',
          last_name: 'Шагалин',
          photo: '../images/first.jpg',
          score: '4.7',
        },
        {
          id: 2,
          first_name: 'Илья',
          last_name: 'Жилов',
          photo: '../images/first.jpg',
          score: '5.0',
          answer: {
            images: [
              'https://avatars.mds.yandex.net/i?id=532403e8d3726980a672e3b88d5dbb4dc6179322-10753427-images-thumbs&n=13',
              'https://avatars.mds.yandex.net/i?id=f710b62fcf71ffb6be0e74656c3d4976cb2a92da-10118230-images-thumbs&n=13',
              'https://avatars.mds.yandex.net/i?id=27c51be837f199deb8a7e7c3482269ee70fac2b6-10299621-images-thumbs&n=13',
            ],
          },
        },
        {
          id: 3,
          first_name: 'Даниил',
          last_name: 'Постников',
          photo: '../images/first.jpg',
          score: '',
          answer: {
            photoes: [
              'https://avatars.mds.yandex.net/i?id=532403e8d3726980a672e3b88d5dbb4dc6179322-10753427-images-thumbs&n=13',
              'https://avatars.mds.yandex.net/i?id=f710b62fcf71ffb6be0e74656c3d4976cb2a92da-10118230-images-thumbs&n=13',
              'https://avatars.mds.yandex.net/i?id=27c51be837f199deb8a7e7c3482269ee70fac2b6-10299621-images-thumbs&n=13',
            ],
          },
        },
        {
          id: 4,
          first_name: 'Ксения',
          last_name: 'Акимова',
          photo: '../images/first.jpg',
          score: '4.6',
          answer: {
            photoes: [
              'https://avatars.mds.yandex.net/i?id=532403e8d3726980a672e3b88d5dbb4dc6179322-10753427-images-thumbs&n=13',
              'https://avatars.mds.yandex.net/i?id=f710b62fcf71ffb6be0e74656c3d4976cb2a92da-10118230-images-thumbs&n=13',
              'https://avatars.mds.yandex.net/i?id=27c51be837f199deb8a7e7c3482269ee70fac2b6-10299621-images-thumbs&n=13',
            ],
          },
        },
        {
          id: 5,
          first_name: 'Александр',
          last_name: 'Михлеев',
          photo: './images/first.jpg',
          score: '',
          answer: {
            photoes: [
              'https://avatars.mds.yandex.net/i?id=532403e8d3726980a672e3b88d5dbb4dc6179322-10753427-images-thumbs&n=13',
              'https://avatars.mds.yandex.net/i?id=f710b62fcf71ffb6be0e74656c3d4976cb2a92da-10118230-images-thumbs&n=13',
              'https://avatars.mds.yandex.net/i?id=27c51be837f199deb8a7e7c3482269ee70fac2b6-10299621-images-thumbs&n=13',
            ],
          },
        },
      ],
      lesson_name: 'Математический анализ',

      currentHomework: {
        deadline: '15.09',
        writingDiscription:
          'Много-много всякого разного математического и не только',
        speakDiscription:
          'Ну а тут хз что можно рассказывать по матану, наверно "Как тяжело сдать матан с 1 посещением в семестре"',
      },
      archiveHomework: [
        {
          deadline: '20.09',
          writingDiscription: 'Посчитать всяко разное',
          speakDiscription: 'Рассказать много всякого',
        },
        {
          deadline: '20.09',
          writingDiscription: 'Посчитать всяко разное',
          speakDiscription: 'Рассказать мало всякого',
        },
        {
          deadline: '15.09',
          writingDiscription: 'Посчитать всяко разное',
          speakDiscription: 'Рассказать много всякого',
        },
        {
          deadline: '20.09',
          writingDiscription: 'Посчитать всяко разное',
          speakDiscription: 'Рассказать мало всякого',
        },
        {
          deadline: '15.09',
          writingDiscription: 'Написать много всякого',
          speakDiscription: 'Рассказать много всякого',
        },
        {
          deadline: '20.09',
          writingDiscription: 'Написать мало всякого',
          speakDiscription: 'Рассказать мало всякого',
        },
        {
          deadline: '15.09',
          writingDiscription: 'Написать много всякого',
          speakDiscription: 'Рассказать много всякого',
        },
        {
          deadline: '20.09',
          writingDiscription: 'Написать мало всякого',
          speakDiscription: 'Рассказать мало всякого',
        },
        {
          deadline: '15.09',
          writingDiscription: 'Написать много всякого',
          speakDiscription: 'Рассказать много всякого',
        },
        {
          deadline: '20.09',
          writingDiscription: 'Написать мало всякого',
          speakDiscription: 'Рассказать мало всякого',
        },
      ],
    },
    {
      any_homework: true,
      id: 3,
      users: [
        {
          id: 1,
          first_name: 'Дмитрий',
          last_name: 'Шагалин',
          photo: '../images/first.jpg',
          score: '4.7',
        },
        {
          id: 2,
          first_name: 'Илья',
          last_name: 'Жилов',
          photo: '../images/first.jpg',
          score: '5.0',
        },
        {
          id: 3,
          first_name: 'Даниил',
          last_name: 'Постников',
          photo: '../images/first.jpg',
          score: '',
        },
        {
          id: 4,
          first_name: 'Ксения',
          last_name: 'Акимова',
          photo: '../images/first.jpg',
          score: '4.6',
        },
        {
          id: 5,
          first_name: 'Александр',
          last_name: 'Михлеев',
          photo: './images/first.jpg',
          score: '',
        },
      ],
      lesson_name: 'Математический анализ',

      currentHomework: {
        deadline: '15.09',
        writingDiscription:
          'Много-много всякого разного математического и не только',
        speakDiscription:
          'Ну а тут хз что можно рассказывать по матану, наверно "Как тяжело сдать матан с 1 посещением в семестре"',
      },
      archiveHomework: [
        {
          deadline: '20.09',
          writingDiscription: 'Посчитать всяко разное',
          speakDiscription: 'Рассказать много всякого',
        },
        {
          deadline: '20.09',
          writingDiscription: 'Посчитать всяко разное',
          speakDiscription: 'Рассказать мало всякого',
        },
        {
          deadline: '15.09',
          writingDiscription: 'Посчитать всяко разное',
          speakDiscription: 'Рассказать много всякого',
        },
        {
          deadline: '20.09',
          writingDiscription: 'Посчитать всяко разное',
          speakDiscription: 'Рассказать мало всякого',
        },
        {
          deadline: '15.09',
          writingDiscription: 'Написать много всякого',
          speakDiscription: 'Рассказать много всякого',
        },
        {
          deadline: '20.09',
          writingDiscription: 'Написать мало всякого',
          speakDiscription: 'Рассказать мало всякого',
        },
        {
          deadline: '15.09',
          writingDiscription: 'Написать много всякого',
          speakDiscription: 'Рассказать много всякого',
        },
        {
          deadline: '20.09',
          writingDiscription: 'Написать мало всякого',
          speakDiscription: 'Рассказать мало всякого',
        },
        {
          deadline: '15.09',
          writingDiscription: 'Написать много всякого',
          speakDiscription: 'Рассказать много всякого',
        },
        {
          deadline: '20.09',
          writingDiscription: 'Написать мало всякого',
          speakDiscription: 'Рассказать мало всякого',
        },
      ],
    },
    {
      any_homework: true,
      id: 4,
      users: [
        {
          id: 1,
          first_name: 'Дмитрий',
          last_name: 'Шагалин',
          photo: '../images/first.jpg',
          score: '4.7',
        },
        {
          id: 2,
          first_name: 'Илья',
          last_name: 'Жилов',
          photo: '../images/first.jpg',
          score: '5.0',
        },
        {
          id: 3,
          first_name: 'Даниил',
          last_name: 'Постников',
          photo: '../images/first.jpg',
          score: '',
        },
        {
          id: 4,
          first_name: 'Ксения',
          last_name: 'Акимова',
          photo: '../images/first.jpg',
          score: '4.6',
        },
        {
          id: 5,
          first_name: 'Александр',
          last_name: 'Михлеев',
          photo: './images/first.jpg',
          score: '',
        },
      ],
      lesson_name: 'Математический анализ',

      currentHomework: {
        deadline: '15.09',
        writingDiscription:
          'Много-много всякого разного математического и не только',
        speakDiscription:
          'Ну а тут хз что можно рассказывать по матану, наверно "Как тяжело сдать матан с 1 посещением в семестре"',
      },
      archiveHomework: [
        {
          deadline: '20.09',
          writingDiscription: 'Посчитать всяко разное',
          speakDiscription: 'Рассказать много всякого',
        },
        {
          deadline: '20.09',
          writingDiscription: 'Посчитать всяко разное',
          speakDiscription: 'Рассказать мало всякого',
        },
        {
          deadline: '15.09',
          writingDiscription: 'Посчитать всяко разное',
          speakDiscription: 'Рассказать много всякого',
        },
        {
          deadline: '20.09',
          writingDiscription: 'Посчитать всяко разное',
          speakDiscription: 'Рассказать мало всякого',
        },
        {
          deadline: '15.09',
          writingDiscription: 'Написать много всякого',
          speakDiscription: 'Рассказать много всякого',
        },
        {
          deadline: '20.09',
          writingDiscription: 'Написать мало всякого',
          speakDiscription: 'Рассказать мало всякого',
        },
        {
          deadline: '15.09',
          writingDiscription: 'Написать много всякого',
          speakDiscription: 'Рассказать много всякого',
        },
        {
          deadline: '20.09',
          writingDiscription: 'Написать мало всякого',
          speakDiscription: 'Рассказать мало всякого',
        },
        {
          deadline: '15.09',
          writingDiscription: 'Написать много всякого',
          speakDiscription: 'Рассказать много всякого',
        },
        {
          deadline: '20.09',
          writingDiscription: 'Написать мало всякого',
          speakDiscription: 'Рассказать мало всякого',
        },
      ],
    },
    {
      any_homework: true,
      id: 5,
      users: [
        {
          id: 1,
          first_name: 'Дмитрий',
          last_name: 'Шагалин',
          photo: '../images/first.jpg',
          score: '4.7',
        },
        {
          id: 2,
          first_name: 'Илья',
          last_name: 'Жилов',
          photo: '../images/first.jpg',
          score: '5.0',
        },
        {
          id: 3,
          first_name: 'Даниил',
          last_name: 'Постников',
          photo: '../images/first.jpg',
          score: '',
        },
        {
          id: 4,
          first_name: 'Ксения',
          last_name: 'Акимова',
          photo: '../images/first.jpg',
          score: '4.6',
        },
        {
          id: 5,
          first_name: 'Александр',
          last_name: 'Михлеев',
          photo: './images/first.jpg',
          score: '',
        },
      ],
      lesson_name: 'Математический анализ',

      currentHomework: {
        deadline: '15.09',
        writingDiscription:
          'Много-много всякого разного математического и не только',
        speakDiscription:
          'Ну а тут хз что можно рассказывать по матану, наверно "Как тяжело сдать матан с 1 посещением в семестре"',
      },
      archiveHomework: [
        {
          deadline: '20.09',
          writingDiscription: 'Посчитать всяко разное',
          speakDiscription: 'Рассказать много всякого',
        },
        {
          deadline: '20.09',
          writingDiscription: 'Посчитать всяко разное',
          speakDiscription: 'Рассказать мало всякого',
        },
        {
          deadline: '15.09',
          writingDiscription: 'Посчитать всяко разное',
          speakDiscription: 'Рассказать много всякого',
        },
        {
          deadline: '20.09',
          writingDiscription: 'Посчитать всяко разное',
          speakDiscription: 'Рассказать мало всякого',
        },
        {
          deadline: '15.09',
          writingDiscription: 'Написать много всякого',
          speakDiscription: 'Рассказать много всякого',
        },
        {
          deadline: '20.09',
          writingDiscription: 'Написать мало всякого',
          speakDiscription: 'Рассказать мало всякого',
        },
        {
          deadline: '15.09',
          writingDiscription: 'Написать много всякого',
          speakDiscription: 'Рассказать много всякого',
        },
        {
          deadline: '20.09',
          writingDiscription: 'Написать мало всякого',
          speakDiscription: 'Рассказать мало всякого',
        },
        {
          deadline: '15.09',
          writingDiscription: 'Написать много всякого',
          speakDiscription: 'Рассказать много всякого',
        },
        {
          deadline: '20.09',
          writingDiscription: 'Написать мало всякого',
          speakDiscription: 'Рассказать мало всякого',
        },
      ],
    },
    {
      any_homework: true,
      id: 6,
      users: [],
      lesson_name: 'Математический анализ',

      currentHomework: {
        deadline: '15.09',
        writingDiscription: '',
        speakDiscription: '',
      },
      archiveHomework: [
        {
          deadline: '20.09',
          writingDiscription: 'Посчитать всяко разное',
          speakDiscription: 'Рассказать много всякого',
        },
        {
          deadline: '20.09',
          writingDiscription: 'Посчитать всяко разное',
          speakDiscription: 'Рассказать мало всякого',
        },
        {
          deadline: '15.09',
          writingDiscription: 'Посчитать всяко разное',
          speakDiscription: 'Рассказать много всякого',
        },
        {
          deadline: '20.09',
          writingDiscription: 'Посчитать всяко разное',
          speakDiscription: 'Рассказать мало всякого',
        },
        {
          deadline: '15.09',
          writingDiscription: 'Написать много всякого',
          speakDiscription: 'Рассказать много всякого',
        },
        {
          deadline: '20.09',
          writingDiscription: 'Написать мало всякого',
          speakDiscription: 'Рассказать мало всякого',
        },
        {
          deadline: '15.09',
          writingDiscription: 'Написать много всякого',
          speakDiscription: 'Рассказать много всякого',
        },
        {
          deadline: '20.09',
          writingDiscription: 'Написать мало всякого',
          speakDiscription: 'Рассказать мало всякого',
        },
        {
          deadline: '15.09',
          writingDiscription: 'Написать много всякого',
          speakDiscription: 'Рассказать много всякого',
        },
        {
          deadline: '20.09',
          writingDiscription: 'Написать мало всякого',
          speakDiscription: 'Рассказать мало всякого',
        },
      ],
    },
  ],
}

const container = document.getElementById('root')
const root = createRoot(container)
const CurrentHwContext = React.createContext()
const DataContext = React.createContext()
const router = createBrowserRouter([
  {
    path: '/',
    element: <Footer />,
    children: [
      {
        path: '/',
        element: (
          <DataContext.Provider value={data}>
            <App />
          </DataContext.Provider>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: '',
        element: (
          <CurrentHwContext.Provider value={data.lessons}>
            <HwHeader />
          </CurrentHwContext.Provider>
        ),
        children: [
          {
            index: true,
            path: '/Homework/:lessonId',
            element: <CurrentHw />,
          },
          {
            index: false,
            path: '/Archive/:lessonId',
            element: (
              <CurrentHwContext.Provider value={data.lessons}>
                <Archive />
              </CurrentHwContext.Provider>
            ),
          },
          {
            index: false,
            path: '/Archive/:lessonId/ArchiveHomework/:archiveHomeworkId',
            element: (
              <CurrentHwContext.Provider value={data.lessons}>
                <ArchiveHw />
              </CurrentHwContext.Provider>
            ),
          },
        ],
      },
      {
        path: '/Homework/:lessonId/Answer/:userId',
        element: (
          <CurrentHwContext.Provider value={data.lessons}>
            <Answer />
          </CurrentHwContext.Provider>
        ),
      },
      {
        path: '/Archive/:lessonId/ArchiveHomework/:archiveHomeworkId/Answer/:userId',
        element: (
          <CurrentHwContext.Provider value={data.lessons}>
            <Answer />
          </CurrentHwContext.Provider>
        ),
      },
      {
        path: '/Profile/',
        element: (
          <CurrentHwContext.Provider value={data.UserData}>
            <GroupSet />
          </CurrentHwContext.Provider>
        ),
      },
      {
        path: '/New_group/',
        element: <NewGroup />,
      },
    ],
  },
])

root.render(
  <div>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </div>
)

export { CurrentHwContext, DataContext }
