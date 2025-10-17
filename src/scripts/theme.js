const btn = document.getElementById('themePicker');
const body = document.getElementById('body');

function toggleTheme() {
    body.classList.toggle('light');
    body.classList.toggle('dark');
}

btn.addEventListener('click', () => {
    toggleTheme();
})