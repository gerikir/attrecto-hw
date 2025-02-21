import LayoutComponent from "@/components/Layout/LayoutComponent";

export default function StartGame() {
    return (
        <LayoutComponent>
            <div className="flex flex-1 flex-col self-center items-center w-full justify-center mt-10 bg-white max-w-[600px] rounded-lg">
                <h1 className="mb-4 text-3xl font-bold">Hangman Game</h1>
                <p className="mb-6">Choose a difficulty level</p>
                <div className="mb-6 flex flex-col space-y-2">
                    <button className="rounded bg-blue-500 px-4 py-2 text-white">Easy (6-8)</button>
                    <button className="rounded bg-gray-200 px-4 py-2">Medium (9-11)</button>
                    <button className="rounded bg-gray-200 px-4 py-2">Hard (12-14)</button>
                </div>
                <button className="rounded bg-blue-500 px-6 py-2 text-white">LET'S PLAY</button>
            </div>
        </LayoutComponent>
    );
}
