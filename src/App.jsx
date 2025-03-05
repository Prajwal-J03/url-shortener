import { useState } from "react";
import axios from 'axios';
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [output, setOutput] = useState(null);
  const [url, setUrl] = useState('');

  async function shortURL() {
    if (!url) return; // Prevent empty URL submission

    try {
      const response = await axios.get(`https://api.shrtco.de/v2/shorten?url=${url}`);
      setOutput(response.data.result.short_link);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className="w-full h-screen relative bg-gray-50">
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
        h-[400px] w-[800px] shadow-2xl rounded-2xl bg-white flex flex-col items-center justify-around"
        >
          <h1 className="text-4xl font-bold">Paste your URL here</h1>
          <div className="flex items-center justify-between  border border-sky-400 rounded-lg overflow-hidden">
            <input
              className="h-10 w-80 rounded-lg px-4 focus:outline-0"
              placeholder="eg: https://www.youtube.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <span className="material-symbols-outlined h-10 w-16 bg-sky-400 flex items-center justify-center text-white text-center hover:bg-sky-500" 
                  onClick={shortURL}
            >arrow_right_alt</span>
          </div>
          <div className="flex items-center justify-around">
            {output && (
              <p>Here is your shortened URL: <a href={output} target="_blank" rel="noopener noreferrer">{output}</a></p>
            )}
          </div>
        </div>
        <p className="absolute bottom-3 right-4">Developed By <a className="text-sky-400 underline underline-offset-3 hover:underline-offset-4 ">Prajwal J</a></p>
      </div>
    </>
  );
}

export default App;
