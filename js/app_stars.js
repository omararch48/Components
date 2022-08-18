const stars = document.querySelector('.stars');
const starsVector = [];


for (let i = 0; i < 150; i++) {
    starsVector[i] = document.createElement('div');
    starsVector[i].className = `star star-${(i % 6) + 1}`;
    starsVector[i].innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fill-rule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clip-rule="evenodd" />
    </svg>
    `;
    let x = Math.random() * 100;
    let y = Math.random() * 100;
    if (x < 1) {
        x++;
    } else if (x > 99) {
        x--;
    }
    if (y < 1) {
        y++;
    } else if (y > 99) {
        y--;
    }
    starsVector[i].style.left = `${x}%`;
    starsVector[i].style.top = `${y}%`;
    let svgElement = starsVector[i].querySelector('svg');
    svgElement.style.animation = `star-animation-${(i % 4) + 1} 1s infinite`;
    stars.append(starsVector[i]);
}