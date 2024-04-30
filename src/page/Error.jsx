import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="centred">
      <h1>Страница не найдена! (404)</h1>
      <p>{error.data}</p>
    </div>
  );
};
export default ErrorPage;
