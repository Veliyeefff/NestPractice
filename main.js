// Categories Toggle
let categorie_icon = document.querySelector(".nav-categories")
let active_menu = document.querySelector(".categories-menu")
categorie_icon.addEventListener("click",function(e){
    active_menu.classList.toggle("active")
})

// Location Toggle
let location_icon = document.querySelector(".nav-location")
let active_location_menu = document.querySelector(".location-menu")
location_icon.addEventListener("click",function(e){
    active_location_menu.classList.toggle("active")
})

// BrowseAllCategories

let categories = document.querySelector(".categ_btn")
let active_categories_menu = document.querySelector(".row")
categories.addEventListener("click",function(){
    active_categories_menu.classList.toggle("active-flex")
})

//mobilemenu
let menu = document.querySelector(".fa-bars")
let sidebar = document.querySelector(".sidebar")
menu.addEventListener("click",function(){
    sidebar.classList.add("sidebar-active")
})

let exit = document.querySelector(".menu-exit")
exit.addEventListener("click",function(){
    sidebar.classList.remove("sidebar-active")
})

//Sidebar Toggle

let sidebararrow = document.querySelectorAll(".sidebararrow")
let lists = document.querySelectorAll(".lists")


sidebararrow.forEach(element => {
    lists.forEach(element => {
        element.classList.remove("active")
    })
    element.addEventListener("click",function(e){
        e.target.parentElement.nextElementSibling.classList.toggle("active")
    })

})

