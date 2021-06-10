const today = document.querySelector(".today");
const todayDay = today.querySelector(".today-day")//요일
const todayDate = today.querySelector(".today-date")//날짜
const todayMonth = today.querySelector(".today-month")//월
const todayYear = today.querySelector(".today-year")//년도
const first = document.querySelector(".first");


function calender(){
    const date = new Date();
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);//이달의 1일
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);//0일은없기에 하루전날을 반환함
    document.write(firstDay);
    document.write(lastDay);

    first.innerText= firstDay;
}


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
    calender();
}
init();