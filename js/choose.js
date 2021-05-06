// Choose the capacity
const choose = document.querySelector('.stockDis p');
const formCapacity = document.querySelector('.capacity .left span');
function getcapacity(number) {
  choose.textContent = `Size: ${number} GB`;
  formCapacity.textContent = `${number} GB`;
}
