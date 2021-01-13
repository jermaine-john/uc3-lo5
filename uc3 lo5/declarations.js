//declarations
const addFruits = document.querySelector('#fruitTable');
const addForm = document.forms['add-fruit'];
//create eventlistener
addForm.addEventListener('submit',function(e){
e.preventDefault();
//to capture the value from the textbox
const getValues = addForm.querySelector('input[type="text"]').value; 

//create li element
const li = document.createElement('li');
//insert the value to li
li.textContent = getValues;
//add li to fruittable
addFruits.appendChild(li);
//to add class name
li.classList.add('ly');
         
 });