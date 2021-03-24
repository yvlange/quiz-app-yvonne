import { pushSection } from './db.js'

let form = document.querySelector('.super-form')

form.addEventListener('submit', event => {
  event.preventDefault()

  const inputQuestion = form['question'].value
  const inputAnswer = form['answer'].value
  const inputTags = form['tags']
  const tagsArray = tagsStringToArray(inputTags.value)

  const inputData = {
    question: inputQuestion,
    answer: inputAnswer,
    tags: tagsArray,
  }

  pushSection(inputData)
  form.reset()
})

function tagsStringToArray(tagsString) {
  const itemsArray = tagsString.split(',')

  return itemsArray
}
