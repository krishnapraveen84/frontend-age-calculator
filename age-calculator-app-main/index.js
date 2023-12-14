let inputDay = document.getElementById('dayInput');
let dayError = document.getElementById('dayError')
let label = document.getElementById('labelEl');

let inputMonth = document.getElementById('monthInput');
let monthError = document.getElementById('monthError')
let label2 = document.getElementById('labelEl2');

let inputYear = document.getElementById('yearinput');
let yearError = document.getElementById('yearError');
let label3 = document.getElementById('labelEl3');



let outputDay = document.getElementById('days')
let outputMonth = document.getElementById('months')
let outputYear = document.getElementById('years')


let presentDate = new Date()
console.log(typeof(presentDate.getFullYear()))

let year = 0;
let month = 0;
let day = 0;


inputDay.addEventListener('blur', function(event){
    if (event.target.value === ''){
        console.log('Invalid')
        dayError.textContent = 'This feild is required'
        dayError.classList.add('error')
        inputDay.classList.add('error')
        label.classList.add('error')

    }
    else{
        if (event.target.value > 31){
            dayError.textContent = 'Must be a valid Day'
            dayError.classList.add('error')
            inputDay.classList.add('error')
            label.classList.add('error')
        }
        else{
            dayError.textContent = ''
            dayError.classList.remove('error')
            inputDay.classList.remove('error')
            label.classList.remove('error')
            day = event.target.value

            let dob = new Date(year, month, day);
            let diffDay = presentDate.getDate() - dob.getDate();
            outputDay.textContent = `${diffDay}`;
        }
       
    }
})

inputMonth.addEventListener('blur', function(event){
    if (event.target.value === ''){
        
        monthError.textContent = 'This feild is required'
        monthError.classList.add('error')
        inputMonth.classList.add('error')
        label2.classList.add('error')

    }
    else{
        if (event.target.value > 12){
            monthError.textContent = 'Must be a valid Day'
            monthError.classList.add('error')
            inputMonth.classList.add('error')
            label2.classList.add('error')
        }
        else{
            monthError.textContent = ''
            monthError.classList.remove('error')
            inputMonth.classList.remove('error')
            label2.classList.remove('error')
            month = event.target.value
            let dob = new Date(year, month, day);
            let diffMonth = presentDate.getMonth() - dob.getMonth();
            outputMonth.textContent = `${diffMonth + 1 }`;
        }
       
    }
})

inputYear.addEventListener('blur', function(event){
    if (event.target.value === ''){
        
        yearError.textContent = 'This feild is required'
        yearError.classList.add('error')
        inputYear.classList.add('error')
        label3.classList.add('error')

    }
    else{
        if (event.target.value > presentDate.getFullYear()){
            yearError.textContent = 'Must be a valid Day'
            yearError.classList.add('error')
            inputYear.classList.add('error')
            label3.classList.add('error')
        }
        else{
            yearError.textContent = ''
            yearError.classList.remove('error')
            inputYear.classList.remove('error')
            label3.classList.remove('error')
            year = event.target.value;

            let dob = new Date(year, month, day);
            let diffYear = presentDate.getFullYear() - dob.getFullYear();
            outputYear.textContent = `${diffYear}`;
           
        }
       
    }
})

