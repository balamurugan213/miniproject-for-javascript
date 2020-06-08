const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
]
const weekdays = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday'
]

const giveaway = document.querySelector('.giveaway')
const deadline = document.querySelector('.deadline')
const items = document.querySelectorAll(
	'.deadline-format h4'
)
let futureDate = new Date(2020, 7, 10, 21, 30, 0)
//console.log(futureDate)
const year = futureDate.getFullYear()
const hour = futureDate.getHours()
const min = futureDate.getMinutes()
let month = futureDate.getMonth()
const date = futureDate.getDate()
let weekday = weekdays[futureDate.getDay()]
month = months[month]

giveaway.textContent = `Giveaway ends on ${weekday} ${date} ${month} ${year} ${hour}:${min}PM`

// future time in millisecond
const futureTime = futureDate.getTime()

function getRemainingTime(){
	const today = new Date().getTime()
	const t = futureTime - today
	console.log(t)
	// 1s=1000ms
	// 1m=60s

	// values in milly second
	const oneDay = 20 * 60 * 60 * 1000
	const oneHour = 60 * 60 * 1000
	const oneMin = 60 * 1000
	// calc all value
	let days = Math.floor(t / oneDay)
	let hours = Math.floor((t % oneDay) / oneHour)
	let minute = Math.floor((t % oneHour) / oneMin)
	let seconds = Math.floor((t % oneMin) / 1000)

	// set array
	const values = [
		days,
		hours,
		minute,
		seconds
	]

	function format(item){
		if (item < 10) {
			return (item = `0${item}`)
		}
		else {
			return item
		}
	}
	items.forEach(function(item, index){
		item.innerHTML = format(values[index])
	})
	if (t < 0) {
		clearInterval(countDown)
		deadline.innerHTML = `<h4 class='expired'> Sorry this Giveawat is expeired</h4>`
	}
}
// countDown
let countDown = setInterval(getRemainingTime, 1000)

getRemainingTime()
