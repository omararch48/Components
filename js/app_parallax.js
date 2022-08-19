(() => {


    'use strict';


    const parallaxOne = document.querySelector('.parallax');
    const parallaxPlanet = document.querySelector('.parallax__planet');
    const stars = document.querySelector('.stars');

    let mainUbication = window.scrollY;
    // parallaxPlanet.style.top = '-1200px';
    // parallaxPlanet.style.left = '-800px';
    // parallaxPlanet.style.display = 'block';

    window.onscroll = () => {
        let displacement = window.scrollY.toPrecision();
        parallaxOne.style.bottom = `calc(20vh - ${(displacement * 2)}px)`;
        parallaxPlanet.style.top = `${(displacement * 1.35) - 1200}px`;
        parallaxPlanet.style.left = `${(displacement * 0.3) - 800}px`;


        if (displacement > 0) {
            stars.style.overflow = 'hidden'
        }


        if (mainUbication >= displacement) {
            document.querySelector('.upper-navbar').style.top = '0';
        } else {
            document.querySelector('.upper-navbar').style.top = '-10rem';
        }
        mainUbication = displacement;

    }



    


})();