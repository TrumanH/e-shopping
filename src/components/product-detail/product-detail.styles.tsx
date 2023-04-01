import styled from 'styled-components';
import Button from '../button/button.component';

export const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr 1fr;
  grid-template-rows: 50px 1fr 50px;
  column-gap: 30px;
  /* row-gap: 20px; */
  width: 900px;
  height: 440px;
  border-radius: 10px;
  border: 5px solid black;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
`
export const TitleBox = styled.div`
  grid-column: 1/-1;
  position: relative;
  text-transform: uppercase;
  background-color: rgb(247, 244, 239);
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  ::before {
    width: 40px;
    content: "sale";
    background-color: red;
    color: white;
    font-size: 16px;
    /* font-weight: bold; */
    text-transform: uppercase;
    display: inline-block;
    padding: 5px 10px;
    position: relative;
    top: -20px;
    left: -330px;
  }
`
type ImageBoxProps = {
  imgUrl?: string;
};

export const ImageBox = styled.div<ImageBoxProps>`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({imgUrl}) => `url(${imgUrl})`};
`;

export const DescBox = styled.div`
  // background-color: yellow;
  padding: 10px;
`
export const MoreInfo = styled.a`
  color: black;
  font-size: 20px;
  text-decoration: underline;
`

export const DetailBox = styled.div`
  padding: 10px;
  // background-color: green;
`

export const AddCartButton = styled(Button)`
  grid-column: 1/-1;
  color: aliceblue;
  background-color: black;
  font-size: 20px;
  font-weight: bold;
  border-radius: 5px;
  :hover {
    color: black;
    background-color: aliceblue;
  }
`

export const DescHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Price = styled.div`
  font-size: 25px;
  font-weight: bold;
`
export const Shipping = styled.div`
  /* padding-top: 5px; */
  font-weight: bold;
  color: grey;
`

export const Description = styled.div`
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 18px;
`

export const ColorsBox = styled.div`
  height: 30px;
  display: flex;
  justify-content: space-between;
  margin-top: 35px;
`

type ColorBlockProps = {
  color?: string;
};

export const ColorBlock = styled.div<ColorBlockProps>`
  flex: 0 0 30px;
  background-color: ${({color}) => `${color}`};
`

export const DetailHead = styled.h3`
  margin: 0;
  margin-bottom: 20px;
  // padding: 0;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
`

export const DetailContents = styled.ul`
  margin-left: 20px;
  padding: 0;
`

export const DetailItem = styled.li`
  font-size: 18px;
`