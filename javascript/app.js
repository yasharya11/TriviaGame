window.onload = function () {

    var score = 0;
    var counter = 0;
    var questionAnswers = [
        { question: "What is 2+2?", a1: "1", a2: "2", a3: "3", a4: "4", an: "4" },
        { question: "why did the chicken cross the road?", a1: "Pass", a2: "To go to the other side", a3: "It forgot something", a4: "No one really knows", an: "2" },
        { question: "What is Dora?", a1: "Male", a2: "Large", a3: "An Explorer", a4: "Annoying", an: "3" },
        { question: "What is an API?", a1: "A Pointy Immigrant", a2: "All Pockets Ingulfed", a3: "Ape Plum Idiots", a4: "Application Programming Interface", an: "4" },
        { question: "Who is President?", a1: "Trump", a2: "Ya Boi", a3: "Ken", a4: "Obama", an: "1" },
        { question: "What country is this?", a1: "Canada", a2: "Ice Hoarder's Wet Dream", a3: "Fake Bacon Land", a4: "America", an: "4" },
        { question: "What is '2'+'2'?", a1: "22", a2: "2+2", a3: "4", a4: "42", an: "1" }
    ];
    var bestScrore = questionAnswers.length;

    $("#question").html("<div class='row'><div class='col-lg-12'><div class='col-lg-12' id='questionDiv'></div><div class='col-lg-12 option' id='1'></div><div class='col-lg-12 option' id='2'></div><div class='col-lg-12 option' id='3'></div><div class='col-lg-12 option' id='4'></div><div class='col-lg-12 answer'></div></div></div></div>");


    var questionsDiv = $("#questionDiv");
    var option1Div = $("#1");
    var option2Div = $("#2");
    var option3Div = $("#3");
    var option4Div = $("#4");
    var answerDiv = $(".answer");


    questionsDiv.html("<span>Question: </span><span>" + questionAnswers[counter].question) + "</span>";
    option1Div.html("<span>1: </span><span>" + questionAnswers[counter].a1) + "</span>";
    option2Div.html("<span>2: </span><span>" + questionAnswers[counter].a2) + "</span>";
    option3Div.html("<span>3: </span><span>" + questionAnswers[counter].a3) + "</span>";
    option4Div.html("<span>4: </span><span>" + questionAnswers[counter].a4) + "</span>";
    answerDiv.html("<span>Answer: </span><span>" + questionAnswers[counter].an) + "</span>";


    $(".option").on("click", function (event) {
        var idValue = $(this).attr('id');
        var realAnswer = questionAnswers[counter].an;

        console.log(idValue);
        console.log(realAnswer);

        counter++;
        if (idValue == realAnswer) {
            score++;
            alert("you win");
        }

        questionsDiv.html("<span>Question: </span><span>" + questionAnswers[counter].question) + "</span>";
        option1Div.html("<span>1: </span><span>" + questionAnswers[counter].a1) + "</span>";
        option2Div.html("<span>2: </span><span>" + questionAnswers[counter].a2) + "</span>";
        option3Div.html("<span>3: </span><span>" + questionAnswers[counter].a3) + "</span>";
        option4Div.html("<span>4: </span><span>" + questionAnswers[counter].a4) + "</span>";
        answerDiv.html("<span>Answer: </span><span>" + questionAnswers[counter].an) + "</span>";
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
                
                clearInterval(counter);
            }
        }, 1000);
    })();

}
