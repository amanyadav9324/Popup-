function popup() {
    document.getElementById('ticketpopup').style.display= "flex";
    document.getElementById('okbutton').addEventListener('click', () => {
        document.getElementById('ticketpopup').style.display= "none";
    });
}