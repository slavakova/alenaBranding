/* accordion */

let accHeaders = document.querySelectorAll('.accord-head');

for (let i=0; i<accHeaders.length; i++) {
  accHeaders[i].addEventListener('click', function() {
    this.classList.toggle('active');
    let accBody = this.nextElementSibling;
    if (accBody.style.display === 'block') {
      accBody.style.display = 'none';
    } else {
      accBody.style.display = 'block';
    }
  });
}


// burger

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
});



