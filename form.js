const data = []
let submitButton = document.querySelector('.submit')
let form = document.querySelector('.super-form')

form.addEventListener('submit', event => {
  event.preventDefault()
  const inputQuestion = form['question']
  const inputAnswer = form['answer']
  const inputTags = form['tags']
  const inputData = {
    question: inputQuestion.value,
    answer: inputAnswer.value,
    tags: inputTags.value,
  }
  data.push(inputData)
  console.log(data)
  form.reset()
})
