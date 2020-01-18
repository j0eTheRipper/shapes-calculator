window.onload = function () {
    
    function inputMaker(mergePlace, id, placeholder) {
        var newElement = document.createElement('input');
        newElement.setAttribute('id', id);
        newElement.setAttribute('placeholder', placeholder);
        document.getElementById(mergePlace).appendChild(newElement);
    }
    //Dont code after this curly brace.
}
