window.onload = function () {
    var regShapes = {
        dimintions: document.getElementById('regShapes-dimintions'),
        inputSetup: document.getElementById('regShapes-inputSetup'),
        numOfSides: document.getElementById('numOfSides'),
        side: document.getElementById('regShapes-side'),
        apothem: document.getElementById('regShapes-apothem'),
        setup: function () {
            if (this.inputSetup === '') {
                if (this.dimintions.value === 'apothem-side') {
                    mkinput(this.inputSetup, "apothem", 'apothem')
                }
            }
        }
    }
    document.getElementById('helloworld').onclick = function () {
        regShapes.setup();
    }
    //console.log(regShapes.inputSetup.)
    function mkinput(mergePlace, id, placeholder) {
        var newElement = document.createElement('input');
        newElement.setAttribute('id', id);
        newElement.setAttribute('placeholder', placeholder);
        newElement.setAttribute('type', 'number');
        document.getElementById(mergePlace).appendChild(newElement);
    }
    //Dont code after this curly brace.
}
