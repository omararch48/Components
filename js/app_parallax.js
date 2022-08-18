(() => {


    'use strict';


    const parallaxOne = document.querySelector('.parallax-one');
    const parallaxTwo = document.querySelector('.parallax-two');

    let mainUbication = window.scrollY;

    window.onscroll = () => {

        
        let displacement = window.scrollY;
        let delta = (displacement * 3) - 220;
        parallaxOne.style.top = `${(displacement * 3) - 220}px`;
        parallaxTwo.style.top = `${(displacement * 3) - 1220}px`;





        if (mainUbication >= displacement) {
            document.querySelector('.upper-navbar').style.top = '0';
        } else {
            document.querySelector('.upper-navbar').style.top = '-10rem';
        }
        mainUbication = displacement;

    }



    


})();