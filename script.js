const date = document.getElementById('date')
const day = document.getElementById('day')
const month = document.getElementById('month')
const year = document.getElementById('year')


const today = new Date()

const weekDays = ["Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag","Sonntag"]
const allMonth = ['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember']

date.innerHTML = today.getDate()
day.innerHTML = weekDays[today.getDay()-1]
month.innerHTML = allMonth[today.getMonth()]
year.innerHTML = today.getFullYear()
hours.innerHTML = today.getHours();
minutes.innerHTML = today.getMinutes();

let updateClock = () => {
    const currentTime = new Date();
    hours.innerHTML = currentTime.getHours();
    minutes.innerHTML = currentTime.getMinutes();

    setTimeout(updateClock, 60000);
};

updateClock();




