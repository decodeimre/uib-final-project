function openBookingForm() {
    document.getElementById('booking-form-overlay').style.display = 'flex';
  }
  
  function closeBookingForm() {
    document.getElementById('booking-form-overlay').style.display = 'none';
  }
  
  document.getElementById('book-tickets-btn').addEventListener('click', openBookingForm);