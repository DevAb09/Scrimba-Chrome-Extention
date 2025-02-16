let myleads =[]
const inputEl= document.getElementById("input-el")
const savebtn= document.getElementById("save-input")
const deleteBtn= document.getElementById("delete-btn")
const tabsBtn= document.getElementById("tab-btn")
const ulEl=  document.getElementById("ul-el")
let leadsfromlocalstorage = JSON.parse(localStorage.getItem("myleads"))

if (leadsfromlocalstorage) {
    myleads= leadsfromlocalstorage
    render(myleads)
}


tabsBtn.addEventListener("click", function() {


chrome.tabs.query ({active:true, currentWindow:true}, function(tabs){
    myleads.push (tabs[0].url)
    localStorage.setItem("myleads", JSON.stringify(myleads))
    render(myleads)
})

})

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myleads=[]
    inputEl.value=""
    render(myleads)
    
})


savebtn.addEventListener("click", function(){
    myleads.push(inputEl.value)
    inputEl.value=""
    localStorage.setItem("myleads", JSON.stringify(myleads))
    render(myleads)

})

function render(leads) {
    let listofleads =""

    for(i=0; i<leads.length; i++) {
     listofleads+=`
        <li> 
        
        <a target ="_blank" href=${leads[i]}>
        
        ${leads[i]}</a>
        
        </li>
        `
    }
    ulEl.innerHTML = listofleads
    
}