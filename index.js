const today = document.querySelector(".today");
const todayDay = today.querySelector(".today-day")//요일
const todayDate = today.querySelector(".today-date")//날짜
const todayMonth = today.querySelector(".today-month")//월
const todayYear = today.querySelector(".today-year")//년도





function currentDate(){
    const currentDate = new Date();
    const dayName = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const monthName = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOC", "DEC"];

    const day = dayName[currentDate.getDay()];
    const date = currentDate.getDate();
    const month = monthName[currentDate.getMonth()];
    const year = currentDate.getFullYear();
    todayDay.innerText = day;
    todayDate.innerText = date;
    todayMonth.innerText = month;
    todayYear.innerText = year;
}

function init(){
    currentDate();
    setInterval(currentDate, 86400000);
}
init();