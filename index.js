const today = document.querySelector(".today"),
    todayDay = today.querySelector(".today-day"),//요일
    todayDate = today.querySelector(".today-date"),//날짜
    todayMonth = today.querySelector(".today-month"),//월
    todayYear = today.querySelector(".today-year");//년도

let calender = document.querySelector(".calender");

const prevBtn = document.querySelector(".prevBtn"),
     nextBtn = document.querySelector(".nextBtn");

const monthName = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOC", "DEC"],
    dayName = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

let now = new Date();
const date = new Date();

function mainDate(e){
    now = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const target = e.target;
    //let getDay = now.getDay();
    //let day = dayName[now.getDay()];

    //todayDay.innerText = target.getDay();
    todayDate.innerText = target.innerText;
    
}

function prevCalender(){
    now = new Date(now.getFullYear(), now.getMonth()-1, now.getDate());
    makeCalender();
    todayMonth.innerText = monthName[now.getMonth()];
    todayDate.innerText = "1";
    todayYear.innerText = now.getFullYear();
    todayDay.innerText = dayName[now.getDay()];
}

function nextCalender(){
    now = new Date(now.getFullYear(), now.getMonth()+1, now.getDate());
    makeCalender();
    todayMonth.innerText = monthName[now.getMonth()];
    todayDate.innerText = 1;
    todayYear.innerText = now.getFullYear();
    todayDay.innerText = dayName[now.getDay()];
}

function makeCalender(){
    const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
    //이달의 1일
    const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    //0일은없기에 하루전날을 반환함
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
        
        if (count%7 == 0){/* 1주일이 7일 이므로 토요일 구하기*/
            //월화수목금토일을 7로 나눴을때 나머지가 0이면 count가 7번째에 위치
             row = calender.insertRow();
             //토요일 다음에 올 셀을 추가
        }

        if(now.getFullYear() == date.getFullYear() 
        && now.getMonth() == date.getMonth() 
        &&i == date.getDate()){
            cell.style.color ="red";
        }  
    }
}


function currentDate(){
    const currentDate = new Date();
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
    calender.addEventListener("click", mainDate);
}
init();