import { useState } from 'react';
import { HeaderText, HomeImg, ImgDiv } from './Home.style';
import axios from 'axios';
import { Header } from '../../components/header/Header';
import Cards from '../../components/cards/Cards';
import homeSvg from '../../assets/home.svg';

const Home = () => {
  const mealType = ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Teatime'];
  const [query, setQuery] = useState('egg');
  const [selectedMeal, setSelectedMeal] = useState(mealType[0]);
  const [recipes, setRecipes] = useState(null);

  const APP_ID = process.env.REACT_APP_APP_ID;
  const APP_KEY = process.env.REACT_APP_APP_KEY;

  console.log('APP_ID:', APP_ID);
  console.log('APP_KEY:', APP_KEY);


  const getData = async () => {
    const currentUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;
    console.log('Current URL:', currentUrl);

    if (query && APP_ID && APP_KEY) { 
      try {
        const { data } = await axios.get(currentUrl);
        setRecipes(data.hits);
      } catch (error) {
      
    
        if (error.config) {
         
        }
     
      }
    } else if (!APP_ID || !APP_KEY) {
     
      alert('API configuration error. Please contact support.');
    }
    else {
      alert('Please Enter your meal');
    }
  };




  return (
    <div>
      <Header
        setQuery={setQuery}
        setSelectedMeal={setSelectedMeal}
        mealType={mealType}
        getData={getData}
      />
      {!recipes && (
        <ImgDiv>
          <HomeImg src={homeSvg} />
        </ImgDiv>
      )}

      {recipes?.length === 0 && (
        <HeaderText>The Food can not be found </HeaderText>
      )}

      {recipes?.length > 0 && <Cards recipes={recipes} />}
    </div>
  );
};
export default Home;
