let inputBox = document.querySelector("#inputBox")
let AddBtn = document.querySelector("#AddBtn")
let listItem = document.querySelector(".listItem")

AddBtn.addEventListener("click",()=>{
  if(inputBox.value === ""){
    document.querySelector("#errmsg").innerHTML = "You must write Something!"
  }
   else{
    document.querySelector("#errmsg").innerHTML = ""
    let li = document.createElement('li');
    let span = document.createElement("span")
    li.appendChild(document.createTextNode(inputBox.value))
    span.innerHTML = "&#x2715"
    
    listItem.appendChild(li)
    li.appendChild(span);
   }

    inputBox.value = ''
    savedData()

})

listItem.addEventListener("click",(e)=>{
console.log(e.target.tagName);
if(e.target.tagName === "LI"){
  e.target.classList.toggle("checked")
  savedData()
}
else if(e.target.tagName === "SPAN"){
  e.target.parentNode.remove()
  savedData()
}
})

function savedData(){
  localStorage.setItem("data",listItem.innerHTML)
}

let showData = ()=>{
  listItem.innerHTML = localStorage.getItem("data")
}
showData()