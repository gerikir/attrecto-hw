import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import GameComponent from "./GameComponent";

export default function GameContainer() {
    const words = useSelector((state: RootState) => state.words.words);
    const router = useRouter();
    const [word, setWord] = useState("");
    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
    const [remainingAttempts, setRemainingAttempts] = useState(6);
    const [gameStatus, setGameStatus] = useState<"playing" | "won" | "lost">("playing");

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    useEffect(() => {
        const storedState = localStorage.getItem("gameState");
        const selectedWord = localStorage.getItem("selectedWord");

        if (storedState) {
            const { word, guessedLetters, remainingAttempts, gameStatus } = JSON.parse(storedState);
            setWord(word);
            setGuessedLetters(guessedLetters);
            setRemainingAttempts(remainingAttempts);
            setGameStatus(gameStatus);
        } else if (selectedWord) {
            setWord(selectedWord);
        } else {
            router.push("/");
        }
    }, [words, router]);

    useEffect(() => {
        if (word && word.split("").every((letter) => guessedLetters.includes(letter))) {
            setGameStatus("won");
        }
    }, [guessedLetters, word]);

    useEffect(() => {
        if (remainingAttempts <= 0) {
            setGameStatus("lost");
        }
    }, [remainingAttempts]);

    useEffect(() => {
        localStorage.setItem("gameState", JSON.stringify({ word, guessedLetters, remainingAttempts, gameStatus }));
    }, [word, guessedLetters, remainingAttempts, gameStatus]);

    const handleLetterClick = (letter: string) => {
        if (!word.includes(letter)) {
            setRemainingAttempts((prev) => prev - 1);
        }
        setGuessedLetters((prev) => [...prev, letter]);
    };

    const handleEndGame = () => {
        router.push("/");
    };

    const startNewGame = () => {
        const selectedWord = localStorage.getItem("selectedWord");
        if (selectedWord) {
            setWord(selectedWord);
            setGuessedLetters([]);
            setRemainingAttempts(6);
            setGameStatus("playing");
        } else {
            router.push("/");
        }
    };

    return (
        <GameComponent
            word={word}
            guessedLetters={guessedLetters}
            remainingAttempts={remainingAttempts}
            onLetterClick={handleLetterClick}
            onEndGame={handleEndGame}
            onStartNewGame={startNewGame}
            gameStatus={gameStatus}
            alphabet={alphabet}
        />
    );
}
