import useTitle from "../hooks/useTitle";

function NotFound() {
  useTitle("Pagina non trovata - BennyOrder");
  return (
    <>
      <h1>Page not found</h1>
      <a href="/">Back to home</a>
    </>
  );
}
export default NotFound;
