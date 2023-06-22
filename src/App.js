import './App.css';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/FoodForm';
import Search from './components/Search';
import foods from "./foods.json";
import { useState } from 'react';

import { Divider, Input, Col, Row } from 'antd';

function App() {

  const [foodInfo, setFoods] = useState(foods)

  const addFood = (foodForm) => {
    const newFood = [foodForm,...foodInfo]
    setFoods(newFood)
  }

  const deleteFood = (foodName) =>{
    const filterFood = foodInfo.filter((element) =>{
      return element.name !== foodName
    })

    setFoods(filterFood)
  };

  return (
    <div className="App">
    <Row>
    <h1>Food List</h1>
      <Search />

      <AddFoodForm  CreateFood={addFood} />

        {foodInfo.map((element, index) => {
          return(
            <div>
              {element ?
              (<FoodBox details={element} key={index} deleteFood={deleteFood}/>)
              : (<h3>We don't have any more food ! Please Create one !</h3>)}
            </div>
          )
        })}
        </Row>
    </div>
    
  );
}

export default App;
