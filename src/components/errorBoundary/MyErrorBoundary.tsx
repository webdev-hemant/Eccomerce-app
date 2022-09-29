import { ErrorBoundary } from "react-error-boundary";

interface IProps {
  children: JSX.Element;
  FallbackComponent?: any;
}
const MyFallback = () => <h1>Error is occured </h1>;

const MyErrorBoundary = (props: IProps) => {
  const { children, FallbackComponent } = props;

  const customError = (error: any, errorInfo: any) => {
    console.log({ error, errorInfo });
  };

  return (
    <ErrorBoundary
      FallbackComponent={FallbackComponent || MyFallback}
      onError={customError}
    >
      {children}
    </ErrorBoundary>
  );
};
export default MyErrorBoundary;
