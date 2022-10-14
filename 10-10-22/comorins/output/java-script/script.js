let mylist=[
    {   
        id:1,
        image:"https://tudoemtecnologia.com/wp-content/uploads/2021/04/iphone-12-capa-e1656383778989.png",
        price:"₹5,000",
        model:"New iphone model",
        address:"Ammaiyapattu, Vandavasi, Tamil Nadu",
        Date:"12-3-2022",
        Phonenumber:9099876867,
    },
    {
        id:2,
        image:"https://5.imimg.com/data5/IS/RS/GLADMIN-15231673/bajaj-pulsar-150-2012-250x250.png",
        price:"₹69,000",
        model:"second hand Bajaipulsar bike",
        address:"mani, Lucknow",
        Date:"8-9-2020",
        Phonenumber:8799876867,
    },
    {
        id:3,
        image:"https://cloudfront-us-east-1.images.arcpublishing.com/octane/2H7RAWOCTRDC5HC6CXA2SL3U5E.jpg",
        price:"₹80,900",
        model:"Honda navi bike",
        address:"ravi, nagercoil,tamilnadu",
        Date:"3-4-2021",
        Phonenumber:9089876867,
    },
    {
        id:4,
        image:"https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iPeraoMnxTC8/v1/1200x-1.jpg",
        price:"₹6,00,8900",
        model:"Ferrai car",
        address:"Ragavi, Maharashtra, India",
        Date:"19-9-2022",
        Phonenumber:8199876867,
    },
    {
        id:5,
        image:"https://www.reliancedigital.in/medias/BPL-32inch-A1000-Television-491895044-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNDY4ODd8aW1hZ2UvanBlZ3xpbWFnZXMvaDk0L2g2NC85NzgyMzAzNDI0NTQyLmpwZ3w2YjhlNTg1MzliZDAwNTUyMTBhOTYwMmZlZmMzYTIzYzE0MWZkNDM2OTBlYjAzNzg2NWMzOTNiZjgzMWFmMzAy",
        price:"₹9,000",
        model:"Saamsung 46 inch flat LCD tv",
        address:"Abdhul , Kanyakumari",
        Date:"4-5-2020",
        Phonenumber:9342876867,
    },
    {
        id:6,
        image:"https://5.imimg.com/data5/ML/PB/GLADMIN-40074243/home-furniture-500x500.jpg",
        price:"₹15,000",
        model:"second hand  sofa",
        address:"Abilash, thirunelveli",
        Date:"6-1-2002",
        Phonenumber:8929876867
    },
    {
        id:7,
        image:"https://cdn.autoportal.com/bp-v3/img/models/4a/e/FrontBlue.png",
        price:"₹46,000",
        model:"second hand Honda bike blue",
        address:"Rani, Erode",
        Date:"16-2-2012",
        Phonenumber:7896876867,
    },
    {
        id:8,
        image:"https://5.imimg.com/data5/SELLER/Default/2021/12/QT/NF/QT/137994279/realme-5-second-hand-smartphone-1000x1000.jpg",
        price:"₹10,000",
        model:"second hand andriod phone",
        address:"mani, Lucknow",
        Date:"15-6-2021",
        Phonenumber:9099876867,
    },
    {
        id:9,
        image:"https://i.pinimg.com/564x/d8/2b/67/d82b67dd51cda39608d6a685e986e2a3.jpg",
        price:"₹7,000",
        model:"Dining tabel",
        address:"latha,rajasthan",
        Date:"4-3-2022",
        Phonenumber:7099876867
    },
    {
        id:10,
        image:"https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Maruti-Suzuki-Swift-100320211204.jpg",
        price:"₹2,00,0000",
        model:"Maruthi suzuki swift",
        address:"Rishan, nagercoil",
        Date:"29-4-2015",
        Phonenumber:8099876867,
    },
    {
        id:11,
        image:"https://cdn.shopify.com/s/files/1/0261/1567/0094/articles/marble-dining-table-round-1000x480_1313x630.jpg?v=1566310757",
        price:"₹19,000",
        model:"furnitur Diningtable",
        address:"mani, Lucknow",
        Date:"8-8-2022",
        Phonenumber:8099876867,
    },
    {
        id:12,
        image:"https://www.ubuy.co.in/productimg/?image=aHR0cHM6Ly9pNS53YWxtYXJ0aW1hZ2VzLmNvbS9hc3IvMmIyOTQzZmQtNzNkNi00ZDdiLTljNTQtZTIyZGIwYzY2MGYxXzQuZTc5ZDY4ZWMzYTcxODA2NDE3MGRlNmNiZDgyZTYwMzAuanBlZw.jpg",
        price:"₹12,000",
        model:"second hand Samssungsmart tv",
        address:"mani, Lucknow",
        Date:"10-11-2019",
        Phonenumber:8976876867,
    },
]
localStorage.setItem("olx",JSON.stringify(mylist));

let list=JSON.parse(localStorage.getItem("olx"));
for(let i=0; i<list.length;i++){
    list[i].price="<a target='_blank' href='view.html?id="+list[i].id +"'>"+list[i].price+"</a>";
    document.getElementById("image" +i).src=list[i].image;
    document.getElementById("price" +i).innerHTML=list[i].price;
    document.getElementById("model" +i).innerHTML=list[i].model;
    document.getElementById("address" +i).innerHTML=list[i].address;
}

document.getElementById("logout").hidden=true;
document.getElementById("login")
  .addEventListener("click", () => {
    document.getElementById("login").hidden=true;
document.getElementById("logout").hidden=false;
}, false);




















































function sellpage() {
    window.location.href="sell.html"
}

function favpage() {
    window.location.href="fav.html"
}


function loginpage() {
    window.location.href="login.html"
}