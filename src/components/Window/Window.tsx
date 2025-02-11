import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  addWindow,
  changeWindowVisibility,
  removeWindow,
} from "../../store/slices/windowsSlice";
import { RootState } from "../../store";

interface WindowProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  id: string; // The unique identifier of the window, stored in redux
  backgroundColor?: string;
  defaultVisible?: boolean;
  onHide?: () => void;
  onShow?: () => void;
}

const StyledWindow = styled.div<{
  $backgroundColor?: string;
  $visible: boolean;
}>((props) => ({
  backgroundColor: props.$backgroundColor ?? "#EBEBEB",
  boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.1)",
  borderRadius: `${props.theme.radius.base}px`,
  width: "100%",
  height: "100%",
  overflow: "hidden",
  position: "relative",
  visibility: props.$visible ? "visible" : "hidden",
}));

export const StyledCloseButton = styled(MdClose)({
  position: "absolute",
  top: 12,
  right: 12,
  cursor: "pointer",
});

export function Window({
  id,
  backgroundColor,
  children,
  defaultVisible = true,
  onHide,
  ...props
}: WindowProps) {
  const dispatch = useDispatch();
  const isVisible = useSelector(
    (state: RootState) => state.windows.windows[id]?.visible
  );
  useEffect(() => {
    // register window to global store
    dispatch(addWindow({ id, visible: defaultVisible }));

    return () => {
      // unregister window from global store when component unmounts
      dispatch(removeWindow({ windowId: id }));
    };
  }, [dispatch, id, defaultVisible]);

  function handleHide() {
    dispatch(changeWindowVisibility({ id, visible: false }));
    onHide?.();
  }

  return (
    <StyledWindow
      id={id}
      $backgroundColor={backgroundColor}
      $visible={isVisible}
      {...props}
    >
      <StyledCloseButton size={24} onClick={handleHide} />
      {children}
    </StyledWindow>
  );
}
