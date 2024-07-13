

const cl = console.log;
const button = document.getElementById('button')
const checkboxes = document.querySelectorAll('.input')
                    
                    
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const anyChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
        button.disabled = !anyChecked;
    });
    });
