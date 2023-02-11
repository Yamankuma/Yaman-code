let btn = document.querySelector('.onoff')
let bulb = document.querySelector('.bulb')
let btn1 = document.querySelector('.off')
btn.addEventListener('click',()=>{
     bulb.src = "bulb8.jpg"
    document.querySelector("p").textContent ="Bulb On"
})
btn1.addEventListener('click',()=>{
    bulb.src = "bulb7.jpg"
    document.querySelector("p").textContent = "Bulb Off"
})
