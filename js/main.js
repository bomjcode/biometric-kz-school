const openPopUp = document.getElementById('open_pop_up');
const closePopUp = document.getElementById('pop_up_close');
const popUp = document.getElementById('pop_up');
const openPopUpMobile = document.getElementById('open_pop_up_two')
openPopUp.addEventListener('click', function(e){
    e.preventDefault();
    popUp.classList.add('active');
});
openPopUpMobile.addEventListener('click', function(e){
    e.preventDefault();
    popUp.classList.add('active');
});

closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active');
});
const scroll = new SmoothScroll('a[href*="#"]',{
    speed: 800
});