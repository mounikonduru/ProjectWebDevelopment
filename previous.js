function unhideContent(over, id) {
    var Buttons = document.querySelectorAll('.PrevBtn');
    var MainContent = document.querySelectorAll('.MainContent');
    var i = 0;
    while (i < Buttons.length) {
        Buttons[i].classList.remove('unhide');
        MainContent[i].classList.remove('unhide');
        i++;
    }
    over.classList.add('unhide');
    document.getElementById(id).classList.add('unhide')
}