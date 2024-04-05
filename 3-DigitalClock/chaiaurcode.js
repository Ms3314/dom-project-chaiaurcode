const clock = document.getElementById("clock")
setInterval(function(){
    const data = new Date();
        clock.innerText = data.toLocaleTimeString();
} , 1000) // remebering the Date function 
// toLocaleTimeString will give you the current time toLocaleTimeString