import styled from "styled-components/native";
import { StatusBar } from "react-native";

const StatusBarHeight = StatusBar.currentHeight;

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: ${(props) => props.theme.Size.lg};
  padding-top: ${StatusBarHeight}px;
  background-color: ${(props) => props.theme.Colors.Background[50]};
`;

export const CategoryContainer = styled.View`
  height: 73px;
  margin-top: 34px;
`;

export const MenuContainer = styled.View``;

export const Footer = styled.View`
  height: 110px;
  padding: 16px 24px;
  justify-content: center;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  background-color: ${(props) => props.theme.Colors.Background[50]};
`;

export const FooterContainer = styled.SafeAreaView``;
