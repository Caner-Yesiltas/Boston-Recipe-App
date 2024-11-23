import LoginStyle, {FormContainer,Header,LoginContainer,StyledButton,StyledForm,StyledImg,StyledInput,} from './Login.style';
import mealSvg from '../../assets/meal.svg';

const Login = () => {
  return (
    <LoginContainer>
      <FormContainer>
        <Header>{'<CW/>'}Recipe</Header>
        <StyledImg src={mealSvg} alt='meal' />
        <StyledForm>
          <StyledInput type='text' placeholder='username' required />
          <StyledInput type='password' placeholder='password' required />
          <StyledButton type='submit'>Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
