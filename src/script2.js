$(document).ready(function () {
    var array1 = [];
    $("#add_product").click(function () {

        var sku = $("#product_sku").val();
        console.log(sku);
        array1.push($("#product_sku").val());
        var name = $("#product_name").val();
        console.log(name);
        array1.push($("#product_name").val());
        var price = $("#product_price").val();
        console.log(price);
        array1.push($("#product_price").val());
        var quantity = $("#product_quantity").val();
        console.log(quantity);
        array1.push($("#product_quantity").val());
        $('#result').html(array1.toString());

        $(".color_cell").each(function() {
            code = $(this).attr('id');
            ids.push(code);
            $div.append(code + "<br />");
        });

    });
});