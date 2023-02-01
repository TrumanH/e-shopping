import styled from 'styled-components';

export const CartItemContainer = styled.div`
    width: 100%;
    display: flex;
    height: 90px;
    margin-bottom: 15px;

    img {
        width: 40%;
    }
`;

export const ItemDetails = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 20px 10px;
`;

export const Text = styled.span`
  font-size: 16px;
`;