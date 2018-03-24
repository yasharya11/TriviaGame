window.onload = function () {

    var score = 0;
    var questionAnswers = [
        { question: "What is 2+2?", a1: "1", a2: "2", a3: "3", a4: "4", an: "4" },
        { question: "why did the chicken cross the road?", a1: "Pass", a2: "No one really knows", a3: "It forgot something", a4: "To go to the other side", an: "To go to the other side" },
        { question: "What is Dora?", a1: "Male", a2: "Large", a3: "Annoying", a4: "An Explorer", an: "An Explorer" },
        { question: "What is an API?", a1: "A Pointy Immigrant", a2: "All Pockets Ingulfed", a3: "Ape Plum Idiots", a4: "App Programming Interface", an: "App Programming Interface" },
        { question: "Who is President?", a1: "Obama", a2: "Ya Boi", a3: "Ken", a4: "Trump", an: "Trump" },
        { question: "What country is this?", a1: "Canada", a2: "Ice Hoarder's Wet Dream", a3: "Fake Bacon Land", a4: "America", an: "America" },
        { question: "What is '2'+'2'?", a1: "42", a2: "2+2", a3: "4", a4: "22", an: "22" }
    ];

    $("#question").html("<div class='row'><div class='col-lg-12'><div class='col-lg-12' id='questionDiv'></div><div class='col-lg-12 option' id='1'></div><div class='col-lg-12 option' id='2'></div><div class='col-lg-12 option' id='3'></div><div class='col-lg-12 option' id='4'></div></div></div>");

    var questionsDiv = $("#questionDiv");
    var option1Div = $("#1");
    var option2Div = $("#2");
    var option3Div = $("#3");
    var option4Div = $("#4");

    questionsDiv.html(questionAnswers[0].question);
    option1Div.html(questionAnswers[0].a1);
    option2Div.html(questionAnswers[0].a2);
    option3Div.html(questionAnswers[0].a3);
    option4Div.html(questionAnswers[0].a4);

    $(".option").on("click", function(event) {
        alert($(this).attr('id'));
    });

    (function () {
        var counter = 60;

        setInterval(function () {
            counter--;
            if (counter >= 0) {
                span = document.getElementById("count");
                span.innerHTML = counter;
            }
            // Display 'counter' wherever you want to display it.
            if (counter === 0) {
                alert('this is where it happens');
                clearInterval(counter);
            }

        }, 1000);

    })();

}
