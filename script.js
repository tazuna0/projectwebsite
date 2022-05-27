var pyrite = 0;
var pickaxecost = 20;
var enhancements = 0;
var minercost = 100;
var miners = 0; 
var minerscaling = 0.01;

function gainPyrite(amount) {
    pyrite = pyrite + amount;
    document.getElementById('pyrite').innerText = "Py: " + pyrite;
  };

function enhancement() {
    if (pyrite >= pickaxecost) {
        pyrite = pyrite - pickaxecost;
        enhancements = enhancements + 1; 
        pickaxecost = Math.round(10*enhancements*(Math.log(enhancements)+10)) // this is disasterous //

        document.getElementById('pyrite').innerText = "Py: " + pyrite;
        document.getElementById('pickaxecost').innerText = pickaxecost;
        document.getElementById('enhancements').innerText = enhancements;
    }
}

function minerHire() {
    if (pyrite >= minercost) {
        pyrite = pyrite - minercost;
        miners = miners + 1; 
        minercost = Math.round(minercost * (2 + minerscaling))
        minerscaling = minerscaling + 0.01;

        document.getElementById('pyrite').innerText = "Py: " + pyrite;
        document.getElementById('minercost').innerText = minercost;
        document.getElementById('miners').innerText = miners;
    }
}

setInterval(function() {
    pyrite = pyrite + miners;
}, 1000);