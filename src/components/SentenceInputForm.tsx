type SentenceInputFormProps = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
};

export default function SentenceInputForm({
  onSubmit,
}: SentenceInputFormProps) {
  return (
    <form onSubmit={onSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 text-lg font-bold mb-2">
          Enter a sentence:
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="sentence"
        ></textarea>
      </div>
      <div className="flex items-center justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Check
        </button>
      </div>
    </form>
  );
}
