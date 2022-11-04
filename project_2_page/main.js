// Goals: 
// Mobile UI
// refactoring

// Global var
let helper = [];
let divs = [];
let algorithm = '';
let speed = 0;
let sorting = false; // Usefull for enabling and disabling buttons

// Listeners
const slider = document.getElementById('range');
const sliderParentDiv = document.querySelector('.slider');
slider.addEventListener('input', changeArray);
slider.value = 50;

const selectAlgo = document.getElementById('algorithm');
selectAlgo.addEventListener('change', () => chooseAlgorithm(selectAlgo.value));

const selectSpeed = document.getElementById('speed');
selectSpeed.addEventListener('change', () => chooseSpeed(parseInt(selectSpeed.value)));

const sortBtn = document.querySelector('.sort-btn');
sortBtn.addEventListener('click', () => { runAlgorithm(selectAlgo.value, selectSpeed.value); });

const stopBtn = document.querySelector('.stop-btn');
stopBtn.addEventListener('click', () => { stopAlgorithm(); })

// Page load
changeArray();

// ---------------Utilities--------------------
function changeArray() {
    divs = [];
    let divsMarkup = '';
    let random = 0;
    for (let i = 0; i < document.getElementById('range').value; i++) {
        random = getRandomNum(30, 215);
        divs.push(
            {
                markup: `<div style=\"height: ${random * 3}px; width: 20px; background: #F2AA4CFF; display: inline-block; margin-left: 2px;\"></div>`,
                value: random
            });
        divsMarkup += divs[i].markup;
    }
    document.querySelector('.array-container').innerHTML = divsMarkup;
}

function joinDivs() {
    let divsMarkup = '';
    for (let i = 0; i < divs.length; i++) {
        divsMarkup += divs[i].markup;
    }
    document.querySelector('.array-container').innerHTML = divsMarkup;
}

function chooseAlgorithm(algo) {
    algorithm = algo;
}

function chooseSpeed(s) {
    speed = s;
    // test
    if (speed == 500) {
        stop = true;
    } else {
        stop = false;
    }
    // test
}

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

async function runAlgorithm(algorithm, speed) {
    if (speed === 'speed') {
        alert('Please, select speed');
        return;
    }

    if (algorithm === 'algorithm') {
        alert('Please, select algorithm');
        return;
    }

    sorting = true;
    toggleStopBtn();

    switch (algorithm) {
        case 'Bubble Sort':
            await bubbleSort();
            sorting = false;
            toggleStopBtn();
            break;
        case 'Insertion Sort':
            await insertionSort();
            sorting = false;
            toggleStopBtn();
            break;
        case 'Selection Sort':
            await selectionSort();
            sorting = false;
            toggleStopBtn();
            break;
        case 'Merge Sort':
            await mergeSort(0, divs.length - 1);
            sorting = false;
            toggleStopBtn();
            break;
        case 'Algorithm':
            break;
    }
}

function stopAlgorithm() {
    sorting = false;
}

function toggleStopBtn() {
    // if sorting = true => disable inputs, activate stop button
    // else => enable inputs, deactivate stop button
    if (sorting) {
        selectAlgo.disabled = true;
        selectAlgo.style.display = "none";
        selectSpeed.disabled = true;
        selectSpeed.style.display = "none";
        slider.disabled = true;
        sliderParentDiv.style.display = "none";
        sortBtn.disabled = true;
        sortBtn.style.display = "none";

        stopBtn.classList.toggle('inactive');
    } else {
        selectAlgo.disabled = false;
        selectAlgo.style.display = "block";
        selectSpeed.disabled = false;
        selectSpeed.style.display = "block";
        slider.disabled = false;
        sliderParentDiv.style.display = "block";
        sortBtn.disabled = false;
        sortBtn.style.display = "block";

        stopBtn.classList.toggle('inactive');
    }
}

// Delay
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



// ------------Sorting Algorithms---------------

// Selection Sort
async function selectionSort() {
    var len = divs.length;
    for (var i = 0; i < len - 1; i = i + 1) {
        var j_min = i;
        for (var j = i + 1; j < len; j = j + 1) {
            if (divs[j].value < divs[j_min].value) {
                j_min = j;
            } else { }
        }
        if (j_min !== i) {
            // Swap
            var temp = divs[i];
            divs[i] = divs[j_min];
            divs[j_min] = temp;

            joinDivs();

            if (!sorting) return;
            await sleep(speed);
        } else { }
    }
}

// Bubble Sort
async function bubbleSort() {
    let len = divs.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (divs[j + 1]) {
                if (divs[j].value > divs[j + 1].value) {
                    let temp = divs[j];
                    divs[j] = divs[j + 1];
                    divs[j + 1] = temp;

                    joinDivs();

                    if (!sorting) return;
                    await sleep(speed);
                }
            }
        }
    }
};

// Insertion Sort
async function insertionSort() {
    let length = divs.length;
    for (let i = 1; i < length; i++) {
        let key = divs[i];
        let j = i - 1;
        while (j >= 0 && divs[j].value > key.value) {
            divs[j + 1] = divs[j];
            j = j - 1;

            joinDivs();

            if (!sorting) return;
            await sleep(speed);
        }
        divs[j + 1] = key;
    }
};

//merge sort
async function mergeSort(low, high) {
    if (low < high) {
        const middle = Math.floor(low + (high - low) / 2);
        await mergeSort(low, middle);
        await mergeSort(middle + 1, high);
        if (!sorting) return;
        await sleep(speed);
        merge(low, middle, high);
    }
}
async function merge(low, middle, high) {
    for (let i = low; i <= high; i++) {
        helper[i] = divs[i];
    }

    let i = low;
    let j = middle + 1;
    let k = low;

    while (i <= middle && j <= high) {
        if (helper[i].value <= helper[j].value) {
            divs[k] = helper[i];
            i++;
            joinDivs();
        } else {
            divs[k] = helper[j];
            j++;
            joinDivs();
        }
        k++
    }

    while (i <= middle) {
        divs[k] = helper[i];
        k++;
        i++;
        joinDivs();
    }
}


