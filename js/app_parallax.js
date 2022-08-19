(() => {


    'use strict';


    const parallaxOne = document.querySelector('.parallax');
    const parallaxPlanet = document.querySelector('.parallax__planet');

    let mainUbication = window.scrollY;

    window.onscroll = () => {

        
        let displacement = window.scrollY.toPrecision();
        parallaxOne.style.bottom = `calc(20vh - ${(displacement * 2)}px)`;
        parallaxPlanet.style.top = `${(displacement * 1.02)}px`;
        parallaxPlanet.style.left = `${(displacement * 1.2)}px`;





        if (mainUbication >= displacement) {
            document.querySelector('.upper-navbar').style.top = '0';
        } else {
            document.querySelector('.upper-navbar').style.top = '-10rem';
        }
        mainUbication = displacement;

    }



    


})();