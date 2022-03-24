
// Get the modal
let modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
let img1 = document.getElementById('imgCard1');
let img2 = document.getElementById('imgCard2');
let img3 = document.getElementById('imgCard3');

const imgs = [img1, img2, img3];

let modalImg = document.getElementById("imgModal");
let captionText = document.getElementById("caption");

imgs.forEach((img) => {
    img.onclick = () => {
        modal.style.display = "block";
        modalImg.src = img.src;
        captionText.innerText = img.src; // Image number/name
    }
})

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = () => { 
  modal.style.display = "none";
}


// ==================================================

// Load photos
window.onload = () => {
    img1.src = `./imgs/img${current + 1}.jpg`; // 1
    img2.src = `./imgs/img${current + 2}.jpg`; // 2
    img3.src = `./imgs/img${current + 3}.jpg`; // 3
}


// Change photos

let nextBtn = document.getElementById("next-btn");
let prevBtn = document.getElementById("prev-btn");

current = 0;

nextBtn.addEventListener("click", () => {
    if (current != 3)
    {
        current += 3;
        console.log(current);
        updateImgs();
    }
})


prevBtn.addEventListener("click", () => {
    if (current != 0)
    {
        current -= 3;
        updateImgs();
    }
})


const updateImgs = () => {
    img1.src = `./imgs/img${current + 1}.jpg`; // 1
    img2.src = `./imgs/img${current + 2}.jpg`; // 2
    img3.src = `./imgs/img${current + 3}.jpg`; // 3
}













