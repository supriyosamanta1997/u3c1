let products= document.getElementById("all_products");
let PumaData=JSON.parse(localStorage.getItem("products")) || []

displayData(PumaData)

function displayData(Data)
{
    Data.forEach(function(elem,index) {
         let card=document.createElement("div")
         card.setAttribute("id","card");
       
         console.log(elem)
          let image= document.createElement("img");
          image.src=elem.image
        //   image.style.height="70%"
          image.style.width="60%";
          image.style.margin="auto";


          let type=document.createElement("p");
          type.innerText=elem.type;
          type.style.marginTop="-5px"
           
          let category=document.createElement("p");
          category.innerText=elem.desc;
          category.style.marginTop="-10px"

          let price=document.createElement("p");
            price.innerText=elem.price;
            price.style.marginTop="-10px";

            let remove=document.createElement("button");
            remove.innerText="Remove Product";
            remove.style.marginTop="-20px";
            
            remove.addEventListener("click", function () {
          removeItem(elem, index);
        });

        
          card.append(image,type,category,price,remove)
         products.append(card)
    });
}

function removeItem(elem,index)
{
     PumaData.splice(index,1)
     localStorage.setItem("products", JSON.stringify(PumaData));
     window.location.reload();
    //  let updatedData = JSON.parse(localStorage.getItem("products"));
    // displayData(updatedData);

}

document.getElementById("add_more_product").addEventListener("click",addmoreproduct);

function addmoreproduct()
{
    window.location.href="index.html"
}