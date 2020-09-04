function createCloseButton(){
  var spanElement = document.createElement("SPAN");
  var xSymbol = document.createTextNode("\u00D7");
  spanElement.className = "close";
  spanElement.appendChild(xSymbol);
  return spanElement;
    
}
 
(function appendCloseButton(){
        var myActivityList = document.getElementsByTagName("LI");
        var i;
        for (i = 0; i < myActivityList.length; i++) {
        var closeButton = createCloseButton();
        myActivityList[i].appendChild(closeButton);
        }
})();

(function hideCurrentListItem(){
    var elementsToClose = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < elementsToClose.length; i++) {
        elementsToClose[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
})();


(function addCheckSymbol(){
    var list = document.querySelector('ul');
    list.addEventListener('click', function(ev) {
      if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
      }
    }, false);
})();

function addNewActivity() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("addNewActivity").value;
  var textNode = document.createTextNode(inputValue);
  li.appendChild(textNode);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("listOfActivities").appendChild(li);
  }
  document.getElementById("addNewActivity").value = "";

  var closeButton = createCloseButton();
  li.appendChild(closeButton);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}