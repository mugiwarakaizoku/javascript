//Add cross marks at the end
lists = document.querySelectorAll('li')
lists.forEach(element => {
    cross = document.createElement('span')
    text = document.createTextNode('\u00D7')
    cross.appendChild(text)
    element.appendChild(cross)
});

//Add click event to cross mark
cross = document.querySelectorAll('span')
cross.forEach(element=>{
    element.addEventListener('click',function(element){
        this.parentElement.style.display="none"
    })
})

//Add strike class when clicked on todo list item
lis = document.querySelectorAll('li')
lis.forEach(li=>{
    li.addEventListener('click',function(li){
        if(!this.classList.contains('strike')){
            this.classList.add('strike')
        }else{
            this.classList.remove('strike')
        }
    })
})


//Add new todos
todo = document.querySelector(".todo").value
add = document.querySelector(".add")
ul = document.querySelector('ul')
add.addEventListener('click',function(){
    todo = document.querySelector(".todo").value
    document.querySelector(".todo").value = ""
    if(todo!=""){
        list = document.createElement('li')
        text = document.createTextNode(`${todo}`)
        cross = document.createElement('span')
        cross_text = document.createTextNode('\u00D7')
        cross.appendChild(cross_text)
        list.appendChild(text)
        list.appendChild(cross)
        ul.appendChild(list)
        cross.addEventListener('click',function(cross){
            this.parentElement.style.display="none"
        })
        list.addEventListener('click',function(list){
            if(!this.classList.contains('strike')){
                this.classList.add('strike')
            }else{
                this.classList.remove('strike')
            }
        })
    }else{
        return
    }
})

