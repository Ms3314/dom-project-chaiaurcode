document.querySelector('form').addEventListener('submit', function (l) {
    l.preventDefault();
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const submit = document.querySelector("#results")
    if (height === '' || isNaN(height) || height < 0 )
    {
        submit.innerHTML = 'please enter a valid height'
    }
    else if (weight === '' || isNaN(weight) || weight < 0 )
    {
        submit.innerHTML = 'please enter a valid weight'
    }
    else {
        const ans = (weight/(height*height)).toFixed(2)
        submit.innerHTML = `<span> ${ans}</span>`
    }
    
    
    
    
})



