const pibRegex = /^[А-Яа-яA-Za-z]+ [А-Яа-яA-Za-z]\.[А-Яа-яA-Za-z]\.$/g;
const groupRegex = /null/g;
const idCardRegex = /null/g;
const birthDateRegex = /null/g;
const emailRegex = /null/g;

const pibInput = document.getElementById('pibId');

const confirmButton = document.getElementById('confirmButton');
confirmButton.addEventListener('submit', (e) => {

    console.log("other aboba");
    if (isValid) {
        
    }
})


function isValid() {
    if (pibInput.match(pibRegex)) {
        alert("aboba");
    }
}