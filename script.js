window.addEventListener("scroll",()=>{
    document.querySelector(".Background").style.backgroundSize = `${window.scrollY * 1.8 + 1900}px`
    document.querySelector(".Background h1").style.opacity = `${(-window.scrollY + 300) * .004}`
})