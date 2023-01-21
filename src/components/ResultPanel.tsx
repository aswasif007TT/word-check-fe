type ResultPanelProps = {
  words: string[];
};

export default function ResultPanel({ words }: ResultPanelProps) {
  if (words.length > 0) {
    return (
      <div className="mt-6">
        <hr className="mb-3" />
        <label className="block text-gray-700 text-lg font-bold mb-2">
          Non English words:
        </label>
        <p className="text-red-700">{words.join(", ")}</p>
      </div>
    );
  }

  return (
    <div className="mt-6">
      <hr className="mb-3" />
      <label className="block text-green-700 text-lg font-bold mb-2">
        No non English word found.
      </label>
    </div>
  );
}
