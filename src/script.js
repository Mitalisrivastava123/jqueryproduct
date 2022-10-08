$(document).ready(function () {
    let arr = [];
    var m1;
    display(arr);
    $("#add_product").click(function () {
        var sku = $("#product_sku").val();
        // console.log(sku);
        var name = $("#product_name").val();
        // console.log(name);
        var price = $("#product_price").val();
        // console.log(price);
        var quantity = $("#product_quantity").val();

        $("#product_sku").val('');
        $("#product_name").val('');
        $("#product_price").val('');
        $("#product_quantity").val('');
        $("#update").css("display", "none");

        if (sku == '' || name == '' || price == '' || quantity == '') {
            $(".sku1").text("** all fields are required ");
            $(".sku1").css("color", "red");
            $("#two1").show();
            // $("#one1").hide();

        }
        else {
            $("#one1").show();
            $(".sku1").hide();
            $("#two1").hide();
            $(".sku1").text("");
            var obj = { sku: sku, name: name, price: price, quantity: quantity };
            arr.push(obj);
            display(arr);
        }
    });

    $("#update").click(function () {
        arr[m1].sku = $("#product_sku").val();
        arr[m1].name = $("#product_name").val();
        arr[m1].price = $("#product_price").val()
        arr[m1].quantity = $("#product_quantity").val();
        // console.log(arr[m1].sku);

        display(arr);
    });

    function display() {
        var string1 = "";
        for (let x = 0; x < arr.length; x++) {
            string1 += "<tr><td>" + arr[x].sku + "</td><td>" + arr[x].name + "</td><td> " + arr[x].price + "</td><td>" + arr[x].quantity + "</td><td><a href='#'><button class='edit' class='edit1' value='" + x + "' id=" + x + ">Edit</button></a><a href='#'><button class='delete1' class='edit1' value='" + x + "' id=" + x + ">Delete</button></a></td><td></tr>";
        }
        $("#data").html(string1);

    }
    $(document).on('click', '.edit', function () {

        m1 = $(this).val();
        console.log(m1);
        console.log(arr[m1]);
        $("#product_sku").val(arr[m1].sku);
        $("#product_name").val(arr[m1].name);
        $("#product_price").val(arr[m1].price);
        $("#product_quantity").val(arr[m1].quantity);

        $("#add_product").css("display", "none");
        $("#update").css("display", "block");
    });
    $(document).on('click', '.delete1', function () {
        m1 = $(this).val();
        arr.splice(m1, 1);
        $("#product_sku").val('');
        $("#product_name").val('');
        $("#product_price").val('');
        $("#product_quantity").val('');
        display(arr);


    })



});