const container = document.getElementById("container")
const arrContent = [...document.querySelectorAll('.accordion-content')]

container.addEventListener('click',e=>{
    e.preventDefault()
    let target =e.target
    if(target.tagName!=='BUTTON') return
    target.classList.toggle('is-open')
    let content = target.nextElementSibling
    arrContent.forEach(cont=>{
        if(cont!==content){
            cont.previousElementSibling.classList.remove('is-open')
            cont.style.maxHeight = null
        }
    })
    if (content.style.maxHeight) return content.style.maxHeight = null
    content.style.maxHeight = `${content.scrollHeight}px`
})