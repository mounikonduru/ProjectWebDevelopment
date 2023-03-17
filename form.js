const submitevent = document.querySelector("form");
submitevent.addEventListener("submit", (event) => {
    event.preventDefault();
    const user_name = document.getElementById("username").value;
    const email_id = document.getElementById("email").value;
    const text = document.getElementById("text").value;
    check(user_name, email_id, text);
    document.getElementById("username").value = null;
    document.getElementById("email").value = null;
});

const check = (n, id, s) => {
    if (n.length === 0 && id.length === 0) {
        console.warn("You must enter name and email id to submit this form");
    } else {
        console.log(`
   Username: ${n}  
   Email: ${id}      
   Message: ${s}`);
    }
};
