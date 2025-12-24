import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const routeError = useRouteError();

 
  const error =
    routeError && typeof routeError === "object" && "statusText" in routeError
      ? (routeError as { statusText?: string; message?: string })
      : { statusText: undefined, message: "Unknown error" };

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
