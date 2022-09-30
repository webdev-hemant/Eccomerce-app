import ReactPortal from "components/portal/ReactPortal";

interface IProps {
  children: JSX.Element;
  open: boolean;
}
const MobileNavMenu = ({ children = <span></span>, open = false }: IProps) => {
  return open ? (
    <ReactPortal targetDiv="mobileNav">{children}</ReactPortal>
  ) : (
    <></>
  );
};

export default MobileNavMenu;
