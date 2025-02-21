import Layout from "@/components/Layout";


interface AdminProps {
  words: string[];
  newWord: string;
  setNewWord: (value: string) => void;
  handleAddWord: () => void;
  handleBack: () => void;
}

export default function AdminComponent({
  words,
  newWord,
  setNewWord,
  handleAddWord,
  handleBack,
}: AdminProps) {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center mt-10 bg-white rounded-lg p-4">
        <h1 className="text-3xl font-bold mb-6">Admin</h1>
        <div className="flex gap-20">
          <div className="flex flex-col gap-2">
            <label className="mb-2">Type the word you want to add to the list</label>
            <input
              type="text"
              value={newWord}
              onChange={(e) => setNewWord(e.target.value)}
              className="border p-2 mb-2"
              placeholder="New word"
            />
            <button onClick={handleAddWord} className="bg-blue-500 text-white px-4 py-2 mb-2">
              SAVE
            </button>
            <button onClick={handleBack} className="border px-4 py-2">
              BACK
            </button>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {words.map((word, index) => (
              <div key={index} className="">{word}</div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
