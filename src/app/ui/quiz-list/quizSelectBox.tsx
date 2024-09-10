"use client";

import LetterBox from "./letterBox";
import { animate, AnimatePresence, motion, stagger } from "framer-motion";
import { useRouter } from "next/navigation";
import { ReactNode, useMemo } from "react";
import React from "react";

import { grandTotalCharLength, keyColumnIndex, quizzes } from "@/app/lib/data";
import { unlock } from "@/app/lib/features/quizLock/quizLockSlice";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function QuizSelectBox({ id }: { id: number }) {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const quizSolvedList = useAppSelector((state) => state.quizSolved.value);
  const quizLockList = useAppSelector((state) => state.quizLock.value);

  const locked = quizLockList[id];
  const solvedAll = quizSolvedList.every((e) => e);

  const { keyword, keyIndex } = quizzes[id];

  const blankLeftLb = keyColumnIndex - keyIndex;
  const blankRightLb = grandTotalCharLength - (blankLeftLb + keyword.length);

  function pushQuiz() {
    router.push(`/quiz/${id}`);
  }

  const letterBoxes: ReactNode[] = [];
  const letterBoxesRefs = useMemo(
    () =>
      Array(grandTotalCharLength)
        .fill(0)
        .map(() => React.createRef<HTMLDivElement>()),
    [],
  );
  let j = 0;

  for (let i = 0; i < blankLeftLb; i++, j++) {
    letterBoxes.push(
      <LetterBox
        key={j}
        quizId={id}
        blank
      ></LetterBox>,
    );
  }

  for (let i = 0; i < keyword.length; i++, j++) {
    letterBoxes.push(
      <LetterBox
        key={j}
        quizId={id}
        blank={locked}
        isKey={i == keyIndex}
        character={keyword[i]}
        ref={letterBoxesRefs[i]}
      ></LetterBox>,
    );
  }

  for (let i = 0; i < blankRightLb; i++, j++) {
    letterBoxes.push(
      <LetterBox
        key={j}
        quizId={id}
        blank
      ></LetterBox>,
    );
  }

  if (solvedAll || !locked) {
    const elements = letterBoxesRefs
      .filter((ref) => ref.current !== null)
      .map((ref) => ref.current!);
    if (elements.length) {
      animate(
        elements,
        { y: [-24, 0], opacity: [0, 1] },
        { delay: stagger(0.05, { startDelay: 0.1 }) },
      );
    }
  }

  return (
    <div className="my-1 flex h-20 w-auto flex-row items-center rounded-xl bg-subBackground px-3 shadow-md brightness-110">
      <div className="relative h-14 w-14">
        <button
          type="button"
          className="m-0 flex h-full w-full cursor-pointer items-center justify-center rounded-xl p-0 text-3xl font-medium text-foreground hover:cursor-pointer"
          onClick={pushQuiz}
        >
          {id}
        </button>
        <AnimatePresence>
          {locked && (
            <div className="absolute left-0 top-0 h-full w-full">
              <motion.div
                initial={{
                  opacity: 0,
                  x: 16,
                }}
                animate={{
                  opacity: 0.8,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -16,
                  transition: { duration: 0.3 },
                }}
                onClick={() => dispatch(unlock(id))}
                className="z-10 flex h-full w-full items-center justify-center rounded-xl bg-gray-400 brightness-75 hover:cursor-pointer"
              >
                <FontAwesomeIcon
                  icon={faLock}
                  size="2x"
                ></FontAwesomeIcon>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
      {letterBoxes}
    </div>
  );
}
