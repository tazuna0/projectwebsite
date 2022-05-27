var pyrite = 0;
var pickaxecost = 20;
var enhancements = 0;

function gainPyrite(amount) {
    pyrite = pyrite + amount;
    document.getElementById('pyrite').innerText = "Py: " + pyrite;
  };

function enhancement() {
    if (pyrite >= pickaxecost) {
        pyrite = pyrite - pickaxecost;
        enhancements = enhancements + 1; // sorry //
        pickaxecost = Math.round(10*enhancements*(Math.log(enhancements)+10))

        document.getElementById('pyrite').innerText = "Py: " + pyrite;
        document.getElementById('pickaxecost').innerText = pickaxecost;
        document.getElementById('enhancements').innerText = enhancements;
    }
}

console.log(Math.log(10))