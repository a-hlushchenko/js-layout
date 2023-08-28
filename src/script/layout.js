export const createElement = (tag, className, text) => {
  const element = document.createElement(tag)

  if (className) element.className = className
  if (text) element.innerHTML = text

  return element
}

const HEADER_BUTTON_LIST = [
  {
    src: 'svg/button-back.svg',
  },
  {
    height: 24,
    src: 'img/profile-icon.jpg',
  },
]

export const createHeader = () => {
  const header = createElement('header', 'header')

  HEADER_BUTTON_LIST.forEach((params) => {
    const button = createElement('button', 'button')
    const img = createElement('img')

    console.log()

    Object.entries(params).forEach(([key, value]) => {
      img[key] = value
    })

    button.insertAdjacentElement('beforeend', img)

    header.insertAdjacentElement('beforeend', button)
  })

  return header
}
