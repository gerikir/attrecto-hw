import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useState } from "react";
import LayoutComponent from "../Layout/LayoutComponent";

export default function StartComponent() {
    const router = useRouter();
    const words = useSelector((state: RootState) => state.words.words);
    const [difficulty, setDifficulty] = useState<"easy" | "medium" | "hard">("easy");

    const categorizeWords = () => {
        const easy = words.filter((word) => word.length >= 6 && word.length <= 8);
        const medium = words.filter((word) => word.length > 8 && word.length <= 11);
        const hard = words.filter((word) => word.length > 11 && word.length <= 14);
        return { easy, medium, hard };
    };

    const categories = categorizeWords();

    const handlePlayClick = () => {
        const selectedWords = categories[difficulty];

        const randomWord = selectedWords[Math.floor(Math.random() * selectedWords.length)];
        console.log("randomWord, ", randomWord);
        localStorage.setItem("selectedWord", randomWord.toUpperCase());
        router.push("/game");
    };

    return (
        <LayoutComponent>
            <div className="mt-10 flex w-full max-w-[600px] flex-1 flex-col items-center justify-center self-center rounded-lg bg-white p-10">
                <h1 className="mb-10 text-3xl font-bold">Hangman Game</h1>
                <p className="mb-10">Choose a difficulty level</p>
                <div className="flex w-full max-w-[300px] flex-col gap-4">
                    <button
                        onClick={() => setDifficulty("easy")}
                        className={`rounded-md border px-4 py-2 ${difficulty === "easy" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                    >
                        Easy (6-8 letters)
                    </button>
                    <button
                        onClick={() => setDifficulty("medium")}
                        className={`rounded-md border px-4 py-2 ${difficulty === "medium" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                    >
                        Medium (9-11 letters)
                    </button>
                    <button
                        onClick={() => setDifficulty("hard")}
                        className={`rounded-md border px-4 py-2 ${difficulty === "hard" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                    >
                        Hard (12-14 letters)
                    </button>
                    <button onClick={handlePlayClick} className="mt-10 rounded-md bg-blue-500 px-4 py-2 text-white">
                        Let's Play
                    </button>
                </div>
            </div>
        </LayoutComponent>
    );
}
