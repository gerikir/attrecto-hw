import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { addWord } from "@/features/wordsSlice";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import GameComponent from "./GameComponent";

export default function GameContainer() {
    const dispatch = useDispatch();
    const words = useSelector((state: RootState) => state.words.words);
    const [newWord, setNewWord] = useState("");
    const router = useRouter();
    const [word, setWord] = useState("EXAMPLE");
    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
    const [remainingAttempts, setRemainingAttempts] = useState(6);

    useEffect(() => {
        const storedWords = localStorage.getItem("words");
        if (storedWords) {
            const parsedWords = JSON.parse(storedWords);
            parsedWords.forEach((word: string) => {
                if (!words.includes(word)) {
                    dispatch(addWord(word));
                }
            });
        }
    }, [dispatch, words]);

    const handleAddWord = () => {
        if (newWord.trim() && !words.includes(newWord.trim())) {
            dispatch(addWord(newWord.trim()));
            const updatedWords = [...words, newWord.trim()];
            localStorage.setItem("words", JSON.stringify(updatedWords));
            setNewWord("");
        }
    };

    const handleBack = () => {
        router.push("/");
    };

    const handleLetterClick = (letter: string) => {
        if (!word.includes(letter)) {
            setRemainingAttempts((prev) => prev - 1);
        }
        setGuessedLetters((prev) => [...prev, letter]);
    };

    const handleEndGame = () => {
        // Logic to end the game
    };

    const handleStartNewGame = () => {
        // Logic to start a new game
        setWord("NEWWORD"); // Replace with logic to select a new word
        setGuessedLetters([]);
        setRemainingAttempts(6);
    };

    return (
        <GameComponent
            word={word}
            guessedLetters={guessedLetters}
            remainingAttempts={remainingAttempts}
            onLetterClick={handleLetterClick}
            onEndGame={handleEndGame}
            onStartNewGame={handleStartNewGame}
        />
    );
}
