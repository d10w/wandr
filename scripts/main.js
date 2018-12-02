var myHeading = document.querySelector('h1');
myHeading.textContent = 'Wandr';
myHeading.style.color="#3b8094";

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/wanderlust-home.jpg') {
      myImage.setAttribute ('src','images/fjord.jpg');
    } else {
      myImage.setAttribute ('src','images/wanderlust-home.jpg');
    }
    else {
      myImage.setAttribute ('src','images/adventure.gif');
    }
}

var priceUSA = document.querySelector ('h2')
priceUSA.textContent = "USA Currency Exchange"
