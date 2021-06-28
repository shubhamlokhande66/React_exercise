
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './Components/MenuComponent';

class App extends Component {
  render() {
    return (
      
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>

          </div>
          <Menu />
        </Navbar>
      </div>
    );
  }
}