function parChi()
{
    const findfruit = document.querySelector("#fruitTable");
    var inarray = findfruit.children;
    
        Array.from(inarray).forEach(function(ins){
        ins.innerHTML = ins.textContent.toUpperCase();
        })

}