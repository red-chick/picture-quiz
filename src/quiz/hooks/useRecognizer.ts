import { useEffect, useState } from "react";

declare global {
  interface Window {
    webkitSpeechRecognition: SpeechRecognition;
  }
}

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = "ko-KR";

const useRecognizer = (): [string, () => void, () => void] => {
  const [output, setOutput] = useState("");

  useEffect(() => {
    recognition.onresult = (e) => {
      if (e.results[e.results.length - 1].isFinal) {
        setOutput(e.results[e.results.length - 1][0].transcript);
      }
    };
  }, []);

  const startRecognizer = () => {
    recognition.start();
  };

  const endRecognizer = () => {
    recognition.abort();
    setOutput("");
  };

  return [output, startRecognizer, endRecognizer];
};

export default useRecognizer;
