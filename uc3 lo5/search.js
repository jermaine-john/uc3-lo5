//search
const searchBar = document.forms['search-fruit'].querySelector('input');
searchBar.addEventListener('keyup',function(e){
    const ins = e.target.value.toLowerCase();
    const fruitNames = addFruits.getElementsByTagName('li');
    Array.from(fruitNames).forEach(function(fruitName){
        const specificName = fruitName.textContent;
        if(specificName.toLowerCase().indexOf(ins) != -1){
            fruitName.style.display = 'block';
        } else{
            fruitName.style.display = 'none';
        }
    });
});
