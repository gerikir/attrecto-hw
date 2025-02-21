import LayoutComponent from "@/components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { addWord } from "@/features/wordsSlice";
import { useState } from "react";
import { useRouter } from "next/navigation";
import AdminComponent from "./AdminComponent";

export default function AdminContainer() {
  const dispatch = useDispatch();
  const words = useSelector((state: RootState) => state.words.words);
  const [newWord, setNewWord] = useState("");
  const router = useRouter();

  const handleAddWord = () => {
    if (newWord.trim()) {
      dispatch(addWord(newWord.trim()));
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
