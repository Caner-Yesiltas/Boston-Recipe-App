import { useEffect } from 'react';
import HomeStyle from './Home.style'
import axios from "axios"

const Home = () => {
  const APP_ID = "0a8f3cf7";
  const APP_KEY = "71b3096aed8981f4c337f35fe72e1218";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;

  const getData = async () => {
    
  const {data}= await axios.get(url)
  }

  useEffect(() => {
   
  getData();
   
  }, [])
  

  return (
    <div>
      
    </div>
  )
}

export default Home;
