import styled from 'styled-components';
import Flex from '../../components/globalStyles/Flex';

export const AboutContainer = styled(Flex)`
  flex-direction: column;
  min-height: calc(100vh - 80px);
  line-height: 2;
  background: linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%);

  span {
    color: #ff7043; // Turuncu
    font-size: 3rem;
  }
`;

export const InfoContainer = styled.div`
  text-align: right;
  margin: 0 0.7rem;
  max-width: 1000px;
  background: linear-gradient(
    45deg,
    rgba(255, 112, 67, 0.1),
    rgba(255, 167, 38, 0.2)
  );
  border: 1px solid #ff7043;
  padding: 5rem;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(255, 112, 67, 0.1);
  backdrop-filter: blur(5px);

  a {
    color: #f4511e; // Koyu turuncu
    text-decoration: none;
    font-weight: bold;
    transition: all 0.3s ease;

    &:hover {
      color: #ff5722;
      text-decoration: underline;
    }
  }
`;

export const StyledImage = styled.img`
  width: 500px;
  margin-bottom: 2rem;
  filter: drop-shadow(0 4px 10px rgba(255, 112, 67, 0.2));
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;
