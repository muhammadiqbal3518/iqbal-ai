import { useState } from 'react';
import { requestToGroqAI } from "./utils/groq"
import './App.css'
import { Light as SyntaxHighlight } from 'react-syntax-highlighter';

import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function App() {
  const [data, setData] = useState("")

  const handleSubmit = async () => {
    const ai = await requestToGroqAI(content.value);
    setData(ai);
  }

  return (
    <main className='flex flex-col min-h-[80vh] justify-center items-center max-w-xl w-full mx-auto'>
      <h1 className='text-4xl text-indigo-500'>IQBAL AI</h1>
      <div className='max-w-xl pb-10'>
      {data ? (
      <SyntaxHighlight language='swift' style={darcula} wrapLongLines={true}>{data}</SyntaxHighlight>
      ) : null}
      </div>
      <div className='fixed bottom-0 left-0 w-full shadow-md p-4'>
        <form className='flex items-center gap-2'>
          <input 
            placeholder='Masukkan Perintah'
            className='flex-grow py-2 px-4 rounded-md text-md border border-gray-300' 
            id='content'
            type='text'
          />
          <button 
            type='button'
            onClick={handleSubmit}
            className='bg-indigo-500 py-2 px-4 font-bold text-white rounded-md'
          >
            Kirim
          </button>
        </form>
      </div>
    </main>
  )
}

export default App
