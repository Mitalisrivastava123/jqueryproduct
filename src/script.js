$(document).ready(function () {
    $("#add_product").click(function () {

        var sku = $("#product_sku").val();
        // console.log(sku);
        var name = $("#product_name").val();
        // console.log(name);
        var price = $("#product_price").val();
        // console.log(price);
        var quantity = $("#product_quantity").val();
        // console.log(quantity);
        // var obj = {sku : "sku", name:"name", price : "price",quantity : "quantity"};
        // console.log(obj);
        // array1.push(sku,name,price,quantity);
        // console.log(array1);

        // var str = "<table><tr><th>SKU</th><th>Name</th><th>Price</th><th>Quantity</th></tr>";

        // for (let  y1 of array1) {
        //     // alert("hello");
        //     str += "<tr><td>" + y1['sku'] + "</td><td>" + y1['name'] + "</td><td>" + y1['price'] + "</td></tr>";
        // }

        // str += "</table>";
        // document.getElementById("table1").innerHTML = str;
        // });
        var supercarObject = { "sku": "sku", "name": "name", "price": "price", "quantity": "price" };
        var fruitsArray = [];
        $.each(supercarObject, function (key, value) {
            $("#result").append(key + ": " + value + "");
        });

    });



});