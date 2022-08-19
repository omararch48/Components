(() => {


    'use strict';


    const parallaxOne = document.querySelector('.parallax-one');
    const parallaxTwo = document.querySelector('.parallax-two');

    let mainUbication = window.scrollY;

    window.onscroll = () => {

        
        let displacement = window.scrollY.toPrecision();
        let delta = (displacement * 3) - 220;
        parallaxOne.style.bottom = `calc(100vh - ${(displacement * 2)}px)`;





        if (mainUbication >= displacement) {
            document.querySelector('.upper-navbar').style.top = '0';
        } else {
            document.querySelector('.upper-navbar').style.top = '-10rem';
        }
        mainUbication = displacement;

    }



    


})();