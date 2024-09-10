import LetterBox from "./letterBox";
import { AnimatePresence, motion } from "framer-motion";
import { animate, stagger } from "motion";
import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";

import { grandTotalCharLength, quizzes } from "@/app/lib/data";
import { unlock } from "@/app/lib/features/quizLock/quizLockSlice";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function QuizSelectBox({
  id,
  keyColumnIndex,
}: {
  id: number;
  keyColumnIndex: number;
}) {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const quizSolvedList = useAppSelector((state) => state.quizSolved.value);
  const quizLockList = useAppSelector((state) => state.quizLock.value);

  const solved = quizSolvedList[id];
  const locked = quizLockList[id];
  const solvedAll = quizSolvedList.every((e) => e);

  const { keyword, keyIndex } = quizzes[id];

  const blankLeftLb = keyColumnIndex - keyIndex;
  const blankRightLb = grandTotalCharLength - (blankLeftLb + keyword.length);

  function pushQuiz() {
    router.push(`/quiz/${id}`);
  }

  const letterBoxes: ReactNode[] = [];

  for (let i = 0; i < blankLeftLb; i++) {
    letterBoxes.push(
      <LetterBox
        quizId={id}
        blank
      ></LetterBox>,
    );
  }

  for (let i = 0; i < keyword.length; i++) {
    letterBoxes.push(
      <LetterBox
        quizId={id}
        blank={locked}
        isKey={i == keyIndex}
      ></LetterBox>,
    );
  }

  for (let i = 0; i < blankRightLb; i++) {
    letterBoxes.push(
      <LetterBox
        quizId={id}
        blank
      ></LetterBox>,
    );
  }

  useEffect(() => {
    if (!(locked && solvedAll) || solvedAll) {
      animate(
        `#letterBox_visible_${id}`,
        { y: [-24, 0], opacity: [0, 1] },
        { delay: stagger(0.05, { start: 0.1 }) },
      );
    }
  }, [locked, solved, solvedAll, id]);

  return (
    <div className="my-1 flex h-20 w-auto flex-row items-center rounded-xl bg-subBackground px-3 shadow-md brightness-110">
      <div className="relative h-14 w-14">
        <button
          type="button"
          className="m-0 flex h-full w-full cursor-pointer items-center justify-center rounded-xl p-0 text-3xl font-medium text-foreground"
          onClick={pushQuiz}
        >
          {id}
        </button>
        <div className="absolute left-0 top-0 h-full w-full">
          <AnimatePresence>
            {locked && (
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
              >
                <div
                  onClick={() => dispatch(unlock(id))}
                  className="flex h-full w-full items-center justify-center rounded-xl bg-gray-400 brightness-75"
                >
                  <FontAwesomeIcon
                    icon={faLock}
                    size="2x"
                  ></FontAwesomeIcon>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {letterBoxes}
      </div>
    </div>
  );
}
