"use client";

import { quizNumToShowSolveAll, quizzes, secret } from "../lib/data";
import { solveAll } from "../lib/features/quizSolved/quizSolvedSlice";
import { oswald } from "../lib/fonts";
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import { playConfetti } from "../lib/playConfetti";
import QuizSelectBox from "../ui/quiz-list/quizSelectBox";
import Link from "next/link";

export default function Page() {
  const dispatch = useAppDispatch();
  const quizSolvedList = useAppSelector((state) => state.quizSolved.value);

  const answeredQuizNum = quizSolvedList.filter((e) => e === true).length;
  const solvedAll = answeredQuizNum === quizzes.length;

  if (solvedAll) {
    playConfetti();
  }

  function showAllAnswers() {
    dispatch(solveAll());
    playConfetti();
  }

  return (
    <div className="relative flex h-screen w-screen flex-row items-center justify-center">
      <div className="m-16 flex h-auto w-auto flex-col items-center justify-center">
        <span
          className={`m-2 p-2 ${oswald.className} text-5xl text-titleForeground transition-all duration-300 ease-linear`}
        >
          {solvedAll
            ? `Chúc mừng, mật mã là \"${secret}\"`
            : "Mời bạn chọn câu hỏi"}
        </span>
        {answeredQuizNum >= quizNumToShowSolveAll && (
          <button
            type="button"
            className="h-full w-full text-3xl"
            onClick={showAllAnswers}
          >
            Giải mật mã
          </button>
        )}
        <button
          type="button"
          className="h-full w-full text-3xl"
        >
          <Link
            href="/wheel"
            className="h-full w-full"
          >
            Quay số
          </Link>
        </button>
      </div>
      <div className="relative flex flex-col items-center justify-center">
        {quizzes.map((quiz, id) => (
          <QuizSelectBox
            id={id}
            key={id}
          ></QuizSelectBox>
        ))}
      </div>
    </div>
  );
}
