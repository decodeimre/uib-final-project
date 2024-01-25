//buy tickets form

function openBookingForm() {
    document.getElementById('booking-form-overlay').style.display = 'flex';
  }
  
  function closeBookingForm() {
    document.getElementById('booking-form-overlay').style.display = 'none';
  }
  
  document.getElementById('book-tickets-btn').addEventListener('click', openBookingForm);
  document.getElementById('book-tickets-btn-two').addEventListener('click', openBookingForm);


//switch between content

function openLineUp() {
    document.getElementById('line-up').style.display = 'block';
    document.getElementById('festival-infos').style.display = 'none';
}
// Get all Elements with the class name "line-up-btn"
let lineUpBtns = document.getElementsByClassName('line-up-btn');
// Add event listener to each element with class 'line-up-btn'
for (let i = 0; i < lineUpBtns.length; i++) {
  lineUpBtns[i].addEventListener('click', openLineUp);
}



function openInfos() {
  document.getElementById('line-up').style.display = 'none';
  document.getElementById('festival-infos').style.display = 'block';
}
let infoBtns = document.getElementsByClassName('info-btn');

for (let i = 0; i < infoBtns.length; i++) {
  infoBtns[i].addEventListener('click', openInfos);
}