import clsx from "clsx";

import { useAppSelector } from "@/app/lib/hooks";

export default function LetterBox({
  quizId,
  character,
  blank,
  isKey,
}: {
  quizId: number;
  character?: string;
  blank?: boolean;
  isKey?: boolean;
}) {
  const quizSolvedList = useAppSelector((state) => state.quizSolved.value);
  const solved = quizSolvedList[quizId];

  return (
    <div
      className={clsx(
        "mx-1 h-14 w-14 items-center justify-center rounded-xl border-2 border-titleForeground bg-button text-2xl text-foreground",
        { invisible: blank },
        { "text-transparent": !solved },
        { "bg-emerald-500": isKey },
      )}
      id={`letterBox${solved && "_visible"}_${quizId}`}
    >
      {character}
    </div>
  );
}
