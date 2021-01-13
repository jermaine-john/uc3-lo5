//hide fruit list
const hideFruits = document.querySelector('#hide');
hideFruits.addEventListener('change',function(e){
    if(hideFruits.checked){
        addFruits.style.display ="none";
    } else{
        addFruits.style.display = "initial";
    }
});
