function closeAllActiveDropdowns() {
    const activeDropdownList = Array.from(document.getElementsByClassName('navbar__dropdown active'));

    activeDropdownList.forEach(activeDropdown => {
        activeDropdown.classList.remove('active');
    });
}

function toggleDropdown(button) {
    if(!button) return;

    const dropdown = button.parentElement;
    
    if(!dropdown) return;

    const isAlreadyActive = dropdown.classList.contains('active');

    closeAllActiveDropdowns();

    if(!isAlreadyActive) {
        dropdown.classList.add('active');
    }
}

