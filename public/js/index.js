// TODO fix all of the javascript recovery

// Get references to page elements
// var modalSubmit = $("#modal-submit");
// var $exampleDescription = $("#example-description");
// var $submitBtn = $("#submit");
// var $exampleList = $("#example-list");

$(document).ready(function() {
  // The API object contains methods for each kind of request we'll make
  var API = {
    saveArtwork: function(artwork) {
      return $.ajax({
        headers: {
          "Content-Type": "application/json"
        },
        type: "POST",
        url: "api/artwork",
        data: JSON.stringify(artwork)
      });
    },
    saveCommissionRequest: function(commissionrequest) {
      return $.ajax({
        headers: {
          "Content-Type": "application/json"
        },
        type: "POST",
        url: "api/commission%20request",
        data: JSON.stringify(commissionrequest)
      });
    },
    getArtwork: function() {
      return $.ajax({
        url: "api/artwork",
        type: "GET"
      });
    },
    getCommissionRequest: function() {
      return $.ajax({
        url: "api/commission%20request",
        type: "GET"
      });
    }
    // Update functionality can be added as needed
    // Removed delete can be added later
    // deleteExample: function(id) {
    //   return $.ajax({
    //     url: "api/examples/" + id,
    //     type: "DELETE"
    //   });
    // }
  };

  $("#modal-submit").click(function() {
    var name = $("#icon_prefix").val();
    var phone = $("#icon_telephone").val();
    var email = $("#icon_email").val();
    var description = $("#textarea1").val();
    var commissionrequest = {
      name: name,
      requestDetails: description,
      referenceImgURL: "www.www.www",
      phone: phone,
      email: email,
      medium: "canvas",
      artist: "Joe"
    };
    API.saveCommissionRequest(commissionrequest);
  });

  // Nothing has been changed below this line
  // ====================================================================
  // refreshExamples gets new examples from the db and repopulates the list
  // var refreshExamples = function() {
  //   API.getExamples().then(function(data) {
  //     var $examples = data.map(function(example) {
  //       var $a = $("<a>")
  //         .text(example.text)
  //         .attr("href", "/example/" + example.id);

  //       var $li = $("<li>")
  //         .attr({
  //           class: "list-group-item",
  //           "data-id": example.id
  //         })
  //         .append($a);

  //       var $button = $("<button>")
  //         .addClass("btn btn-danger float-right delete")
  //         .text("ｘ");

  //       $li.append($button);

  //       return $li;
  //     });

  //     $exampleList.empty();
  //     $exampleList.append($examples);
  //   });
  // };

  // // handleFormSubmit is called whenever we submit a new example
  // // Save the new example to the db and refresh the list
  // var handleFormSubmit = function(event) {
  //   event.preventDefault();

  //   var example = {
  //     text: $exampleText.val().trim(),
  //     description: $exampleDescription.val().trim()
  //   };

  //   if (!(example.text && example.description)) {
  //     alert("You must enter an example text and description!");
  //     return;
  //   }

  //   API.saveExample(example).then(function() {
  //     refreshExamples();
  //   });

  //   $exampleText.val("");
  //   $exampleDescription.val("");
  // };

  // // handleDeleteBtnClick is called when an example's delete button is clicked
  // // Remove the example from the db and refresh the list
  // var handleDeleteBtnClick = function() {
  //   var idToDelete = $(this)
  //     .parent()
  //     .attr("data-id");

  //   API.deleteExample(idToDelete).then(function() {
  //     refreshExamples();
  //   });
  // };

  // // Add event listeners to the submit and delete buttons
  // $submitBtn.on("click", handleFormSubmit);
  // $exampleList.on("click", ".delete", handleDeleteBtnClick);
});
