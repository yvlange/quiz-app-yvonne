import { pushSection } from './db.js'

// // const data = []
// let submitButton = document.querySelector('.submit')
let form = document.querySelector('.super-form')

form.addEventListener('submit', event => {
  event.preventDefault()

  const inputQuestion = form['question'].value
  const inputAnswer = form['answer'].value
  const inputTags = form['tags']

  // const question = inputQuestion.value
  // const answer = inputAnswer.value
  const tagsArray = tagsStringToArray(inputTags.value)

  const inputData = {
    question: inputQuestion,
    answer: inputAnswer,
    tags: tagsArray,
  }

  // pushSection({
  //   question: question,
  //   answer: answer,
  //   tags: tagsArray,
  // })
  pushSection(inputData)

  console.log(inputData)
  form.reset()
})

function tagsStringToArray(tagsString) {
  const tagsArray = tagsString.split(',')

  return tagsArray
}
