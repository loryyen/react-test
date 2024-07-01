import Left from "./Left";
import Right from "./Right";
import { AuthProvider } from "./context/AuthContext";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Left />
        <Right />
      </div>
    </AuthProvider>
  );
}

export default App;
