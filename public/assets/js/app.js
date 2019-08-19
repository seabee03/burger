$(document).ready(function() {
    function checkoutDisplay() {
        if ($(".ordered .row").html().trim() === "") {
            var emptyCart = $("<div>").addClass("empty-cart");
            var cartIcon = $("<i>").addClass("fas fa-shopping-cart");
            var messageTitle = $("<h6>").addClass("mb-0 pb-1").text("Your cart is empty!");
            var message = $("<p>").text("You haven't added anything to your cart yet!");
            $(".checkout").remove();
            emptyCart.append(cartIcon).append(messageTitle).append(message);
            $("#collapseOne .ordered").append(emptyCart)
        } else {
            var button = $("<button>").addClass("round-btn checkout mt-3").text("Checkout");
            $(".empty-cart").remove();
            $("#collapseOne .ordered").append(button);
        }
    }
    checkoutDisplay();

    $(".burger-form").on("submit", function(event) {
        event.preventDefault():

        var price = $("#price").val().trim();
        var priceString = price.toString();
        var decimalIndex = priceString.indexOf(".");
        
        if (decimalIndex !== -1) {
            var cents = priceString.substring(decimalIndex + 1, decimalIndex + 4);

            if (cents.length !== 2) {
                price = price + "0";
            } else {
                price =$("#price").val().trim():
            }
        }

        var newMenuItem = {
            name: $("#burger").val().trim(),
            description: $("#description").val().trim(),
            price: price
        }

        $.ajax("/api/burger_menu", {
            type: "POST",
            data: newMenuItem
        }).then(function() {
            location.reload():
        })
    })

    $(".checkout").on("click", function() {
        var burgerArr = [];
        $(".burger-checkout").each(function() {
            burgerArr.push({
                id: $(this).data("id")
            });
        })

        var counter = 0;
        $.each(burgerArr, function (id, arr) {
            $.ajax("/api/burgers/" + id, {
                type: "PUT",
                data: arr
            }).then(function() {
                counter++;

                if (counter === burgerArr.length) {
                    location.reload();
                }
            })
        })
    })
})