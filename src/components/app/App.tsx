import '../../App.css';
import { SearchDoorForm } from '../search-door-form/search-door-form';
import SliderDoor from '../slider-door/slider-door';

function App():JSX.Element {
  return (
    <div className="App">
      <SearchDoorForm />
      <SliderDoor />
    </div>
  );
}

export default App;
