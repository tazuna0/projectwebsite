var gameTitle = document.getElementById('title');
var gameText = document.getElementById('gametext');
var startButton = document.getElementById('gamestart');
var gameitself = document.getElementById('center')

document.getElementById('gamestart').onclick = function() {
    gameTitle.classList.toggle('fade')
    gameText.classList.toggle('fade')
    startButton.classList.toggle('fade')
    gameitself.classList.toggle('fade')
    gameTitle.parentNode.remove()
}

var pyrite = 10000000;
var miningPower = 1 
var PyperSecond = 0
var pickaxecost = 20;
var enhancements = 0;
var minercost = 100;
var miners = 0; 
var minerscaling = 0.01;
var hatscaling = 0.01;
var lanternscaling = 0.01;
var drillcost = 500;
var drills = 0;
var hatcost = 650;
var hats = 0;
var lanterncost = 650;
var lanterns = 0;
var environmentcost = 1000;
var environments = 0;
var excavatorcost = 5000;
var excavators = 0;
var overseercost = 7500;
var overseers = 0;
var titandrillcost = 50000;
var titandrills = 0;

var goldbarcost = 8401200

function gainPyrite(amount) {
    pyrite = pyrite + amount;
    document.getElementById('pyrite').innerText = "Py: " + pyrite;
  };


function updatePyPerClick() {
    miningPower = 1 + enhancements + (drills*5) + (excavators*50) + (titandrills*500)
    document.getElementById('pyperclick').innerText = miningPower;
}

function updatePyPerSecond() {
    PyperSecond = miners + (lanterns*10) + (hats*10) + (overseers*100)
    document.getElementById('pypersecond').innerText = PyperSecond;
}

function enhancement() {
    if (pyrite >= pickaxecost) {
        pyrite = pyrite - pickaxecost;
        enhancements = enhancements + 1; 
        pickaxecost = Math.round(10*enhancements*(Math.log(enhancements)+5)) // this is disasterous //
        updatePyPerClick()

        document.getElementById('pyrite').innerText = "Py: " + pyrite;
        document.getElementById('pickaxecost').innerText = pickaxecost;
        document.getElementById('enhancements').innerText = enhancements;
    }
}

function minerHire() {
    if (pyrite >= minercost) {
        pyrite = pyrite - minercost;
        miners = miners + 1; 
        minercost = Math.round(minercost * (1 + minerscaling))
        minerscaling = minerscaling + 0.01;

        document.getElementById('pyrite').innerText = "Py: " + pyrite;
        document.getElementById('minercost').innerText = minercost;
        document.getElementById('miners').innerText = miners;
        updatePyPerSecond()
    }
}

function drillGet() {
    if (pyrite >= drillcost) {
        pyrite = pyrite - drillcost;
        drills = drills + 1; 
        drillcost = Math.round(10*(drills+10)*(Math.log(drillcost)))
        updatePyPerClick()

        document.getElementById('pyrite').innerText = "Py: " + pyrite;
        document.getElementById('drillcost').innerText = drillcost;
        document.getElementById('drills').innerText = drills;
    }
}

function hatGet() {
    if (pyrite >= hatcost) {
        pyrite = pyrite - hatcost;
        hats = hats + 1;
        hatcost = Math.round(hatcost * (1.20 + hatscaling))
        hatscaling = hatscaling + 0.01;

        document.getElementById('pyrite').innerText = "Py: " + pyrite;
        document.getElementById('hatcost').innerText = hatcost;
        document.getElementById('hats').innerText = hats;
        updatePyPerSecond()
    }
}

function lanternGet() {
    if (pyrite >= lanterncost) {
        pyrite = pyrite - lanterncost;
        lanterns = lanterns + 1;
        lanterncost = Math.round(lanterncost * (1.20 + lanternscaling))
        lanternscaling = lanternscaling + 0.01;

        document.getElementById('pyrite').innerText = "Py: " + pyrite;
        document.getElementById('lanterncost').innerText = lanterncost;
        document.getElementById('lanterns').innerText = lanterns;
        updatePyPerSecond()
    }
}

function corporateEnvironment() {
    if (pyrite >= environmentcost) {
        pyrite = pyrite - environmentcost;
        environments = environments + 1
        lanterns = lanterns * 2
        miners = miners * 2
        enhancements = enhancements * 2
        drills = drills * 2
        hats = hats * 2
        excavators = excavators * 2
        
        environmentcost = environmentcost ** 2

        document.getElementById('pyrite').innerText = "Py: " + pyrite;
        document.getElementById('environmentcost').innerText = environmentcost;
        document.getElementById('environments').innerText = environments;
        document.getElementById('enhancements').innerText = enhancements;
        document.getElementById('hats').innerText = hats;
        document.getElementById('lanterns').innerText = lanterns;
        document.getElementById('miners').innerText = miners;
        document.getElementById('drills').innerText = drills;
        document.getElementById('excavators').innerText = excavators;
        updatePyPerSecond()
        updatePyPerClick()
    }

}

function excavatorGet() {
    if (pyrite >= excavatorcost) {
        pyrite = pyrite - excavatorcost;
        excavators = excavators + 1; 
        excavatorcost = Math.round(excavatorcost * 1.35) 
        updatePyPerClick()

        document.getElementById('pyrite').innerText = "Py: " + pyrite;
        document.getElementById('excavatorcost').innerText = excavatorcost;
        document.getElementById('excavators').innerText = excavators;
    }
}

function mineOverseerGet() {
    if (pyrite >= overseercost) {
        pyrite = pyrite - overseercost;
        overseers = overseers + 1; 
        overseercost = Math.round(overseercost * (1.20 + minerscaling))
        minerscaling = minerscaling + 0.01;

        document.getElementById('pyrite').innerText = "Py: " + pyrite;
        document.getElementById('overseercost').innerText = overseercost;
        document.getElementById('overseers').innerText = overseers;
        updatePyPerSecond()
    }
}

function titanDrillGet() {
    if (pyrite >= titandrillcost) {
        pyrite = pyrite - titandrillcost;
        titandrills = titandrills + 1; 
        titandrillcost = Math.round(titandrillcost * 1.50)
        updatePyPerClick()

        document.getElementById('pyrite').innerText = "Py: " + pyrite;
        document.getElementById('titandrillcost').innerText = titandrillcost;
        document.getElementById('titandrills').innerText = titandrills;
    }
}

setInterval(function() {
    pyrite = pyrite + miners;
    pyrite = pyrite + lanterns * 10
    pyrite = pyrite + hats * 10
    pyrite = pyrite + overseers * 100
    document.getElementById('pyrite').innerText = "Py: " + pyrite;
}, 1000);
