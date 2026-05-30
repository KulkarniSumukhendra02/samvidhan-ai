    "use client";

    import { useState } from "react";

    export default function QuizPage() {
    const questions = [
        {
        question: "Which Article guarantees Equality before Law?",
        options: ["Article 14", "Article 19", "Article 21", "Article 32"],
        answer: "Article 14",
        },
        {
        question: "Which Article protects Freedom of Speech?",
        options: ["Article 14", "Article 19", "Article 25", "Article 51A"],
        answer: "Article 19",
        },
        {
        question: "Which Article guarantees Protection of Life and Personal Liberty?",
        options: ["Article 14", "Article 21", "Article 25", "Article 32"],
        answer: "Article 21",
        },
        {
        question: "Which Article provides Constitutional Remedies?",
        options: ["Article 19", "Article 21", "Article 32", "Article 44"],
        answer: "Article 32",
        },
        {
        question: "How many Fundamental Rights are recognized in India?",
        options: ["4", "5", "6", "7"],
        answer: "6",
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [quizFinished, setQuizFinished] = useState(false);

    const handleAnswer = (selectedOption) => {
        if (selectedOption === questions[currentQuestion].answer) {
        setScore(score + 1);
        }

        if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        } else {
        setQuizFinished(true);
        }
    };

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setQuizFinished(false);
    };

    return (
        <main className="min-h-screen bg-[#E8DFC9] py-16 px-6">

        <div className="max-w-4xl mx-auto">

            {/* Header */}
            <div className="text-center mb-12">

            <h1 className="text-5xl font-bold text-[#0F172A]">
                Constitutional Quiz Hub
            </h1>

            <p className="mt-4 text-lg text-[#6B7280]">
                Test your knowledge of Fundamental Rights,
                Constitutional Articles, and Civic Awareness.
            </p>

            </div>

            {/* Quiz Card */}
            <div className="bg-[#F8F5EE] rounded-3xl shadow-lg border border-[#D6CFC2] p-10">

            {!quizFinished ? (
                <>
                <div className="mb-8">

                    <p className="text-sm text-[#7F1D1D] font-semibold">
                    Question {currentQuestion + 1} of {questions.length}
                    </p>

                    <h2 className="mt-4 text-3xl font-bold text-[#0F172A]">
                    {questions[currentQuestion].question}
                    </h2>

                </div>

               <div className="grid gap-4">

  {questions[currentQuestion].options.map((option, index) => (
    <button
      key={index}
      onClick={() => handleAnswer(option)}
      className="w-full text-left p-4 rounded-2xl border border-[#D6CFC2] bg-white text-[#0F172A] font-semibold hover:bg-[#EFE7DA] hover:border-[#7F1D1D] transition duration-300"
    >
      {option}
    </button>
  ))}

</div>
                </>
            ) : (
                <div className="text-center">

                <h2 className="text-4xl font-bold text-[#0F172A]">
                    Quiz Completed 🎉
                </h2>

                <p className="mt-6 text-2xl font-semibold text-[#7F1D1D]">
                    Your Score: {score} / {questions.length}
                </p>

                <p className="mt-4 text-lg text-[#6B7280]">
                    {score === questions.length
                    ? "Excellent! You have strong constitutional knowledge."
                    : score >= 3
                    ? "Good job! Keep learning your rights."
                    : "Keep exploring Samvidhan AI to improve your awareness."}
                </p>

                <button
                    onClick={restartQuiz}
                    className="mt-8 px-8 py-4 bg-[#7F1D1D] text-white rounded-2xl font-semibold hover:bg-[#991B1B] transition"
                >
                    Retake Quiz
                </button>

                </div>
            )}

            </div>

        </div>

        </main>
    );
    }