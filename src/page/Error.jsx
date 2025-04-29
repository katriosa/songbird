import { useRouteError } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ErrorPage = () => {
  const { t } = useTranslation();
  const error = useRouteError();

  return (
    <div className="centred">
      <h1>{t("errorPage.notFound")}</h1>
      <p>{error.data}</p>
    </div>
  );
};
export default ErrorPage;
