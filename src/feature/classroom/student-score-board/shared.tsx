import styled from "styled-components";
import { Window } from "../../../components/Window";
import { Tabs } from "../../../components/Tabs";

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 24px;
`;

export const ClassTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 600;
  margin: 24px;
  margin-right: 0px;
`;

export const StyledWindow = styled(Window)`
  display: flex;
  flex-direction: column;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const StyledTabs = styled(Tabs)`
  flex-grow: 1;
`;

export const sortByName = (a: string, b: string) => a.localeCompare(b);
export const sortByScore = (a: number, b: number) => b - a;
