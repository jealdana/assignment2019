

function bodyOnLoad(){
    addListItem("body onload");
}

// window.onload
window.onload = function() {
    addListItem("window onload");
};

// event listener
document.addEventListener('DOMContentLoaded', function() {
    addListItem("event listener DOMContentLoaded");
}, false);

// jquery .ready
$(document).ready(function(){
    addListItem("jquery document ready");
});


function addListItem(text){
    var container = document.getElementById("container");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(text));
    container.appendChild(li);
}
