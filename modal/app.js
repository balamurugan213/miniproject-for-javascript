// select modal-btn,modal-overlay,close-btn
const openBtn = document.querySelector(
	'.modal-btn'
)
const closeBtn = document.querySelector(
	'.close-btn'
)
const modal = document.querySelector(
	'.modal-overlay'
)

// listen for click events on modal-btn and close-btn
openBtn.addEventListener('click', function(){
	modal.classList.add('open-modal')
})
// when user clicks modal-btn add .open-modal to modal-overlay
closeBtn.addEventListener('click', function(){
	modal.classList.remove('open-modal')
})
// when user clicks close-btn remove .open-modal from modal-overlay
