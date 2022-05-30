let arrayAnimali = ['🐱', '🦉', '🐾', '🦁', '🦋', '🐛', '🐝', '🐬', '🦊', '🐨', '🐰', '🐯', '🐱', '🦉', '🐾', '🦁', '🦋', '🐛', '🐝', '🐬', '🦊', '🐨', '🐯', '🐰'];



let arrayComparison = [];

document.body.onload = startGame();


 var interval;
 var icon = document.getElementsByClassName("find");
 var modalita = document.getElementById ('modal');
 var timer = document.querySelector ('.timer');


function shuffle(a) {
    var currentIndex = a.length;
    var temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = a[currentIndex];
        a[currentIndex] = a[randomIndex];
        a[randomIndex] = temporaryValue;
    }
    return a;
}
 function resetGame(){
     modalita.classList.remove('active');
     startGame();
 } 

function startGame(){
    clearInterval(interval);
    arrayEmpty =[];
    var arrayShuffle = shuffle(arrayAnimali);
    var grid =document.getElementById ('griglia');
    grid.innerHTML = '';

    arrayShuffle.forEach(element =>{
        let card = document.createElement('div');
        let sticker = document.createElement('div');
        sticker.classNme = 'icon';
        grid.appendChild(card).appendChild(sticker);
        sticker.innerHTML =element;
    })

    startTimer();
    function fac() {
        displayIcon();
    }

    var icon = document.getElementsByClassName ('icon');
    var icons = [...icon];

    icons.forEach(element => {
        element.addEventListener("click", displayIcon);
    });

    icons.forEach(element => {
        element.addEventListener("click", openModal);
    });



}



function displayIcon() {
    var icon = document.getElementsByClassName("icon");
    var icons = [...icon];
    this.classList.toggle("show");
    arrayComparison.push(this);

    var len = arrayComparison.length;
    if (len === 2) {
        
        if (arrayComparison[0].innerHTML === arrayComparison[1].innerHTML) {
            arrayComparison[0].classList.add("find", "disabled");
            arrayComparison[1].classList.add("find", "disabled");
            arrayComparison = [];
        } else {
            icons.forEach(function(item) {
                item.classList.add('disabled');
            });
        
            setTimeout(function() {
                arrayComparison[0].classList.remove("show");
                arrayComparison[1].classList.remove("show");
                icons.forEach(function(item) {
                    item.classList.remove('disabled');
                    for (var i = 0; i < iconsFind.length; i++) {
                        iconsFind[i].classList.add("disabled");
                    }
                });
                arrayComparison = [];
            }, 700);
        }
    }
}

function openModal(){
    if (iconsFind.length ==24){
        clearInterval(interval);
        modalita.classList.add("active");
        document.getElementById("tempoTrascorso").innerHTML =timer.innerHTML;
        closeModal();
    }
}

function closeModal(){
    closeicon.addEventListener("click", function (a){
        modalita.classList.remove("active");
        startGame();
    })
}



function startTimer() {
    var minutes = 0;
    var seconds =0;

    function increment() {
        seconds +=1;
        if (seconds === 60){
            seconds =0;
            minutes +=1;
        }
        timer.innerHTML = 'Tempo' * minutes + "min" + seconds *"sec";
    }
        interval= setInterval(increment, 1000)
    
}

