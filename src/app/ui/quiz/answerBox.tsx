import clsx from "clsx";
import { useState } from "react";

import { quizzes } from "@/app/lib/data";
import { solve } from "@/app/lib/features/quizSolved/quizSolvedSlice";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";
import {
  faXmarkSquare,
  faCheckSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AnswerBox({
  id,
  answerIndex,
}: {
  id: number;
  answerIndex: number;
}) {
  const { answer, correct } = quizzes[id].answers[answerIndex];

  const [selected, setSelected] = useState(false);

  const dispatch = useAppDispatch();
  const quizSolvedList = useAppSelector((state) => state.quizLock.value);
  const solved = quizSolvedList[id];

  function checkAnswer() {
    setSelected(true);

    if (correct) {
      dispatch(solve(id));
    }
  }

  // `isSolved` has higher priority than `selected`
  return (
    <div
      onClick={checkAnswer}
      className={clsx([
        "m-2 flex h-32 w-4/5 cursor-pointer items-center rounded-lg border-2 pl-8 text-4xl shadow-lg transition-all duration-100 ease-linear",
        { "border-titleForegroundColor bg-button": !selected && !solved },
        {
          "scale-105 border-emerald-600 bg-emerald-500 text-white":
            correct && (solved || selected),
        },
        {
          "scale-95 border-red-700 bg-red-500 text-white":
            !correct && (solved || selected),
        },
      ])}
    >
      {answer}
      <FontAwesomeIcon
        icon={correct ? faCheckSquare : faXmarkSquare}
        className={clsx(selected || solved ? "scale-100" : "scale-0")}
      ></FontAwesomeIcon>
    </div>
  );
}
