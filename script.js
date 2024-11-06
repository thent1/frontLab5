// part 1

const pibRegex = /^[А-Яа-яA-Za-z]+ [А-Яа-яA-Za-z]\.[А-Яа-яA-Za-z]\.$/;
const groupRegex = /^[А-Яа-яA-Za-z]{2}-\d{2}$/;
const idCardRegex = /^[A-Za-zА-Я]{2} №\d{6}$/;
const birthDateRegex = /^\d{2}\.\d{2}\.\d{4}$/;
const emailRegex = /^[a-zA-Z]+@[a-zA-Z]+\.com$/;

const pibInput = document.getElementById('pibId');
const groupInput = document.getElementById('groupId');
const idCardInput = document.getElementById('idCardId');
const birthDateInput = document.getElementById('birthDateId');
const emailInput = document.getElementById('emailId');

const confirmForm = document.getElementById('inputForm');
confirmForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let condition = isFormValid();
    if (condition) {
        let newWindow = window.open('', '', 'width=400,height=300');
        if (newWindow) {
            newWindow.document.write('<p>' + 'ПІБ:' + pibInput.value + '</p>');
            newWindow.document.write('<p>' + 'Група: ' + groupInput.value + '</p>');
            newWindow.document.write('<p>' + 'ID карта: ' + idCardInput.value + '</p>');
            newWindow.document.write('<p>' + 'Дата народження: ' + birthDateInput.value + '</p>');
            newWindow.document.write('<p>' + 'email: ' + emailInput.value + '</p>');
        }
    }
})

function highlightGreen(element) {
    element.style.outlineColor = "green";
    element.style.boxShadow = "inset 0 0 0 2px green";
}

function highlightRed(element) {
        element.style.outlineColor = "red";
        element.style.boxShadow = "inset 0 0 0 2px red";

}

function isFormValid() {
    let invalidFlag = false;

    if (pibRegex.test(pibInput.value)) {
        highlightGreen(pibInput);
    } else {
        invalidFlag = true;
        highlightRed(pibInput);
    }

    if (groupRegex.test(groupInput.value)) {
        highlightGreen(groupInput);
    } else {
        invalidFlag = true;
        highlightRed(groupInput);
    }

    if (idCardRegex.test(idCardInput.value)) {
        highlightGreen(idCardInput);
    } else {
        invalidFlag = true;
        highlightRed(idCardInput);
    }

    if (birthDateRegex.test(birthDateInput.value)) {
        highlightGreen(birthDateInput);
    } else {
        invalidFlag = true;
        highlightRed(birthDateInput);
    }

    if (emailRegex.test(emailInput.value)) {
        highlightGreen(emailInput);
    } else {
        invalidFlag = true;
        highlightRed(emailInput);
    }

    return !invalidFlag;
}

// part 2



const eightCell = document.getElementById('eightsElement');
eightCell.addEventListener("mouseover", (event) => {
    eightCell.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
});

let colorInput = document.getElementById('colorInput');
eightCell.addEventListener("click", () => {
    eightCell.style.backgroundColor = colorInput.value;
})

eightCell.addEventListener("dblclick", (event) => {
    let cellParentalElement = eightCell.parentElement;
    let cellParentalParentalElement = cellParentalElement.parentElement;
    let startColumn = Array.from(eightCell.parentElement.children).indexOf(eightCell);
    for (let i = 0; i < Array.from(cellParentalParentalElement.children).length; ++i) {
        for (let j = startColumn; j < cellParentalElement.children.length; j = j + 2) {
            cellParentalParentalElement.children[i].children[j].style.backgroundColor = colorInput.value;
        }
    }

});