// show payment form
const continueBtn = document.getElementById('continue');
const continueWrap = document.querySelector('.continue');
const capacity = document.querySelector('.capacity');
const stepTwo = document.querySelector('.stepTwo');
const formTitle = document.querySelector('.topDis h3');
const stepTwoBtn = document.querySelector('.stepTwo .viewBtn');
console.log(stepTwoBtn);
// check for empty form
continueBtn.onclick = function checkInputs() {
  var result = new Array();

  $('.continue .form-control').each(function () {
    var input = $(this);
    if (input.val() > 0 && input.val() !== '') {
      result.push(input.val());
    }
  });

  if (result.length > 0) {
    stepTwo.style.display = 'block';
    continueWrap.style.display = 'none';
    capacity.style.display = 'none';
    formTitle.textContent = 'Make a payment';
  } else {
    console.log('Please Fill up form !');
  }
  errorShowUp();
};

stepTwoBtn.onclick = function () {
  errorShowUp();
};
// check for error message
function errorShowUp() {
  const errorHolder = document.querySelectorAll('.errorMessage');
  errorHolder.forEach((i) => {
    const errorShow = i.querySelector('p').innerText;
    if (errorShow) {
      i.querySelector('p').style.display = 'block';
    }
  });
}
