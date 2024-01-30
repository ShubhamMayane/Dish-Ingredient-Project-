import express from"express";
import bodyParser from "body-parser";
import ejs from "ejs";



const app=express();
const port=3000;

app.use(express.static("public"));


app.use(bodyParser.urlencoded({extended:true}));


//data from api as a response(which is in json format)

const jsonData='[{"id":"0001","name":"Chicken Taco","price":2.33,"ingredients":["chicken","Tomato Salsa","Lettuce","Cheese","Sour Cream"]},{"id":"0002","name":"Omlette","price":2.33,"ingredients":["2 eggs","Onion","chilly","salt","oil"]},{"id":"0003","name":"Maggy","price":2.12,"ingredients":["2 cup water","maggy pack","salt","maggy masala"]}]';

//now to convert above json type data into js object

var myData=JSON.parse(jsonData);

//console.log(myData);


var data;

//to live server application on port:3000

app.listen(port,function(){

    console.log("Server application is live on port 3000");
});

//request handlers function call statement

app.get("/",function(req,res)
{
    res.render("index.ejs",{item:data});

})


app.post("/ingredients",function(req,res){

    let inputItem=req.body.choice;

    console.log(inputItem);

    switch(inputItem)
    {
        case "Chicken Taco":
            data=myData[0];
            break;
        case "Omlette":
            data=myData[1];
            break;

        case "Maggy":
            data=myData[2];
            break;

        default:
            console.log("Invalid Item");

    }   

    res.redirect("/");

});
