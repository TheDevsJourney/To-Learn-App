var addItem = document.querySelector(".block i");
var input = document.querySelector(".block input");
var list = document.querySelector(".addedItem ul");
var form = document.querySelector("#addtToLearn");
var formInput = document.querySelector("#addtToLearn input");
var h5 = document.querySelector('h5');

addItem.addEventListener("click", function(){
    addToLearn();
    form.reset();
})


list.addEventListener("click", function(e){
    if(e.target.classList.contains("delete")){
        var li = e.target.parentElement;
        list.removeChild(li);
        if(list.childElementCount === 0){
            h5.textContent = "Get Started!";
            h5.removeAttribute(
                "style", "opacity: 0"
            )
        }
    }
    if(e.target.classList.contains("name")){
        e.target.classList.toggle("strikeOut");
    }
})

function addToLearn(){
    var newItem = document.createElement('li')
    var span = document.createElement('span')
    var i = document.createElement('i')
    var classes = ["fas", "fa-minus", "delete"]

    if(input.value !== ""){
        h5.setAttribute(
            "style", "opacity: 0; transform: translateX(-250px)" 
        )

        span.classList.add("name");
        span.textContent = input.value;
        i.classList.add(...classes);

        setTimeout(function(){
            list.appendChild(newItem);
            newItem.appendChild(span);
            newItem.appendChild(i);
        }, 300)       
    }else{
        alert("plz add a to learn item");
    }
}