import {
  Button,
  FoodInput,
  FormContainer,
  HeaderContainer,
  MainHeader,
  Select,
} from './Header.style';

export const Header = ({ setQuery, setSelectedMeal, mealType, getData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };
  return (
    <HeaderContainer>
      <MainHeader>
        Boston🐧Recipe
        <FormContainer onSubmit={handleSubmit}>
          <FoodInput
            type='text'
            placeholder='Trending Now'
            onChange={(e) => setQuery(e.target.value)}
          ></FoodInput>
          <Button type='submit'>Chef's Choice </Button>
          <Select
            name='mealType'
            id='mealType'
            onChange={(e) => setSelectedMeal(e.target.value)}
          >
            {mealType.map((meal, index) => (
              <option key={index} value={meal.toLowerCase()}>
                {meal}
              </option>
            ))}
            ;
          </Select>
        </FormContainer>
      </MainHeader>
    </HeaderContainer>
  );
};
