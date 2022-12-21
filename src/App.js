import './App.css'
import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  return (
    <div className="App">
      <form>
        <label> Enter your Roll No:

       
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
         </label>
        <label> Upload your image:
        <input
          type="file"
          value={selectedFile}
          onChange={(e) => setSelectedFile(e.target.files[0])}
        />
        </label>
      </form>
    </div>
  );
};

export default App;
