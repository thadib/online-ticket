const allBtn = document.getElementsByClassName('seat-btn');

let availableSeat = 12 ; 
let count = 0; 

for ( const btn of allBtn){
    btn.addEventListener('click', function(event){
        availableSeat = availableSeat - 1; 
        document.getElementById('available-seat').innerText = availableSeat; 

        count = count + 1; 
        document.getElementById('selected-seat').innerText = count; 

        btn.style.backgroundColor = '#1DD100';
    })
}
