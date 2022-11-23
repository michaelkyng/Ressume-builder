function change_color_black(){
let rect_color = document.getElementById("side-bar")
let rect_color2 = document.getElementById("side-bar2")
rect_color.style.fill = "black"
rect_color2.style.fill = "black"
console.log("color changed to black")
}

function change_color_lightblue(){
    let rect_color = document.getElementById("side-bar")
    let rect_color2 = document.getElementById("side-bar2")
    rect_color.style.fill = "#2487f1"
    rect_color2.style.fill = "#2487f1"
    console.log("color changed to light blue")
}
    
function change_color_darkblue(){
    let rect_color = document.getElementById("side-bar")
    let rect_color2 = document.getElementById("side-bar2")
    rect_color.style.fill = "#003194"
    rect_color2.style.fill = "#003194"
    console.log("color changed to dark blue")
}
    
function change_color_red(){
    let rect_color = document.getElementById("side-bar")
    let rect_color2 = document.getElementById("side-bar2")
    rect_color.style.fill = "red"
    rect_color2.style.fill = "red"
    console.log("color changed to red")
}

function change_color_green(){
    let rect_color = document.getElementById("side-bar")
    let rect_color2 = document.getElementById("side-bar2")
    rect_color.style.fill = "green"
    rect_color2.style.fill = "green"
    console.log("color changed to green")
}

function change_color_yellow(){
    let rect_color = document.getElementById("side-bar")
    let rect_color2 = document.getElementById("side-bar2")
    rect_color.style.fill = "yellow"
    rect_color2.style.fill = "yellow"
    console.log("color changed to yellow")
}
    
function use_template(){
    temp_template = document.getElementsByClassName("active")
    fake_template = temp_template[1]
    temp = fake_template.firstElementChild
    template1 = temp.firstElementChild
    console.log(template1)
    let move_to_builder = document.getElementById("template-btn")
    move_to_builder.href = "builder.html"
    
}

