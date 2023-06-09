let names = [
    "apple", "banana", "cherry", "mango", "orange", "strawberry", "watermelon"
];

let sortedNames = names.sort();
console.log(sortedNames)

let input = document.getElementById("input")

input.addEventListener("keyup", (e) =>{
  
    //initially remove all element
    removeElements();
    
    // loop through above array
    for(let i of sortedNames){

     console.log(i)
     if(i.toLowerCase().startsWith(input.value.toLowerCase())
      && input.value != ""){

     let listItem = document.createElement("ul");
      listItem.classList.add("list-items");
      listItem.style.cursor = "pointer";
      listItem.setAttribute("onclick", "displayNames('"+ i + "')");
     

     let word = "<b>" + i.substr(0, input.value.length) + "</b>"
     word += i.substr(input.value.length);

     listItem.innerHTML = word;
     document.querySelector(".list").appendChild(listItem)

    }
    }
})

function displayNames(value){
    input.value = value
    removeElements()
}

function removeElements(){
    let items = document.querySelectorAll(".list-items");
    items.forEach((item) =>{
        item.remove();
    })
}