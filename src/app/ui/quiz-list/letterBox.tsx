import clsx from "clsx";
import { forwardRef } from "react";

import { useAppSelector } from "@/app/lib/hooks";

interface Props {
  quizId: number;
  character?: string;
  blank?: boolean;
  isKey?: boolean;
}

export type Ref = HTMLDivElement;

const LetterBox = forwardRef<Ref, Props>(function LetterBox(props, ref) {
  const { quizId, character, blank, isKey } = props;
  const quizSolvedList = useAppSelector((state) => state.quizSolved.value);
  const quizLockedList = useAppSelector((state) => state.quizLock.value);
  const solved = quizSolvedList[quizId];
  const locked = quizLockedList[quizId];

  return (
    <div
      className={clsx(
        "mx-1 flex h-14 w-14 items-center justify-center rounded-xl border-2 border-titleForeground bg-button text-3xl text-foreground",
        { invisible: blank || (!blank && locked) },
        { "text-transparent": !solved },
        { "bg-emerald-500": isKey },
      )}
      ref={ref}
    >
      {character}
    </div>
  );
});

export default LetterBox;
