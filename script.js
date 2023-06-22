$(document).ready(function() {
    const questions = [
      {
        question: "질문 1: 질문 내용",
        options: ["그렇다", "아니다"],
      },
      {
        question: "질문 2: 질문 내용",
        options: ["그렇다", "아니다"],
      },
      {
        question: "질문 3: 질문 내용",
        options: ["그렇다", "아니다"],
      },
      {
        question: "질문 4: 질문 내용",
        options: ["그렇다", "아니다"],
      },
      {
        question: "질문 5: 질문 내용",
        options: ["그렇다", "아니다"],
      }
    ];
    
    let currentQuestionIndex = 0;
    let userAnswers = [];
    
    const questionContainer = $("#question-container");
    const questionText = $("#question-text");
    const optionsContainer = $("#options-container");
    const nextButton = $("#next-button");
    const restartButton = $("#restart-button");
    const resultContainer = $("#result-container");
    const result = $("#result");
    const jobRecommendation = $("#job-recommendation");
    
    function showQuestion() {
      const currentQuestion = questions[currentQuestionIndex];
      questionText.text(currentQuestion.question);
      optionsContainer.empty();
      
      for (let i = 0; i < currentQuestion.options.length; i++) {
        const option = currentQuestion.options[i];
        const button = $("<button></button>").text(option).addClass("btn btn-primary mr-2");
        button.on("click", function() {
            userAnswers.push(i); // Save the selected answer index
            nextQuestion();
          });
    
          optionsContainer.append(button);
        }
      }
    
      function nextQuestion() {
        currentQuestionIndex++;
    
        if (currentQuestionIndex < questions.length) {
          showQuestion();
        } else {
          showResult();
        }
      }
    
      function showResult() {
        questionContainer.hide();
        resultContainer.show();
    
        const resultType = calculateResult();
        const resultText = getResultText(resultType);
        const recommendedJob = getRecommendedJob(resultType);
    
        result.text(resultText);
        jobRecommendation.text(recommendedJob);
    
        restartButton.removeClass("d-none");
      }
    
      function calculateResult() {
        // Perform the calculation based on userAnswers array
        // Replace this with your own logic
        return "MBTI 유형";
      }
    
      function getResultText(resultType) {
        // Replace this with your own result text mapping logic
        return "결과";
      }
    
      function getRecommendedJob(resultType) {
        // Replace this with your own job recommendation logic
        return "직업 추천";
      }
    
      function restartTest() {
        currentQuestionIndex = 0;
        userAnswers = [];
    
        resultContainer.hide();
        questionContainer.show();
    
        restartButton.addClass("d-none");
    
        showQuestion();
      }
    
      nextButton.on("click", nextQuestion);
      restartButton.on("click", restartTest);
    
      // Start the test
      showQuestion();
    });
    