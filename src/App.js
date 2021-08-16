import { Route, BrowserRouter, Switch } from 'react-router-dom';
import React from 'react';
import Provider from './Context_Configs/Provider';
// Pages Components \/
import Login from './Pages/Login';
import Foods from './Pages/Foods';
import Drinks from './Pages/Drinks';
import Profile from './Pages/Profile';
import Explore from './Pages/Explore';
import ExploreFoods from './Pages/Explore/ExploreFoods';
import ExploreDrinks from './Pages/Explore/ExploreDrinks';
import ExploreFoodsIngredients from './Pages/Explore/ExploreFoodsIngredients';
import ExploreDrinksIngredients from './Pages/Explore/ExploreDrinksIngredients';
import ExploreFoodsArea from './Pages/Explore/ExploreFoodsArea';
import ExploreDrinksArea from './Pages/Explore/ExploreDrinksArea';
import RecipesMade from './Pages/RecipesMade';
import FavoriteRecipes from './Pages/FavoriteRecipes';
import SingleFoodItem from './Pages/Components/SingleFoodItem';
import SingleDrinkItem from './Pages/Components/SingleDrinkItem';
// Pages Components /\
import 'bootstrap/dist/css/bootstrap.min.css';
import InprogressFood from './Pages/Components/InprogressFood';
import InProgressDrink from './Pages/Components/InprogressDrink';

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/comidas" component={ Foods } />
          <Route exact path="/comidas/:id" component={ SingleFoodItem } />
          <Route exact path="/bebidas/:id" component={ SingleDrinkItem } />
          <Route exact path="/bebidas" component={ Drinks } />
          <Route exact path="/perfil" component={ Profile } />
          <Route exact path="/explorar" component={ Explore } />
          <Route exact path="/explorar/comidas" component={ ExploreFoods } />
          <Route exact path="/explorar/bebidas" component={ ExploreDrinks } />
          <Route exact path="/comidas/:id/in-progress" component={ InprogressFood } />
          <Route exact path="/bebidas/:id/in-progress" component={ InProgressDrink } />
          <Route
            exact
            path="/explorar/comidas/ingredientes"
            component={ ExploreFoodsIngredients }
          />
          <Route
            exact
            path="/explorar/bebidas/ingredientes"
            component={ ExploreDrinksIngredients }
          />
          <Route exact path="/explorar/comidas/area" component={ ExploreFoodsArea } />
          <Route exact path="/explorar/bebidas/area" component={ ExploreDrinksArea } />
          <Route exact path="/receitas-feitas" component={ RecipesMade } />
          <Route exact path="/receitas-favoritas" component={ FavoriteRecipes } />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
