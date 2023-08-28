import {
  createElement,
  createHeader,
} from '../../script/layout'

const body = document.querySelector('body')

const header = createHeader()
body.append(header)

const title = createElement('h1', 'title', `Ком'юніті`)
body.append(header)
body.append(title)

const createTabList = () => {
  const tabList = createElement('div', 'tab-list')
  const button1 = createElement(
    'button',
    'button tab tab-line-left',
    'База знань',
  )
  const button2 = createElement(
    'button',
    'button tab active tab-line-right',
    'Інформація',
  )

  tabList.append(button1, button2)

  return tabList
}

const tabList = createTabList()

body.append(tabList)

const createMain = () => {
  const main = createElement('main', 'main')

  const img = createElement('img', 'img', 'База знань')
  img.src = 'img/community.jpg'

  const title = createElement(
    'h3',
    'title',
    'Що таке база знань?',
  )
  const description = createElement(
    'p',
    'description',
    `База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте и
	знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит информацию,
	являющуюся результатом решения предыдущих задач.`,
  )

  const button = createElement(
    'button',
    'button',
    `Перейти до ком'юніті у Телеграм`,
  )

  main.append(img, title, description, button)

  return main
}

const main = createMain()

body.append(main)

const tabs = document.querySelectorAll('button.tab')

const tabActive = (tabActive) => {
  tabs.forEach((tab, index) => {
    if (tab.isSameNode(tabActive)) {
      tab.className = tab.className + ' active'
    } else {
      if (index === 0) {
        tab.className = 'button tab tab-line-left'
      } else {
        tab.className = 'button tab tab-line-right'
      }
    }
  })
}

tabs.forEach((tabItem) => {
  tabItem.onclick = () => tabActive(tabItem)
})
