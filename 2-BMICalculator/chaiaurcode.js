document.querySelector('form').addEventListener('submit', function (l) {
    l.preventDefault();
    // discontinuing the default function of itself posting a sort of request
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const submit = document.querySelector("#results")
    if (height === '' || isNaN(height) || height < 0 )
    // isnan predicts if the given input is a number or not  
    {
        submit.innerHTML = 'please enter a valid height'
    }
    else if (weight === '' || isNaN(weight) || weight < 0 )
    {
        submit.innerHTML = 'please enter a valid weight'
    }
    else {
        const ans = (weight/((height*height)/10000)).toFixed(2)
        if (ans < 18.6) submit.innerHTML = `<span> you are underweight </span>` 
        else if (18.6 <= ans < 24.9)  submit.innerHTML = `<span> you are good</span>`
        else submit.innerHTML = '<span>You are Overweight</span>'
    }
})



