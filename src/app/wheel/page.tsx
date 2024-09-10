import { oswald } from "../lib/fonts";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center p-16">
      <span
        className={`m-4 p-4 text-6xl text-titleForeground ${oswald.className}`}
      >
        Tích cực quay số, phần thưởng sẽ tới :)
      </span>
      <iframe
        src="https://wheelofnames.com/6zb-mw9"
        height="80%"
        width="90%"
      ></iframe>
      <Link href="/quiz-list">
        <button type="button">Chọn câu hỏi</button>
      </Link>
    </div>
  );
}
