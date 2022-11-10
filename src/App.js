import NotesList from "./components/NotesList";
import './styles/styles.scss'
import Search from "./components/Search";
import Header from "./components/Header";
import { useState } from 'react'

function App() {
  const [darkMode, setDarkMode] = useState(false) 

  return (
    <div className = {`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleToggle = {setDarkMode}/>
        <Search/>
        <NotesList/>
    </div>
    </div>
  );
}

export default App;
