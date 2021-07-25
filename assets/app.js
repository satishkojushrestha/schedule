const classList = document.querySelector('#classList');
const date = new Date();
const date_today = document.querySelector('#date');
const submitButton = document.querySelector('#submitButton');
const searchDay = document.querySelector('#day')

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    let day = searchDay.value;
    getList(day.toUpperCase())
})

const SUN = [
    {
        time: '08:30 AM - 10:00 AM',
        class: 'WRL with Prof. Skill Dev.',
        teacher: 'Ms. Yunisha Bajracharya',
        sections: '(C10 + C11 + C12)'
    }
]

const MON = [
    {
        time: '07:00 AM - 08:30 AM',
        class: 'Data Structures & Algorithm',
        teacher: 'Mr. Bibek Khanal',
        sections: '(C10 + C11 + C12)'
    },
    {
        time: '09:30 AM - 10:30 AM',
        class: 'Under. and plan. your FYP',
        teacher: 'Mr. Aadesh Tandukar',
        sections: '(C10 + C11 + C12)'
    },
    {
        time: '11:00 AM - 12:30 AM',
        class: 'Laravel for Web Development ',
        teacher: 'Mr. Shirish Maharjan',
        sections: '(C10 + C11 + C12)'
    },
]

const WED = [
    {
        time: '07:00 AM - 08:30 AM',
        class: 'Data Structures & Algorithm',
        teacher: 'Mr. Dipeshor Silwal',
        sections: '(C10 + C11)'
    },
]

const FRI = [
    {
        time: '07:00 AM - 08:30 AM',
        class: 'Laravel for Web Development ',
        teacher: 'Mr. Shirish Maharjan',
        sections: '(C11)'
    },
]

displayList()

function displayList(){
    classList.innerHTML="";
    date_today.textContent = "";
    let day = date.getDay();
    let day_string = '';
    let to_day = ''

    if (day==0){
        to_day = SUN
        day_string = 'SUN';
    }
    else if(day==1){
        to_day = MON
        day_string = "MON";
    }
    else if(day==2){
        day_string = "TUE";
    }
    else if(day==3){
        to_day = WED;
        day_string = "WED";
    }
    else if(day==4){
        day_string = "THU";
    }
    else if(day==5){
        to_day = FRI;
        day_string = "FRI";
    }

    else if(day==6){
        day_string = "SAT";
    }

    date_today.textContent = `Today: ${day_string}`

    var index=0;
    if (to_day){
        for (let classes of to_day){
        
            let classStringHTML = `<div class="box animation-back">
                <div class="flex-item">
                    <h3>${classes.time}</h3>
                    <h3>${classes.class}</h3>
                    <h3>${classes.teacher}</h3>
                    <h3>${classes.sections}</h3>
                </div>
            </div>`;
            index+=1;
    
            classList.innerHTML += classStringHTML;
            
        }
    }
    else{
        let classStringHTML = `<h2 class="flex-item">Whoo No Class</h2>`;
        classList.innerHTML += classStringHTML;
        console.log("condition stsf")
    }
    
    
}


function getList(day){
    classList.innerHTML="";
    date_today.textContent = "";
    let to_day = ''

    if (day=='SUN' || day=='SUNDAY'){
        to_day = SUN
    }
    else if(day=='MON' || day=='MONDAY'){
        to_day = MON
    }
    else if(day=='WED' || day=='WEDNESDAY'){
        to_day = WED;
    }
    else if(day=='FRI' || day=='FRIDAY'){
        to_day = FRI;
    }


    date_today.textContent = `Day Selected: ${day}`

    var index=0;
    if (to_day){
        for (let classes of to_day){
        
            let classStringHTML = `<div class="box animation-back">
                <div class="flex-item">
                    <h3>${classes.time}</h3>
                    <h3>${classes.class}</h3>
                    <h3>${classes.teacher}</h3>
                    <h3>${classes.sections}</h3>
                </div>
            </div>`;
            index+=1;
    
            classList.innerHTML += classStringHTML;
            
        }
    }
    else{
        let classStringHTML = `<h2 class="flex-item">Whoo No Class</h2>`;
        classList.innerHTML += classStringHTML;
        console.log("condition stsf")
    }
    
    
}

