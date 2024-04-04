const clicked = document.querySelectorAll(".button");
clicked.forEach((t)=> {
  t.addEventListener('mouseover',function () {
    const id = t.getAttribute('id')
    changer(id);
  })
})
// concepts learned
/*
-- when using the querySelectorAll please use foreach to loop over each of the members of the nodelist 
-- getAttribute HELPS U get the attribute that you want which helps u retarget an element 

*/ 


function changer(color) {
    document.querySelector('body').style.background = color;;
  
}


