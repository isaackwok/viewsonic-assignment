import styled from "styled-components";

interface WindowProps {
  $backgroundColor?: string;
}

export const Window = styled.div<WindowProps>((props) => ({
  backgroundColor: props.$backgroundColor ?? "#EBEBEB",
  boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.1)",
  borderRadius: `${props.theme.radius.base}px`,
  width: "100%",
  height: "100%",
  overflow: "hidden",
  position: "relative",
}));
