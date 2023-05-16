import { useState, useEffect } from "react";

const useSendData = () => {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const sendRequest = async (url, data) => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    setIsPending(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        signal: signal,
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const responseData = await response.json();
      console.log(responseData);

      setSuccessMessage("Data sent successfully!");
      setIsPending(false);
    } catch (err) {
      if (err.name === "AbortError") {
        console.log("Request aborted");
      } else {
        setError(err.message);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    let abortController = new AbortController();

    const cleanup = () => {
      abortController.abort();
    };

    return cleanup;
  }, []);

  return { isPending, error, successMessage, sendRequest };
};

export default useSendData;
