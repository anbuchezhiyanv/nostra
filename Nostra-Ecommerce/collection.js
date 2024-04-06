var productContainer = document.getElementById("product")
var search = document.getElementById("search")
var productList=productContainer.querySelectorAll("div")

search.addEventListener("keyup",function(event){
    var enteredValue = event.target.value.toUpperCase()
for(count=0;count<productList.length;count=count+1){
    var productName =productList[count].querySelector("p").textContent

    if(productName.toUpperCase().indexOf(enteredValue)<0){
        productList[count].style.display="none"
    }
    else{
        productList[count].style.display="block"
    }
}
})