 function changeImage(element) {
        const mainImage = document.getElementById("mainImage");
        mainImage.style.opacity = 0.5;
        setTimeout(() => {
            mainImage.src = element.src;
            mainImage.style.opacity = 1;
        }, 200);
    }
