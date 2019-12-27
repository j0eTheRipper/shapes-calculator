window.onload = function () {
    var regularShapes = { 
        //these are the defults, and can be changed.
        numberOfSides: 0,
        apothemLength: 0,
        sideLength: 0,
        //calculautor method
        calculautor: function (isArea) {
            var result;
            var theata = Math.tan(360/this.numberOfSides/2 * Math.PI / 180)
            if (this.numberOfSides === '') {
                return alert('please enter the number of sides')
            } else if (this.apothemLength === '' && this.sideLength === '') {
                return alert('please enter one of the dimentions, either the side or the apothem');
            } else {
                if (isArea === true) {
                    if (this.apothemLength !== '' && this.sideLength === '') {
                        result = theata * Math.pow(this.apothemLength, 2) * this.numberOfSides;
                    } else if (this.apothemLength === '' && this.sideLength !== '') {
                        result = this.numberOfSides * Math.pow(this.sideLength, 2) / 4 / theata;
                    } else {
                        result = this.apothemLength * this.sideLength * this.numberOfSides / 2;
                    }
                } else {
                    if (this.apothemLength !== '' && this.sideLength === '') {
                        result = theata * 2 * this.apothemLength * this.numberOfSides
                    } else if (this.sideLength !== '') {
                        result = this.sideLength * this.numberOfSides;
                    }
                }
            }
            return alert(result);
        }
    }
    document.getElementById('calcAreaReg').onclick = function () {
        regularShapes.numberOfSides = document.getElementById('numberOfSides').value; 
        regularShapes.sideLength = document.getElementById('sideLength').value;
        regularShapes.apothemLength = document.getElementById('apothemLength').value;
        return regularShapes.calculautor(true);
    };
    this.document.getElementById('calcPerReg').onclick = function () {
        regularShapes.numberOfSides = document.getElementById('numberOfSides').value; 
        regularShapes.sideLength = document.getElementById('sideLength').value;
        regularShapes.apothemLength = document.getElementById('apothemLength').value;
        return regularShapes.calculautor(false);
    };
    //Dont code after this curly brace.
}