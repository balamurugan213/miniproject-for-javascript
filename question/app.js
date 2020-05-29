//using selectors inside the element

const question = document.querySelectorAll(
	'.question'
)
question.forEach(function(ques){
	const btn = ques.querySelector(
		'.question-btn'
	)
	btn.addEventListener('click', function(){
		question.forEach(function(q){
			if (q !== btn) {
				q.classList.remove('show-text')
			}
		})
		ques.classList.toggle('show-text')
	})
})

// traversing the dom

// const btns = document.querySelectorAll(
// 	'.question-btn'
// )

// btns.forEach(function(btn){
// 	btn.addEventListener('click', function(e){
// 		const ques =
// 			e.currentTarget.parentElement
// 				.parentElement
// 		ques.classList.toggle('show-text')
// 	})
// })
