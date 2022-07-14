const openbtn = document.querySelector(".open");
const modal = document.querySelector('.box');
const closeBtn = document.querySelector('.close');
// we are saying that when we click This
openbtn.addEventListener("click", () => {
    modal.classList.add('visible')
    openbtn.classList.add('hidden');
    const startit = () => {
        setTimeout(function () {
            confetti.start();
        }, 1000);
    };
    // Stops
    const stopit = () => {
        setTimeout(function () {
            confetti.stop();
        }, 5000);
    };
    // playing start
    startit();
    // stoping it
    stopit();
});
closeBtn.addEventListener('click', () => {
    modal.classList.remove('visible')
    openbtn.classList.remove('hidden');

})
const openbtn1 = document.querySelector(".open1");
const modal1 = document.querySelector('.box1');
const closeBtn1 = document.querySelector('.close1');
// we are saying that when we click This
openbtn1.addEventListener("click", () => {
    modal1.classList.add('visible')
    openbtn1.classList.add('hidden');
    const startit = () => {
        setTimeout(function () {
            confetti.start();
        }, 1000);
    };
    // Stops
    const stopit = () => {
        setTimeout(function () {
            confetti.stop();
        }, 5000);
    };
    // playing start
    startit();
    // stoping it
    stopit();
});
closeBtn1.addEventListener('click', () => {
    modal1.classList.remove('visible')
    openbtn1.classList.remove('hidden');

})

const openbtn2 = document.querySelector(".open2");
const modal2 = document.querySelector('.box2');
const closeBtn2 = document.querySelector('.close2');
// we are saying that when we click This
openbtn2.addEventListener("click", () => {
    modal2.classList.add('visible')
    openbtn2.classList.add('hidden');
    const startit = () => {
        setTimeout(function () {
            confetti.start();
        }, 500);
    };
    // Stops
    const stopit = () => {
        setTimeout(function () {
            confetti.stop();
        }, 5000);
    };
    // playing start
    startit();
    // stoping it
    stopit();
});

closeBtn2.addEventListener('click', () => {
    modal2.classList.remove('visible')
    openbtn2.classList.remove('hidden');

})


const openbtn3 = document.querySelector(".open3");
const modal3 = document.querySelector('.box3');
const closeBtn3 = document.querySelector('.close3');
// we are saying that when we click This
openbtn3.addEventListener("click", () => {
    modal3.classList.add('visible')
    openbtn3.classList.add('hidden');
    const startit = () => {
        setTimeout(function () {
            confetti.start();
        }, 1000);
    };
    // Stops
    const stopit = () => {
        setTimeout(function () {
            confetti.stop();
        }, 5000);
    };
    // playing start
    startit();
    // stoping it
    stopit();
});
closeBtn3.addEventListener('click', () => {
    modal3.classList.remove('visible')
    openbtn3.classList.remove('hidden');

})