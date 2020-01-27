//@ts-check
window.onload = function () {
    var regShapes = {
        dimintions: document.getElementById('regShapes-dimintions'), 
        side: document.getElementById('regShapes-sideLength'),
        apothem: document.getElementById('regShapes-apothemLength'), 
        inputSetup: function () {
            
            if (this.dimintions.value === 'apothem-side') {
                alert('helloWorld')
                mkinput('regShapes-mergePlace', 'regShapes-apothemLength', 'apothem');
            }
        }
    }
    document.getElementById('helloworld').onclick = function () {
        regShapes.inputSetup();
    }
    function mkinput(mergePlace, id, placeholder) {
        var newElement = document.createElement('input');
        newElement.setAttribute('id', id);
        newElement.setAttribute('placeholder', placeholder);
        newElement.setAttribute('type', 'number');
        document.getElementById(mergePlace).appendChild(newElement);
    }
    //Dont code after this curly brace.
}
