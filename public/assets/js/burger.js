$(function() {
    $(".change-devoured").on("click", function(event) {
      event.preventDefault();
     
      var id = $(this).data("id");
      var newDevoured = $(this).data("newdevoured");
      console.log(id);
  
      var newDevouredData = {
        devoured: newDevoured
      };
  
 
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredData
      }).then(
        function() {
          
         
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      
      event.preventDefault();
  
      var newBurger = {
        name: $("#ca").val().trim(),
        devoured: false
      };
      console.log(newBurger);
      
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new Burger");
          
          location.reload();
        }
      );
    });
  
  
  });
  