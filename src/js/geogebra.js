window.onload = function () {
    var regShapes = { 
        dimintions: document.getElementById('regShapes-dimintions'), 
        numOfSides: document.getElementById('numOfSides'),
        mergePlace: document.getElementById('regShapes-mergePlace'),
        resetBtn: document.getElementById('regShapes-resetDimintions'),
        areaBtn: this.document.getElementById('regShapes-calc-area'),
        perimeterBtn: this.document.getElementById('regShapes-calc-perimeter'),
        calculatorSetup: function () {
            if (this.mergePlace.innerHTML === '') {
                switch (this.dimintions.value) {
                    case 'apothem-side':
                        mkinput('regShapes-mergePlace', 'regShapes-apothemLength', 'apothem');
                        mkinput('regShapes-mergePlace', 'regShapes-sideLength', 'side');
                        //console.log(1);
                        break;
                    case 'apothem':
                        mkinput('regShapes-mergePlace', 'regShapes-apothemLength', 'apothem');
                        //console.log(2)
                        break;
                    case 'side':
                        mkinput('regShapes-mergePlace', 'regShapes-sideLength', 'side');
                        //console.log(3)
                        break;
                    case 'radius': 
                        mkinput('regShapes-mergePlace', 'regShapes-radius', 'radius');
                        //console.log(4)
                    default: 
                        console.log('please fix the bug');
                        break;
                }
            } else {
                alert('Please reset the dimintions by clicking the \'reset dimintions\' button');
            }
        },
        calculator: function (isArea) {
            var side, apothem, radius, area, perimeter;
            var theata = Math.PI * (180 / this.numOfSides.value) / 180;
            function isAreaChecker(areaFormula, perimeterFormula) {
                if (isArea === true) {
                    area = areaFormula;
                } else {
                    perimeter = perimeterFormula;
                }
            }
            switch (this.dimintions.value) {
                case 'apothem-side':
                    apothem = parseFloat(document.getElementById('regShapes-apothemLength').value);
                    side = parseFloat(document.getElementById('regShapes-sideLength').value);
                    area = apothem * side * this.numOfSides.value / 2;
                    isAreaChecker(apothem * side * this.numOfSides.value / 2, side * this.numOfSides.value)
                    break;
                case 'apothem':
                    apothem = parseFloat(document.getElementById('regShapes-apothemLength').value);
                    isAreaChecker(Math.tan(theata) * Math.pow(apothem, 2) * this.numOfSides.value, Math.tan(theata) * apothem * 2 * this.numOfSides.value);
                    break;
                case 'side':
                    side = parseFloat(document.getElementById('regShapes-sideLength').value);
                    isAreaChecker(this.numOfSides.value * Math.pow(side, 2) / 4 / Math.tan(theata), this.numOfSides.value * side);
                    break;
                case 'radius':
                    radius = parseFloat(document.getElementById('regShapes-radius').value);
                    isAreaChecker(Math.sin(theata) * Math.cos(theata) * Math.pow(radius, 2) * this.numOfSides.value, Math.sin(theata) * radius * 2 * this.numOfSides.value);
                    break;
                default: 
                    console.log('please fix the bug');
                    break;
            }
            if (isArea === true) {
                return alert(area);
            } else {
                return alert(perimeter);
            }
        }
    };
    var quad = {
        shapeSelect: document.getElementById('quad-shapeSelect'),
        dimintions: [],
        calculatorSetup: function () {
            switch (this.shapeSelect.value) {
                case 'rectangle':
                        this.dimintions.push('length');
                        this.dimintions.push('width');
                        this.dimintions.push('diognal')
                    break;
                case 'square':
                    this.dimintions.push('side');
                    break;
                default:
                    break;
            }
        }
    };
    regShapes.dimintions.onchange = function () {
        regShapes.calculatorSetup();
    }
    regShapes.resetBtn.onclick = function () {
        regShapes.mergePlace.innerHTML = '';
        regShapes.dimintions.value = 'defult'
    }
    regShapes.areaBtn.onclick = function () {
        regShapes.calculator(true);
    }
    regShapes.perimeterBtn.onclick = function () {
        regShapes.calculator(false);
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
