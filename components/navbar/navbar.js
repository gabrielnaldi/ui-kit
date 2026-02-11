function toggleDropdown(button) {
    if(!button) return;

    const dropdown = button.parentElement;
    
    if(!dropdown) return;

    dropdown.classList.toggle('active');
}

