// SCRIPT FOR THIRSTY BEAR PROJECT - 03/10/19

(function() {

  const slide = () => {
    let slideCounter = 0;
    const el = document.getElementById("slide")

  return () => {
      if (slideCounter <= 3 && slideCounter > 0) {
        el.style.backgroundImage = `url(./images/backgroundImages/bg${slideCounter}.jpg)`;
        slideCounter += 1;
      }else {
        slideCounter = 1;
      }
    }
  }

  setInterval(slide(), 5000);




}());
