// signup offer  
var x = document.getElementById("x")
var sign_up_offer = document.getElementById("sign_up_offer")

x.addEventListener("click", function () {

    sign_up_offer.classList.add(
        "opacity-0",
        "-translate-y-9"
    )

    setTimeout(() => {
        sign_up_offer.classList.add("hidden")
    }, 400)

})

// image slider 
let currentIndex = 0

const slider = document.getElementById("slider")

const totalSlides = 3

function updateSlider() {

    slider.style.transform =
        `translateX(-${currentIndex * 100}%)`
}

function next() {

    currentIndex++

    if (currentIndex >= totalSlides) {
        currentIndex = 0
    }

    updateSlider()
}

function prev() {

    currentIndex--

    if (currentIndex < 0) {
        currentIndex = totalSlides - 1
    }

    updateSlider()
}

// Sidenavbar
var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var x = document.getElementById("x-sidenavbar")

menuicon.addEventListener("click", function(){
    sidenav.style.right=0
})

x.addEventListener("click",function(){
    sidenav.style.right="-50%"
})