// SCRIPT FOR THIRSTY BEAR PROJECT - 03/10/19

(function() {
  /*********************************
   * CODE FOR SLIDE SHOW INDEX.HTML* 
   ********************************/
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

  /*********************************
   * CODE FOR MENU.HTML* 
   ********************************/
  
  
  function createModule(content) {
    let elWrapper = document.getElementById("tbMenu");
    let elDiv = document.createElement("div");
    let elH3 = document.createElement("h3");
    let elPPrice = document.createElement("p");
    let elPDesc = document.createElement("p");

    let tbItem = document.createTextNode(content.item);
    let tbPrice = document.createTextNode(content.dispPrice);
    let tbDesc = document.createTextNode(content.desc);

    elWrapper.appendChild(elDiv);
    elDiv.setAttribute("class", "tbMenuItem");
    elDiv.appendChild(elH3);
    elDiv.appendChild(elPPrice);
    elDiv.appendChild(elPDesc);

    elH3.appendChild(tbItem);
    elPPrice.appendChild(tbPrice);
    elPDesc.appendChild(tbDesc);
  }

  function displayMenu(items) {
    items.map( item => {
      createModule(item);
    })
  }

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {     
      displayMenu(JSON.parse(this.responseText));
    }else {
      // document.getElementById("tbMenuContent").innerHTML = "FATAL ERROR, SOMETHING BAD HAPPENED";
    }
  }
  xhttp.open("GET", "./breakfast.txt", true);
  xhttp.send();


}());
