import {BrowserRouter, Route, Routes} from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import RegisterPage from "./pages/RegisterPages";
import LoginPage from "./pages/LoginPages";
import TaskPage from "./pages/TaskPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return(
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* RUTAS PUBLICAS */}
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/tasks" element={<TaskPage/>} />
          {/* RUTAS PROTEGIDAS */}
          <Route element={<ProtectedRoute/>}>
            <Route path="/add-task" element={<h1>Add task</h1>} />
            <Route path="/tasks/:id" element={<h1>Task id</h1>} />
            <Route path="/profile" element={<ProfilePage/>} />
          </Route>
        </Routes>
    </BrowserRouter>
    </AuthProvider>
  )
}

export default App