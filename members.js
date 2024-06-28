function skillsMember() {
  let member = document.querySelector('.members');
  let memberHeight = member.offsetHeight;
  let memberTop = member.getBoundingClientRect().top;
  let memberPoint = window.innerHeight - memberHeight / 2;

  if (memberTop < memberPoint) {
    member.classList.add('active');
  } else {
    member.classList.remove('active');
  }
}