import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { addWord, setWords } from "@/features/wordsSlice";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import AdminComponent from "./AdminComponent";

interface WordsState {
    words: string[];
}

const initialState: WordsState = {
    words: [
        "reward",
        "island",
        "finance",
        "frighten",
        "orchestra",
        "prevalence",
        "pedestrian",
        "destruction",
        "announcement",
        "consideration",
        "responsibility",
        "shiver",
        "impound",
        "control",
        "observer",
        "executive",
        "background",
        "unfortunate",
        "presentation",
        "presidential",
        "comprehensive",
        "constitutional",
        "regret",
        "extreme",
        "collapse",
        "classify",
        "fireplace",
        "particular",
        "charismatic",
        "manufacturer",
        "inappropriate",
        "communication",
        "discrimination",
        "carbon",
        "inspire",
        "medicine",
        "monstrous",
        "essential",
        "attraction",
        "institution",
        "interference",
        "embarrassment",
        "representative",
        "recommendation",
    ],
};

export default function AdminContainer() {
    const dispatch = useDispatch();
    const words = useSelector((state: RootState) => state.words.words);
    const [newWord, setNewWord] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

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

    const isValidWord = (word: string) => {
        const length = word.length;
        return length >= 6 && length <= 14;
    };

    const isDuplicateWord = (word: string) => {
        return words.includes(word.toLowerCase());
    };

    const handleAddWord = () => {
        if (!isValidWord(newWord)) {
            setError("Word must be between 6 and 14 letters.");
        } else if (isDuplicateWord(newWord)) {
            setError("Word is already in the list.");
        } else {
            dispatch(addWord(newWord.trim()));
            const updatedWords = [...words, newWord.trim()];
            localStorage.setItem("words", JSON.stringify(updatedWords));
            setNewWord("");
            setError("");
        }
    };

    const handleResetWords = () => {
        dispatch(setWords(initialState.words));
        localStorage.setItem("words", JSON.stringify(initialState.words));
    };

    const handleBack = () => {
        router.push("/");
    };

    return (
        <AdminComponent
            words={words}
            newWord={newWord}
            setNewWord={setNewWord}
            handleAddWord={handleAddWord}
            handleResetWords={handleResetWords}
            handleBack={handleBack}
            error={error}
            setError={setError}
            isValidWord={isValidWord}
            isDuplicateWord={isDuplicateWord}
        />
    );
}
