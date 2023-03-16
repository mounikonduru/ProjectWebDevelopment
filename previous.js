function unhideContent(over, id) {
    let Buttons = document.querySelectorAll('.PrevBtn');
    let MainContent = document.querySelectorAll('.MainContent');
    let i = 0;
    while (i < Buttons.length) {
        Buttons[i].classList.remove('unhide');
        MainContent[i].classList.remove('unhide');
        i++;
    }
    over.classList.add('unhide');
    document.getElementById(id).classList.add('unhide')
}