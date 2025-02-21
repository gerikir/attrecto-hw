import LayoutComponent from "@/components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { addWord } from "@/features/wordsSlice";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import AdminComponent from "./AdminComponent";

export default function AdminContainer() {
  const dispatch = useDispatch();
  const words = useSelector((state: RootState) => state.words.words);
  const [newWord, setNewWord] = useState("");
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

  return (
      <AdminComponent
        words={words}
        newWord={newWord}
        setNewWord={setNewWord}
        handleAddWord={handleAddWord}
        handleBack={handleBack}
      />
  );
}
