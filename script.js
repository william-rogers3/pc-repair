function displayImage() {

    const slideshow = document.getElementsByClassName('slideshow');

    for (let j = 0; j < slideshow.length; j++) {
        slideshow[j].classList.remove("displayed");
    }

    slideshow[counter].classList.add("displayed");
    counter++;

    if (counter > 2) {
        counter = 0;
    }

}

let counter = 0;
displayImage();


setInterval(() => {
displayImage(counter);
    
}, 5000);