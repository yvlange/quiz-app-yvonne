export function pushSection(sectionObject) {
  let sections
  const storageSections = JSON.parse(localStorage.getItem('sections'))
  if (storageSections === null) {
    sections = []
  } else {
    sections = storageSections
  }

  // Add the new section to the array
  sections.push(sectionObject)
  // Store the array again inside the local storage
  localStorage.setItem('sections', JSON.stringify(sections))
}

export function getSections() {
  let sections
  const storageSections = JSON.parse(localStorage.getItem('sections'))
  if (storageSections === null) {
    sections = []
  } else {
    sections = storageSections
  }
  return sections
}
// export const data = [
//   {
//     id: 0,
//     question: 'What type of a language is HTML?',
//     answer: 'Markup Language',
//     isBookmarked: true,
//     tags: ['HTML', 'general'],
//   },
//   {
//     id: 1,
//     question: 'Inside which HTML element do we put the JavaScript?',
//     answer: '<script>',
//     isBookmarked: true,
//     tags: ['HTML', 'Javascript', 'general'],
//   },
//   {
//     id: 2,
//     question: 'Who maintains the CSS specifications?',
//     answer: 'World Wide Web Consortium.',
//     isBookmarked: true,
//     tags: ['CSS'],
//   },
//   {
//     id: 3,
//     question: 'Who designed the Linux OS?',
//     answer: 'Linus Torvalds',
//     isBookmarked: true,
//     tags: ['Linux'],
//   },
//   {
//     id: 4,
//     question:
//       'Which of the following key combinations allows to terminate the current process in Linux shell?',
//     answer: 'Ctrl + C',
//     isBookmarked: false,
//     tags: ['Linux', 'Shell', 'Shortcuts'],
//   },
//   {
//     id: 5,
//     question: 'What is the correct way to write a JavaScript array?',
//     answer: 'const colors = ["red", "green", "blue"]',
//     isBookmarked: true,
//     tags: ['Javascript', 'Array', 'general'],
//   },
//   {
//     id: 6,
//     question: 'What should be the first tag in any HTML Document?',
//     answer: '<!doctype html>',
//     isBookmarked: false,
//     tags: ['HTML', 'general'],
//   },
//   {
//     id: 7,
//     question: 'How can you add a comment in a JavaScript?',
//     answer: '//This is a comment',
//     isBookmarked: false,
//     tags: ['Javascript', 'general'],
//   },
//   {
//     id: 8,
//     question: 'What tag is used to display a picture in a HTML page?',
//     answer: 'Img',
//     isBookmarked: false,
//     tags: ['HTML', 'HTML-Tag', 'general', 'picture'],
//   },
//   {
//     id: 9,
//     question: 'HTML are web pages read and rendered by?',
//     answer: 'Web Browser',
//     isBookmarked: false,
//     tags: ['HTML', 'general'],
//   },
//   {
//     id: 10,
//     question: 'Who created Git?',
//     answer: 'Linus Torvalds',
//     isBookmarked: true,
//     tags: ['Git'],
//   },
// ]

/* 
<div class="question-box">
          <i
            class="question-box__bookmark question-box__bookmark--filled far fa-bookmark"
          ></i>
          <h2 class="question-box__title">Question:</h2>
          <div>
            <p class="question-box__text">How much is the fish?</p>
          </div>
          <div class="question-box__showAnswer">
            <button
              type="button"
              class="question-box__button question-box__button--active"
            >
              Show the answer
            </button>
            <div class="question-box__answer"><p>Ask Scooter</p></div>
          </div>
          <ul class="question-box__tag">
            <li class="question-box__tag-text">#fun</li>
            <li class="question-box__tag-text">#music</li>
            <li class="question-box__tag-text">#general</li>
          </ul>
        </div>
        <div class="question-box">
          <i
            class="question-box__bookmark question-box__bookmark--filled far fa-bookmark"
          ></i>
          <h2 class="question-box__title">Question:</h2>
          <div>
            <p class="question-box__text">Who's the chancellor of Germany?</p>
          </div>
          <div class="question-box__showAnswer">
            <button
              type="button"
              class="question-box__button question-box__button--active"
            >
              Show the answer
            </button>
            <div class="question-box__answer"><p>Angela Merkel</p></div>
          </div>
          <ul class="question-box__tag">
            <li class="question-box__tag-text">#politics</li>

            <li class="question-box__tag-text">#general</li>
          </ul>
        </div>
        <div class="question-box">
          <i
            class="question-box__bookmark question-box__bookmark--filled far fa-bookmark"
          ></i>
          <h2 class="question-box__title">Question:</h2>
          <div>
            <p class="question-box__text">When was Javascript created?</p>
          </div>
          <div class="question-box__showAnswer">
            <button
              type="button"
              class="question-box__button question-box__button--active"
            >
              Show the answer
            </button>
            <div class="question-box__answer"><p>1995</p></div>
          </div>
          <ul class="question-box__tag">
            <li class="question-box__tag-text">#it</li>
            <li class="question-box__tag-text">#web dev</li>
            <li class="question-box__tag-text">#www</li>
          </ul>
        </div>
        <div class="question-box">
          <i
            class="question-box__bookmark question-box__bookmark--filled far fa-bookmark"
          ></i>
          <h2 class="question-box__title">Question:</h2>
          <div>
            <p class="question-box__text">
              What did one campfire say to the other?
            </p>
          </div>
          <div class="question-box__showAnswer">
            <button
              type="button"
              class="question-box__button question-box__button--active"
            >
              Show the answer
            </button>
            <div class="question-box__answer">
              <p>Shall we go out tonight?</p>
            </div>
          </div>
          <ul class="question-box__tag">
            <li class="question-box__tag-text">#fun</li>
            <li class="question-box__tag-text">#real</li>
            <li class="question-box__tag-text">#general</li>
          </ul>
        </div>
*/
