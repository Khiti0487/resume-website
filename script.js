function toggleDetails(id) {
    const element = document.getElementById(id);
    element.classList.toggle('show');
    const button = element.previousElementSibling;
    button.textContent = element.classList.contains('show') ? 'Hide Details' : 'Show Details';
}
