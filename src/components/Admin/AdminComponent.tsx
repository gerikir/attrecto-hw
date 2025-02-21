import Layout from "@/components/Layout";

interface AdminProps {
    words: string[];
    newWord: string;
    setNewWord: (value: string) => void;
    handleAddWord: () => void;
    handleResetWords: () => void;
    handleBack: () => void;
    error: string;
    setError: (value: string) => void;
    isValidWord: (word: string) => boolean;
    isDuplicateWord: (word: string) => boolean;
}

export default function AdminComponent({
    words,
    newWord,
    setNewWord,
    handleAddWord,
    handleResetWords,
    handleBack,
    error,
    setError,
}: AdminProps) {
    return (
        <Layout>
            <div className="mt-10 flex flex-col items-center justify-center rounded-lg bg-white p-4">
                <h1 className="mb-6 text-3xl font-bold">Admin</h1>
                <div className="flex gap-20">
                    <div className="flex flex-col gap-4">
                        <label className="mb-2">Type the word you want to add to the list</label>
                        <div className="relative">
                            <input
                                type="text"
                                value={newWord}
                                onChange={(e) => setNewWord(e.target.value)}
                                onFocus={() => setError("")}
                                className={`mb-2 rounded-sm w-full border p-2 ${error ? "border-red-500" : "border-gray-300"}`}
                                placeholder="New word"
                            />
                            {error && <p className="absolute left-0 top-10 mt-0 text-sm text-red-500">{error}</p>}
                        </div>
                        <button onClick={handleAddWord} className="mb-2 bg-blue-500 px-4 py-2 text-white rounded-md">
                            SAVE
                        </button>
                        <button onClick={handleResetWords} className="mb-2 bg-gray-500 px-4 py-2 text-white rounded-md">
                            RESET
                        </button>
                        <button onClick={handleBack} className="border px-4 py-2 rounded-md">
                            BACK
                        </button>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {words.map((word, index) => (
                            <div key={index} className="">
                                {word}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
}
