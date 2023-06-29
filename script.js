currentDate = document.querySelector('.current-date')

 icons = document.querySelectorAll('.icon i')
daysUL = document.querySelector('.days')
let date = new Date()
 thisYear = date.getFullYear()
 thisMonth = date.getMonth()


 months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
function rendercalender(){
 lastDateOfMonth = new Date(thisYear, thisMonth+1,0).getDate()
 firstDayOfMonth = new Date(thisYear, thisMonth, 1).getDay()
 lastDayOfMonth = new Date(thisYear, thisMonth, lastDateOfMonth).getDay()
 lastDateOfLastMonth = new Date(thisYear, thisMonth, 0).getDate()
 daysLI = ''

 for(var i=firstDayOfMonth;i>0;i--){ 
    daysLI += `<li class='inactive'>${lastDateOfLastMonth - i + 1}</li>`  
}


    for(var i=1;i<=lastDateOfMonth;i++){ 
        isToday = i === date.getDate() && thisMonth === new Date().getMonth()
        && thisYear === new Date().getFullYear() ? "active" : "";
        daysLI += `<li class="${isToday}">${i}</li>`  
    }

    // for(var i=lastDayOfMonth;i<6;i++){ 
    //     daysLI += `<li class='inactive'>${i - lastDateOfLastMonth + 1}</li>`  
    // }



    currentDate.innerHTML = `${months[thisMonth]} ${thisYear}`
    daysUL.innerHTML = daysLI;

}


 rendercalender()


 icons.forEach(function(ico){
    ico.addEventListener('click',function(){
        

        thisMonth = ico.id === 'prev' ? (thisMonth - 1) : (thisMonth + 1) 
        console.log(thisMonth )

        if(thisMonth > 11 ){
            thisMonth = 0
            thisYear = thisYear + 1
        }else if(thisMonth < 0){
            thisMonth = 11
            thisYear = thisYear - 1
        }

        rendercalender()
    })
 })