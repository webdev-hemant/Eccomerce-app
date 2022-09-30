import ReactPortal from "components/portal/ReactPortal";

interface IProps {
  children: JSX.Element;
  open: boolean;
}

const MyModal = ({ children = <span></span>, open = false }: IProps) => {
  return open ? (
    <ReactPortal targetDiv="myModal">{children}</ReactPortal>
  ) : (
    <></>
  );
};

export default MyModal;
