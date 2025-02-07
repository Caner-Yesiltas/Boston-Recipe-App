import styled from 'styled-components';
import Flex from '../../components/globalStyles/Flex';

export const DetailContainer = styled(Flex)`
  flex-direction: column;
  background: #fff3e0;
  min-height: calc(100vh - 75px);
  padding: 0.5rem;
`;

export const DetailPart = styled(Flex)`
  flex-direction: row;
  margin: 1rem;
  border: 1px solid white;
  border-radius: 5px;
  background-color: #e1f1dd;
`;

export const ImgContainer = styled.div`
  border: 1px solid #00adb5;
  padding: 10px;
  border-radius: 3px;
  margin: 2rem;
  img {
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const HeaderContainer = styled(Flex)`
   margin: 25px;
`;

export const StyledImg = styled.img`
   max-width: 150px;
   width: 15vw;
   min-width: 100px;
   height: auto;
`;

export const IngContainer = styled.div`
  width: 400px;
  font-size: 1.4rem;
  margin: 2rem;
`;

export const OtherPart = styled.div`
  width: 400px;
  text-align: right;
  font-size: 1.8rem;
  margin: 2rem;
`;
