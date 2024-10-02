import { useState } from 'react'
import './App.css'
import axios from 'axios'


function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  
   async function generateAnswer(){
    setAnswer("Loading your answer... \n It might take upto 10 seconds")
    const response = await  axios ({
      url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyAVtYstiMF7fEwFRL1o1xeU4nLocvfhv1E",
      method: "post",
      data: {
        contents:[
          {parts:[{text:question}]},
        ],
      },
    });
    console.log
      setAnswer(response['data']['candidates'][0]['content']['parts'][0]['text']);
  }
      
    
    
     return (
    <>
      <h1 className = "bg-red-300">Chat Ai</h1> 
      <textarea
      className="border rounded w-full"
       value={question} 
       onChange = {(e) => setQuestion ( e.target.value)}
      cols="100" 
      rows="20"
      ></textarea>
      <button onClick ={generateAnswer}>Generate Answer</button>
      <pre>{answer}</pre>
    </>
  );
}
export default App
