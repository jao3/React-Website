import Header from './components/Header';
import { GlobalStyle } from './styles/globalStyles';
import Home from './pages/Home'
function App() {
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Home/>
    </>
  );
}

export default App;
