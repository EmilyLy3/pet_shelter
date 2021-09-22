import './App.css';
import DisplayPets from './components/DisplayPets';
import CreatePet from './components/CreatePet';
import ShowPet from './components/ShowPet';
import EditPet from './components/EditPet';

import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App container mt-3">
      <BrowserRouter>
        <h1>Pet Shelter</h1>

        <Switch>
          <Route exact path="/">
            <DisplayPets/>
          </Route>

          <Route exact path="/create_pet">
            <CreatePet/>
          </Route>

          <Route exact path="/pets/:id">
            <ShowPet/>
          </Route>

          <Route exact path="/pets/edit/:id">
            <EditPet/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
