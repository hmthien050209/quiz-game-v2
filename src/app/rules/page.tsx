import { rules } from "../lib/data";
import { oswald } from "../lib/fonts";
import Link from "next/link";

import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Page() {
  return (
    <div
      className={`relative h-screen w-screen bg-[url("/images/background.png")] p-32`}
    >
      <h1
        className={`${oswald.className} m-2 w-fit rounded-md bg-subBackground p-4 text-7xl font-medium`}
      >
        Luật chơi
      </h1>
      <ul className="list-disk pl-8 pt-8 text-4xl leading-relaxed">
        {rules.map((rule) => (
          <li key={rule}>{rule}</li>
        ))}
      </ul>
      <Link href="/wheel">
        <button
          type="button"
          className="absolute bottom-20 left-20 h-auto w-auto text-3xl"
        >
          Đã rõ luật chơi
          <FontAwesomeIcon
            icon={faCheckSquare}
            size="lg"
            className="ml-2"
          ></FontAwesomeIcon>
        </button>
      </Link>
    </div>
  );
}
