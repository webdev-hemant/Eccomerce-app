import ReactDOM from "react-dom";

interface IProps {
  children: JSX.Element;
  targetDiv: string;
}

const ReactPortal = ({
  children = <span></span>,
  targetDiv = "hi",
}: IProps) => {
  return ReactDOM.createPortal(
    children,
    document.getElementById(targetDiv) as HTMLElement
  );
};

export default ReactPortal;
