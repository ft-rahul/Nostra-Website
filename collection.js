// Side navbar
var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var x = document.getElementById("x-sidenavbar")

menuicon.addEventListener("click", function(){
    sidenav.style.right=0
})

x.addEventListener("click",function(){
    sidenav.style.right="-50%"
})

// Search and filter functionality
var search = document.getElementById("search")
var products = document.querySelectorAll(".product")

// search filter
search.addEventListener("keyup", function () {

    var enteredValue = search.value.toLowerCase()

    for (count = 0; count < products.length; count++) {

        var productName = products[count].querySelector(".product_name").textContent.toLowerCase()

        if (productName.indexOf(enteredValue) < 0) {

            products[count].style.display = "none"

        }

        else {

            products[count].style.display = "block"

        }

    }

})

// Gender filter
var genderFilters = document.querySelectorAll(".gender-filter")

genderFilters.forEach(function(filter){

    filter.addEventListener("change", function(){

        var selectedGender = this.value

        products.forEach(function(product){

            if(filter.checked){

                if(product.dataset.gender === selectedGender){

                    product.style.display = "block"

                }
                else{

                    product.style.display = "none"

                }

            }
            else{

                product.style.display = "block"

            }

        })

    })

})

// Catergory Filter
var categoryFilters = document.querySelectorAll(".catergories-filter")

categoryFilters.forEach(function(filter){

    filter.addEventListener("change", function(){

        var selectedCategory = this.value

        products.forEach(function(product){

            if(filter.checked){

                if(product.dataset.categories === selectedCategory){

                    product.style.display = "block"

                }
                else{

                    product.style.display = "none"

                }

            }
            else{

                product.style.display = "block"

            }

        })

    })

})

// Price filter 
var priceFilters = document.querySelectorAll(".price-filter")

priceFilters.forEach(function(filter){

    filter.addEventListener("change", function(){

        var selectedPrice = this.value

        products.forEach(function(product){

            var price = Number(product.dataset.price)

            if(filter.checked){

                if(selectedPrice === "0-500"){

                    if(price >= 0 && price <= 500){

                        product.style.display = "block"

                    }
                    else{

                        product.style.display = "none"

                    }

                }

                else if(selectedPrice === "501-1000"){

                    if(price >= 501 && price <= 1000){

                        product.style.display = "block"

                    }
                    else{

                        product.style.display = "none"

                    }

                }

                else if(selectedPrice === "1001-1500"){

                    if(price >= 1001 && price <= 1500){

                        product.style.display = "block"

                    }
                    else{

                        product.style.display = "none"

                    }

                }

            }
            else{

                product.style.display = "block"

            }

        })

    })

})

// Side filter
var side_filter = document.getElementById("side_filter")
var filter_icon = document.getElementById("filter_icon")
var x = document.getElementById("x-sidefilter")

filter_icon.addEventListener("click", function(){
    side_filter.style.left=0
})

x.addEventListener("click", function(){
    side_filter.style.left="-50%"
})