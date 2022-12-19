import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { TaskContextProvider } from "./context/TaskProvider";
import NotFound from "./pages/NotFound";
import TaskForm from "./pages/TaskForm";
import TaskPage from "./pages/TaskPage";

function App() {
  return (
    <div className="bg-zinc-900 min-h-screen">
      <TaskContextProvider>
        <Navbar />
        <div className="container mx-auto py-4 px-20">
          <Routes>
            <Route path="/" element={<TaskPage />} />
            <Route path="/new" element={<TaskForm />} />
            <Route path="/edit/:id" element={<TaskForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </TaskContextProvider>
    </div>
  );
}

export default App;
