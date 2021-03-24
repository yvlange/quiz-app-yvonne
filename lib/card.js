export function createCard(card) {
  const cardSection = document.createElement('section')
  cardSection.classList.add('question-box')

  const bookmark = document.createElement('i')
  bookmark.classList.add(
    'question-box__bookmark',
    'question-box__bookmark--filled',
    'far',
    'fa-bookmark'
  )
  cardSection.append(bookmark)

  bookmark.addEventListener('click', () => {
    bookmark.classList.toggle('far')
    bookmark.classList.toggle('fas')
  })

  const h2Title = document.createElement('h2')
  h2Title.classList.add('question-box__title')
  h2Title.textContent = 'Question:'
  cardSection.append(h2Title)

  const question = document.createElement('p')
  question.classList.add('question-box__text')
  question.textContent = card.question
  cardSection.append(question)

  const answerBox = document.createElement('div')
  answerBox.classList.add('question-box__showAnswer')
  cardSection.append(answerBox)

  const answerButton = document.createElement('button')
  answerButton.classList.add(
    'question-box__button',
    'question-box__button--active'
  )
  answerButton.textContent = 'Show Answer'
  cardSection.append(answerButton)

  const answer = document.createElement('p')
  answer.classList.add('question-box__answer')
  answer.textContent = card.answer
  answerBox.append(answer)

  answerButton.addEventListener('click', () => {
    answer.classList.toggle('question-box__answer')
  })

  const ulElement = document.createElement('ul')
  ulElement.classList.add('question-box__tag')
  cardSection.append(ulElement)

  for (let i = 0; i < card.tags.length; i++) {
    const tags = document.createElement('li')
    tags.classList.add('question-box__tag-text')
    tags.textContent = card.tags[i]
    ulElement.append(tags)
  }
  return cardSection
}
