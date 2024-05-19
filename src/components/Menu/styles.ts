import styled from "styled-components/native";

export const Product = styled.TouchableOpacity`
  flex-direction: row;
`;

export const ProductImage = styled.Image`
  width: 120px;
  height: 96px;
  border-radius: 8px;
`;

export const ProductDetails = styled.View`
  flex: 1;
  padding: 8px 0;
  justify-content: space-between;
  margin-left: 16px;
`;

export const Separator = styled.View`
  width: 100%;
  height: 1px;
  margin: 24px 0;
  background-color: rgba(204, 204, 204, 0.32);
`;

export const ButtonAdd = styled.TouchableOpacity`
  position: absolute;
  bottom: 0;
  right: 0;
  padding-top: 4px;
  padding-left: 4px;
`;
