//store the products array in localstorage as "products"
function PumaData(type,desc,price,image)
{
    this.type=type;
    this.desc=desc;
    this.price=price;
    this.image=image;
}
function productsData()
{
    event.preventDefault();
    let form=document.getElementById("products")
    let type=form.type.value;
    let desc=form.desc.value;
    let price=form.price.value;
    let image=form.image.value;

    let p1= new PumaData(type,desc,price,image)

    console.log(p1)
     
    let data=JSON.parse(localStorage.getItem("products")) || [];
    data.push(p1);
    localStorage.setItem("products",JSON.stringify(data))
    window.location.reload();
}

document.getElementById("show_products").addEventListener("click",showData)

function showData()
{
    window.location.href="inventory.html"
}