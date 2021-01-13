function sltAll(){
    const fruits = document.querySelectorAll("#fruitTable li.ly");
 
 Array.from(fruits).forEach(function(fruit){
     fruit.innerHTML = fruit.textContent.toUpperCase();
   
 })



}
