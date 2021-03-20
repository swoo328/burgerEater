$(function () {
    //devour function 
    $(".devoured").on("click", function (event) {
        var id = $(this).data("id");
        var newDevour = $(this).data("newdevour");

        var newDevourState = {
            devour:newDevour
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function () {
                console.log("devoured");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
    //adding burgers to the list
    $(".create-form").on("submit", function (event) {
        event.preventDefault();

      var newBurger = {
          burger_name: $("#ca").val().trim(),
        //   devoured: $("[name=devoured]:checked").val().trim()
      };

      // Send the POST request.
      $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
      }).then(
          function() {
              console.log("created new burger");
              // Reload the page to get the updated list
              location.reload();
          }
      );
    });
//delete function 
    $(".delete").on("click", function (event) {
        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("deleted burger", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});


