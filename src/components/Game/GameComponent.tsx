import Layout from "@/components/Layout";
import Image from "next/image";

interface GameProps {
    word: string;
    guessedLetters: string[];
    remainingAttempts: number;
    onLetterClick: (letter: string) => void;
    onEndGame: () => void;
    onStartNewGame: () => void;
    gameStatus: "playing" | "won" | "lost";
    alphabet: string[];
}

export default function GameComponent({
    word,
    guessedLetters,
    remainingAttempts,
    onLetterClick,
    onEndGame,
    onStartNewGame,
    gameStatus,
    alphabet,
}: GameProps) {
    const hangmanStages = [
        "/hangman0.svg",
        "/hangman1.svg",
        "/hangman2.svg",
        "/hangman3.svg",
        "/hangman4.svg",
        "/hangman5.svg",
        "/hangman6.svg",
    ];

    return (
        <Layout>
            <div className="mt-10 flex flex-col items-center justify-center rounded-lg bg-white p-4">
                <h1 className="my-6 text-3xl font-bold">Hangman Game</h1>
                <div className="mt-10 flex w-full flex-col items-center justify-between gap-10 md:flex-row">
                    <div className="flex flex-col gap-10">
                        <p className="h-6 lg:h-10">
                            {gameStatus === "won" && <span className="mt-4 text-green-500">You won!</span>}
                            {gameStatus === "lost" && (
                                <span className="mt-4 text-red-500">You've lost! The word was: {word}</span>
                            )}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {word.split("").map((letter, index) => (
                                <span key={index} className="h-8 w-8 border-b-2 border-gray-500 text-center leading-10">
                                    {guessedLetters.includes(letter) ? letter : ""}
                                </span>
                            ))}
                        </div>

                        {/* Mobile-Tablet View: 4 Rows */}
                        <div className="flex flex-col gap-2 lg:hidden">
                            <div className="flex gap-2">
                                {alphabet.slice(0, 7).map((letter) => (
                                    <button
                                        key={letter}
                                        onClick={() => onLetterClick(letter)}
                                        className="flex h-6 flex-1 items-center justify-center rounded border border-gray-500 text-center hover:bg-gray-100 disabled:opacity-20 disabled:hover:bg-white"
                                        disabled={guessedLetters.includes(letter) || gameStatus !== "playing"}
                                    >
                                        {letter}
                                    </button>
                                ))}
                            </div>
                            <div className="flex gap-2">
                                {alphabet.slice(7, 14).map((letter) => (
                                    <button
                                        key={letter}
                                        onClick={() => onLetterClick(letter)}
                                        className="flex h-6 flex-1 items-center justify-center rounded border border-gray-500 text-center hover:bg-gray-100 disabled:opacity-20 disabled:hover:bg-white"
                                        disabled={guessedLetters.includes(letter) || gameStatus !== "playing"}
                                    >
                                        {letter}
                                    </button>
                                ))}
                            </div>
                            <div className="flex gap-2">
                                {alphabet.slice(14, 21).map((letter) => (
                                    <button
                                        key={letter}
                                        onClick={() => onLetterClick(letter)}
                                        className="flex h-6 flex-1 items-center justify-center rounded border border-gray-500 text-center hover:bg-gray-100 disabled:opacity-20 disabled:hover:bg-white"
                                        disabled={guessedLetters.includes(letter) || gameStatus !== "playing"}
                                    >
                                        {letter}
                                    </button>
                                ))}
                            </div>
                            <div className="flex gap-2">
                                {alphabet.slice(21).map((letter) => (
                                    <button
                                        key={letter}
                                        onClick={() => onLetterClick(letter)}
                                        className="flex h-6 flex-1 items-center justify-center rounded border border-gray-500 text-center hover:bg-gray-100 disabled:opacity-20 disabled:hover:bg-white"
                                        disabled={guessedLetters.includes(letter) || gameStatus !== "playing"}
                                    >
                                        {letter}
                                    </button>
                                ))}
                                <div className="flex-1 border border-transparent" />
                                <div className="flex-1 border border-transparent" />
                            </div>
                        </div>

                        {/* Desktop View: 2 Rows */}
                        <div className="hidden flex-col gap-2 lg:flex">
                            <div className="flex gap-2">
                                {alphabet.slice(0, 13).map((letter) => (
                                    <button
                                        key={letter}
                                        onClick={() => onLetterClick(letter)}
                                        className="flex h-10 w-10 items-center justify-center rounded border border-gray-500 text-center hover:bg-gray-100 disabled:opacity-20 disabled:hover:bg-white"
                                        disabled={guessedLetters.includes(letter) || gameStatus !== "playing"}
                                    >
                                        {letter}
                                    </button>
                                ))}
                            </div>
                            <div className="flex gap-2">
                                {alphabet.slice(13).map((letter) => (
                                    <button
                                        key={letter}
                                        onClick={() => onLetterClick(letter)}
                                        className="flex h-10 w-10 items-center justify-center rounded border border-gray-500 text-center hover:bg-gray-100 disabled:opacity-20 disabled:hover:bg-white"
                                        disabled={guessedLetters.includes(letter) || gameStatus !== "playing"}
                                    >
                                        {letter}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <p className="mt-4">Remaining possibility of failure: {remainingAttempts}</p>
                        <Image
                            src={hangmanStages[6 - remainingAttempts]}
                            alt="Hangman"
                            width={300}
                            height={300}
                            className="md:hidden self-center"
                        />
                        <div className="mt-4 flex flex-col gap-4 md:flex-row">
                            <button onClick={onEndGame} className="rounded-md border px-4 py-2">
                                END GAME
                            </button>
                            <button onClick={onStartNewGame} className="rounded-md bg-blue-500 px-4 py-2 text-white">
                                START NEW GAME
                            </button>
                        </div>

                    </div>
                    <Image
                        src={hangmanStages[6 - remainingAttempts]}
                        alt="Hangman"
                        width={300}
                        height={300}
                        className="hidden md:block"
                    />
                </div>
            </div>
        </Layout>
    );
}
