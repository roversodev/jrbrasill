if (document.getElementById("state1")) {
    const countUp = new CountUp("state1", document.getElementById("state1").getAttribute("countTo"));
    if (!countUp.error) {
        countUp.start();
    } else {
        console.error(countUp.error);
    }
}
if (document.getElementById("state2")) {
    const countUp1 = new CountUp("state2", document.getElementById("state2").getAttribute("countTo"));
    if (!countUp1.error) {
        countUp1.start();
    } else {
        console.error(countUp1.error);
    }
}
if (document.getElementById("state3")) {
    const countUp2 = new CountUp("state3", document.getElementById("state3").getAttribute("countTo"));
    if (!countUp2.error) {
        countUp2.start();
    } else {
        console.error(countUp2.error);
    };
}

AOS.init({
    easing: 'ease-out',
    duration: 1000,
    offset: 100 // Definir a distância para começar a animação
  });

  var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1,
    offset: 100
  });