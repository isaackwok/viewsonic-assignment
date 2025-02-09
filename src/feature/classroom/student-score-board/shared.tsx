import styled from "styled-components";
import { Window } from "../../../components/Window";

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
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

export const GridWrapper = styled.div`
  flex-grow: 1;
  background: white;
  padding: 12px;
  overflow-y: auto;
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
