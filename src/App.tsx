import React, { useCallback } from "react";
import api, { AxiosError } from "./utils/api";
import SentenceInputForm from "./components/SentenceInputForm";
import ResultPanel from "./components/ResultPanel";
import "./App.css";

function App() {
  const [error, setError] = React.useState<string | undefined>();
  const [nonEnglishWords, setNonEnglishWords] = React.useState<
    string[] | undefined
  >();

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);

      try {
        const response = await api.post("/check-sentence", data);
        setNonEnglishWords(response.data.invalidWords);
        setError("");
      } catch (error) {
        if (error instanceof AxiosError) {
          const serverError = error as AxiosError;
          const data: any = serverError.response?.data;
          setError(data.message);
        } else {
          setError("Something went wrong");
        }
      }
    },
    []
  );

  return (
    <div className="App">
      <div className="w-full max-w-md">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          {/* Form to enter a sentence */}
          <SentenceInputForm onSubmit={handleSubmit} />

          {/* Display errors */}
          {error && <p className="text-red-700 mt-4">{error}</p>}

          {/* Display results */}
          {nonEnglishWords && <ResultPanel words={nonEnglishWords} />}
        </div>
      </div>
    </div>
  );
}

export default App;
