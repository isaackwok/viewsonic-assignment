import styled from "styled-components";

export const LoadingSkeleton = styled.div`
  background: white;
  border-radius: ${({ theme }) => theme.radius.base}px;
  animation: loading 2s infinite ease-in-out;
`;
