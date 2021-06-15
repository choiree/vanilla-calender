const today = document.querySelector(".today");
const todayDay = today.querySelector(".today-day")//요일
const todayDate = today.querySelector(".today-date")//날짜
const todayMonth = today.querySelector(".today-month")//월
const todayYear = today.querySelector(".today-year")//년도
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

let now = new Date();
const date = new Date();
    
function prevCalender(){
    now = new Date(now.getFullYear(), now.getMonth()-1, now.getDate());
    makeCalender();
}

function nextCalender(){
    now = new Date(now.getFullYear(), now.getMonth()+1, now.getDate());
    makeCalender();
}

function makeCalender(){
    const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
    //이달의 1일
    const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    //0일은없기에 하루전날을 반환함
    const calender = document.querySelector(".calender");
    //html 에서 테이블 가져오기
    while(calender.rows.length > 1){
        calender.deleteRow(calender.rows.length-1);
    }
    //조건이 참이라면 건너뛰기
    let row =null;
    row = calender.insertRow();//행
    let count = 0;//셀 갯수

    for(i=0; i<firstDay.getDay(); i++){
        cell = row.insertCell();//열 만들기
        count += 1;
    }
    for(i=1; i<=lastDay.getDate(); i++){
        //마지막날까지 
        cell = row.insertCell();
        cell.innerHTML = i;//1부터 마지막 day까지 넣어주기
        count += 1;
        
        if(now.getFullYear() == date.getFullYear() 
        && now.getMonth() == date.getMonth() 
        &&i == date.getDate()){
            cell.style.color ="red";
        }
        
    }
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
    makeCalender();
    prevBtn.addEventListener("click", prevCalender);
    nextBtn.addEventListener("click", nextCalender);
}
init();