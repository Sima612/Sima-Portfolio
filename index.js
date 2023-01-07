//Toggle menu
function toggleMenu() {
    const menuToggle = document.querySelector('.toggle');
    const sidebar = document.querySelector('.sidebar');
    menuToggle.classList.toggle('active');
    sidebar.classList.toggle('active');
    
    return;
}
toggleMenu();

function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "rachasima.tran001@gmail.com",
        Password : "EBE9AD4EF5C0380D32077E33CEE3A53A000D",
        To : 'rachasima.tran001@gmail.com',
        From : document.getElementById("email").value,
        Subject : document.getElementById("subject").value,
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );

    return;
}
sendEmail();