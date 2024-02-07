import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import { UploadProvider } from "./context/uploadContext";
import { ExplorerProvider } from "./context/explorerContext";
import RegisterPage from "./pages/RegisterPages";
import LoginPage from "./pages/LoginPages";
import UploaderPage from "./pages/UploaderPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import ProtectedRoute from "./ProtectedRoute";
import ExplorerPage from "./pages/ExplorerPage";


function App() {
  return (
    <AuthProvider>
      <UploadProvider>
        <ExplorerProvider>
        <BrowserRouter>
          <Routes>
            {/* RUTAS PUBLICAS */}
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            {/* RUTAS PROTEGIDAS */}
            <Route element={<ProtectedRoute />}>
              <Route path="/uploader" element={<UploaderPage />} />
              <Route path="/explorer" element={<ExplorerPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Route>
          </Routes>
        </BrowserRouter>
        </ExplorerProvider>
      </UploadProvider>
    </AuthProvider>
  );
}

export default App;
