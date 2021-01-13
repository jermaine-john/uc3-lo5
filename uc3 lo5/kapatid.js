function kapatiran()
{
    const fruits = document.querySelector(".headings");
    const changeBck = fruits.nextElementSibling;
    const changeBck2 = fruits.parentElement;

    changeBck2.setAttribute("style", "color:brown");
    changeBck.setAttribute("style", "color:blue");
    

}