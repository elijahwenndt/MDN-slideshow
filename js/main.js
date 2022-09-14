const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
console.log(thumbBar)
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgArray = [
    'pic1',
    'pic2',
    'pic3',
    'pic4',
    'pic5',
];
/* Declaring the alternative text for each image file */
const imgAlts = {
    pic1: 'Eyeball',
    pic2: 'canyon',
    pic3: 'flowers',
    pic4: 'Heiroglyphs',
    pic5: 'butterfly'
}
/* Looping through images */
for (let i = 0; i < 5; i++) {

    const newImage = document.createElement('img');
    newImage.setAttribute('src', "./img/images/pic" + (i+1) + ".jpg");
    newImage.setAttribute('alt', imgAlts[imgArray[i]]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener("click", e => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    const btnCheck =  btn.getAttribute('class')
    if (btnCheck === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    }
    else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)'; 
    }
})
    
    // btn.setAttribute('class', xxx);
    // btn.textContent = xxx;
    // overlay.style.backgroundColor = xxx;