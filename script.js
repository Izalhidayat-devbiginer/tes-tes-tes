function scrolltocontact() {
    document.getElementById("Contact").scrollIntoView({
        behavior: 'smooth'
    })

}

document.getElementById("formcontact").addEventListener("submit", 
    function(event) {
         event.preventDefault();
    document.getElementById("message").innerText = 
     "Terimakasih atas pesan dan masukannya.";
});