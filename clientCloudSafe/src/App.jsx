import {BrowserRouter, Route, Routes} from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import RegisterPage from "./pages/RegisterPages";
import LoginPage from "./pages/LoginPages";
import UploaderPage from "./pages/UploaderPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import ProtectedRoute from "./ProtectedRoute";
import ConverterPage from "./pages/ConverterPage";
import FolderPage from "./pages/FolderPage";

function App() {
  return(
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* RUTAS PUBLICAS */}
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          {/* RUTAS PROTEGIDAS */}
          <Route element={<ProtectedRoute/>}>
            <Route path="/uploader" element={<UploaderPage/>} />
            <Route path="/converter" element={<ConverterPage/>}/>
            <Route path="/folder" element={<FolderPage/>}/>
            <Route path="/profile" element={<ProfilePage/>}/>
          </Route>
        </Routes>
    </BrowserRouter>
    </AuthProvider>
  )
}

export default App