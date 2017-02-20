$(document).ready(function() {

    $("#blanks form").submit(function(event) {
        var name = document.getElementById("name").value;
        var game = document.getElementById("game").value;
        var animal = document.getElementById("animal").value;
        var sport = document.getElementById("sport").value;
        var book = document.getElementById("book").value;


        var showMe = [];
        showMe.push(game, name, animal);

         $('#showAll').append("<li>"+game+"</li>", "<li>"+name+"</li>","<li>"+animal+"</li>");

        $("#favorite-things").show();

        event.preventDefault()
    });
});
