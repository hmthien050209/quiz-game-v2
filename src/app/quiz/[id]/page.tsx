"use client";

import Link from "next/link";

import { quizzes } from "@/app/lib/data";
import { solve } from "@/app/lib/features/quizSolved/quizSolvedSlice";
import { oswald } from "@/app/lib/fonts";
import { useAppDispatch } from "@/app/lib/hooks";
import AnswerBox from "@/app/ui/quiz/answerBox";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Page({
  params,
}: {
  params: {
    id: number;
  };
}) {
  const { id } = params;
  const dispatch = useAppDispatch();

  return (
    <div className="relative flex h-screen w-screen flex-col items-center justify-center p-16">
      <div
        className={`my-4 flex items-center justify-center py-4 text-center ${oswald.className} text-titleForegroundColor rounded-md bg-subBackground p-4 text-5xl leading-tight`}
      >
        {quizzes[id].question}
      </div>
      {quizzes[id].answers.map((_, index) => (
        <AnswerBox
          answerIndex={index}
          id={id}
          key={index}
        ></AnswerBox>
      ))}
      <div className="flex h-20 flex-row">
        <Link href="/quiz-list">
          <button
            type="button"
            className="h-20 w-20"
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              size="lg"
            ></FontAwesomeIcon>
          </button>
        </Link>
        <button
          type="button"
          onClick={() => dispatch(solve(id))}
          className="h-full w-full text-3xl"
        >
          Hiện đáp án đúng
        </button>
      </div>
    </div>
  );
}
