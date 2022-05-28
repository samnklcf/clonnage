var dan = document.querySelector('.com-live-game');
var mn = document.querySelector('.main');
dan.addEventListener('click', () => {
    dan.style.transform = 'translateX(0px)'
})
mn.addEventListener('click', () => {
    dan.style.transform = 'translateX(-100px)'
})