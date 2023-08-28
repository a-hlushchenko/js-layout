import {
  createElement,
  createHeader,
} from '../../script/layout'

const body = document.querySelector('body')

const header = createHeader()
body.append(header)

const POST_LIST = [
  {
    text: 'До біса планувальник, наймаємо дизайнера і готуємося до презентації, як Джобс',
    date: '28.08',
    viewed: false,
    category: [
      { text: 'Важливо', type: 'important' },
      { text: 'Нова', type: 'new' },
    ],
  },
  {
    text: `Ми хотіли щоб у цьому чаті було близько 150 людей щоб зробити якісний пак самопрезентацій`,
    date: '24.08',
    viewed: true,
    category: [{ text: 'Нова', type: 'new' }],
  },
  {
    text: `Щоб зробити якісний пак, наймаємо дизайнера і готуємося до презентації, щоб у цьому чаті було близько 150 людей`,
    date: '26.08',
    viewed: false,
    category: [{ text: 'Важливо', type: 'important' }],
  },
]

const createMain = () => {
  const main = createElement('main', 'main')

  const title = createElement('h1', 'title', 'Мій блог')
  main.append(title)

  const postList = createElement('ul', 'post-list')

  POST_LIST.forEach((postData) => {
    const post = createElement(
      'li',
      postData.viewed ? `post post-viewed` : 'post',
    )

    const postHeader = createElement('div', 'header')

    const categoryList = createElement(
      'div',
      'category-list',
    )

    postData.category.forEach((category) => {
      const categorySpan = createElement(
        'span',
        `category ${category.type}`,
        category.text,
      )

      categoryList.append(categorySpan)
    })

    const date = createElement(
      'span',
      'date',
      postData.date,
    )

    postHeader.append(categoryList, date)

    const message = createElement(
      'p',
      'message',
      postData.text,
    )

    post.append(postHeader, message)

    postList.append(post)
  })

  main.append(postList)

  return main
}

const main = createMain()
body.append(main)
