const accordion = document.getElementsByClassName('container');

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function() {
        this.classList.toggle('active');
    });
}

const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const checkbox = document.getElementById('gridCheck1');

if (form) {
    form.addEventListener('submit', handleSubmit);
}

function handleSubmit(e) {
    e.preventDefault();

    let isValid = true;
    const formData = {};

    inputs.forEach(input => {
        if (input.type !== 'checkbox' && input.value.trim().length === 0) {
            alert(`${input.placeholder} nie może być puste!!`);
            isValid = false;
        } else if (input.type !== 'checkbox') {
            formData[input.id] = input.value.trim();
        }
    });

    if (!checkbox.checked) {
        alert('Musisz zaakceptować warunki i zasady!!');
        isValid = false;
    } else {
        formData[checkbox.id] = checkbox.checked;
    }

    if (isValid) {
        console.log('Form Data:', formData);
        form.reset();
    }
}

const layers = document.querySelectorAll('.layer');

layers.forEach(layer => {
    layer.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = './menu.html'; // Adjust the path to your menu page if necessary
    });
});