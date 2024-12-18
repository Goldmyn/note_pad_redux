import { useState } from "react";
import CreateNote from "./components/CreateNote.jsx";
import DisplayNotes from "./components/DisplayNotes.jsx";

function App() {
 
  return (
    <section className="grid place-items-center h-screen">
      <div className="w-[400px] md:w-[600px] shadow-lg rounded-lg p-3 border">
        <h1 className="text-amber-600 text-2xl font-light mb-4">Note Keeper</h1>
        <CreateNote />
        <DisplayNotes />
      </div>
    </section>
  );
}

export default App;
