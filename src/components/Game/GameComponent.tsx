import Layout from "@/components/Layout";
import Image from "next/image";

interface GameProps {
    word: string;
    guessedLetters: string[];
    remainingAttempts: number;
    onLetterClick: (letter: string) => void;
    onEndGame: () => void;
    onStartNewGame: () => void;
}

export default function GameComponent({
    word,
    guessedLetters,
    remainingAttempts,
    onLetterClick,
    onEndGame,
    onStartNewGame,
}: GameProps) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    return (
        <Layout>
            <div className="mt-10 flex flex-col items-center justify-center rounded-lg bg-white p-4">
                <h1 className="mb-6 text-3xl font-bold">Hangman Game</h1>
                <div className="flex w-full justify-between items-center mt-10">
                    <div className="flex flex-col gap-10">
                        <div className="flex gap-2">
                            {word.split("").map((letter, index) => (
                                <span key={index} className="w-8 border-b-2 border-gray-500 text-center">
                                    {guessedLetters.includes(letter) ? letter : "_"}
                                </span>
                            ))}
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className="flex gap-2">
                                {alphabet.slice(0, 13).map((letter) => (
                                    <button
                                        key={letter}
                                        onClick={() => onLetterClick(letter)}
                                        className="flex h-10 w-10 items-center justify-center rounded border text-center hover:bg-gray-100 disabled:opacity-50 disabled:hover:bg-white"
                                        disabled={guessedLetters.includes(letter)}
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
                                        className="flex h-10 w-10 items-center justify-center rounded border text-center hover:bg-gray-100 disabled:opacity-50 disabled:hover:bg-white"
                                        disabled={guessedLetters.includes(letter)}
                                    >
                                        {letter}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <p className="mt-4">Remaining possibility of failure: {remainingAttempts}</p>
                        <div className="mt-4 flex space-x-4">
                            <button onClick={onEndGame} className="border px-4 py-2">
                                END GAME
                            </button>
                            <button onClick={onStartNewGame} className="bg-blue-500 px-4 py-2 text-white">
                                START NEW GAME
                            </button>
                        </div>
                    </div>
                    <Image src="/hangman.svg" alt="Hangman" width={300} height={300} />
                </div>
            </div>
        </Layout>
    );
}
