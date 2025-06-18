import {Link, Routes, Route} from "react-router-dom";

import './App.css'

function App() {
  return (
    <>
      <div>
        <Link to="/">Home page</Link>
        <Link to="/contacts">Contacts page</Link>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<h1>Home page</h1>} />
          <Route path="/contacts" element={<h1>Contacts page</h1>} />
        </Routes>
      </div>
    </>
  )
}

export default App
