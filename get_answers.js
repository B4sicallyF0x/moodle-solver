
(function () {
  function parseCorrectAnswers() {
    var results = [];
    $(".que").each(function () {
      var text = $(".qtext", this).text().replace(/(\s+)/gm, "");
      var answer = $(".rightanswer", this).text();
      if (answer.startsWith("A resposta correcta é: ")) {
        answer = answer.replace("A resposta correcta é: ", "");
        answer = answer.replace(/(\s+)/gm, "");
      } else {
        if ($("span", $(".rightanswer", this)).length > 1) {
          answer = [];
          $("span", $(".rightanswer", this)).each(function () {
            answer.push($(this).text().replace(/(\s+)/gm, ""));
          });
        } else {
          answer = answer.replace("As respostas correctas son: ", "");
          answer = answer.split(", ");
          for (var x = 0; x < answer.length; x++) {
            answer[x] = answer[x].replace(/(\s+)/gm, "");
          }
        }
      }
      results.push({ question: text, answer: answer });
    });
    localStorage.setItem("answers", JSON.stringify(results));
    alert("Parsing complete!");
  }
  parseCorrectAnswers();
})();
