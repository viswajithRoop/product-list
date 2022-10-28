import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './Product';
import { Container } from "react-bootstrap"

function App() {
  return (
    <div className='app'>
      <Container>
        <Product />
      </Container>
    </div>
  );
}

export default App;
