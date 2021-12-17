import logo from './logo.svg';
import './App.css';
import AppRoutes from './routes/AppRoutes';
import ContextProvider from './context/context';

function App() {
  return (
    <ContextProvider>
    <AppRoutes />
    </ContextProvider>
  );
}

export default App;
