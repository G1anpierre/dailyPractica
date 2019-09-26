
let ul = document.querySelector("ul");
let li = document.querySelector("li");
let lis = document.querySelectorAll("li");
let spans = document.querySelectorAll("span");
let entrata = document.querySelector("input[type='text']");

entrata.addEventListener("keypress", function(event){
   
    if(event.charCode == 13){
        console.log("Enter was Press " + this.value);
        li.insertAdjacentHTML('beforebegin', `<li><span>X</span> ${this.value}</li>`);
        this.value = "";
    }
});


for(let i = 0; i < lis.length; i++){

lis[i].addEventListener('click', function(){
    this.classList.toggle("mark");
});




lis[i].addEventListener('mouseover', function(){
    this.classList.add('over');
});




lis[i].addEventListener('mouseout', function(){
    this.classList.remove('over');
});



// Span Section X

spans[i].addEventListener('click', function(event){
    event.currentTarget.parentNode.remove();
    event.stopPropagation();
});

}