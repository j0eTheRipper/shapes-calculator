window.onload = function () {
    function calculautor (isArea) {
        var numberOfSides = document.getElementById('numberOfSides').value;
        var sideLength = document.getElementById('sideLength-reg').value;
        var apothemLength = document.getElementById('apothemLength').value;
        var result;
        var theata = Math.tan(360/numberOfSides/2 * Math.PI / 180)
        if (numberOfSides === '') {
            return alert('please enter the number of sides')
        } else if (apothemLength === '' && sideLength === '') {
            return alert('please enter one of the dimentions, either the side or the apothem');
        } else {
            if (isArea === true) {
                if (apothemLength !== '' && sideLength === '') {
                    result = theata * Math.pow(apothemLength, 2) * numberOfSides;
                } else if (apothemLength === '' && sideLength !== '') {
                    result = numberOfSides * Math.pow(sideLength, 2) / 4 / theata;
                } else {
                    result = apothemLength * sideLength * numberOfSides / 2;
                }
            } else {
                if (apothemLength !== '' && sideLength === '') {
                    result = theata * 2 * apothemLength * numberOfSides
                } else if (sideLength !== '') {
                    result = sideLength * numberOfSides;
                }
            }
        }
        return alert(result);
    }
    function quadCalculator(isArea, base, height, base2) {
        if (base2 === undefined) {
            if (isArea === true) {
                return alert(base * height);
            } else {
                return alert(2 * (base + height));
            }
        } else {
            if (isArea === true) {
                return alert((base + base2) / 2 * height);
            } else {
                return alert(base + base2 + height);
            }
        }
    }
    document.getElementById('calcAreaReg').onclick = function () {
        calculautor(true);
    }
    document.getElementById('calcPerReg').onclick = function () {
        calculautor(false);
    }
    document.getElementById('calcRectArea').onclick = function () {
        quadCalculator(true, document.getElementById('base').value, document.getElementById('height').value)
    }
    document.getElementById('calcRectPer').onclick = function () {
        quadCalculator(false, )
    }
    //Dont code after this curly brace.
}
