const form = document.querySelector('form');
const ul = document.querySelector('ul');

listItems = []

function addlist(alllist){
    ul.innerHTML = "";
    alllist.forEach(function(l,i){
        ul.innerHTML +=  `<li>${l.name} - ${l.city} - <button onClick="removeEl(${i})">Remove</button></li>`
    })
}

function removeEl(i){
    listItems.splice(i, 1);
    addlist(listItems);
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    const { name, city } = e.target;
    const newList = {
        name: name.value,
        city: city.value
    };
    
    listItems.push(newList);
    addlist(listItems);
    name.value = "";
    city.value = "";
});


function showDialog(){
 alert("Hellooo?")
}