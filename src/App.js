import react ,{Component} from 'react'
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './Components/MenuComponent';
import { DISHES } from './Components/dishes';
import Dish from './Components/DishdetailComponent'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

  render() {
    return (
      
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
      
        </Navbar>
        <Menu dishes={this.state.dishes}  />
        <Dish dishes={this.state.dishes}></Dish>
        
      </div>
    );
  }
}
export default App;