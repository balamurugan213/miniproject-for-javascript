const slider = document.querySelectorAll('.slide')
const nextBtn = document.querySelector('.nextBtn')
const prevBtn = document.querySelector('.prevBtn')

slider.forEach(function(slide, index){
	slide.style.left = `${index * 100}%`
})

let counter = 0

nextBtn.addEventListener('click', function(){
	counter = counter + 1
	carousal()
	console.log(counter)
})
prevBtn.addEventListener('click', function(){
	counter = counter - 1
	carousal()
})

function carousal(){
	// // working wit slide
	// if (counter == slider.length) {
	// 	counter = 0
	// }
	// if (counter < 0) {
	// 	counter = slider.length - 1
	// }
	if (counter < slider.length - 1) {
		nextBtn.style.display = 'block'
	}
	else {
		nextBtn.style.display = 'none'
	}
	if (counter > 0) {
		prevBtn.style.display = 'block'
	}
	else {
		prevBtn.style.display = 'none'
	}
	slider.forEach(function(slide){
		slide.style.transform = `translateX(-${counter *
			100}%)`
	})
}
prevBtn.style.display = 'none'
