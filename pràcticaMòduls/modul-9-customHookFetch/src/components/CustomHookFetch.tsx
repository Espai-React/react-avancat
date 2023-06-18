import { useFetch } from "./useFetch";

const CustomHookFetch = () => {
  const { estat } = useFetch(
    "https://images-api.nasa.gov/search?q=apollo%2011"
	);
  const { loading, error, dades } = estat;
	console.log("dades", dades, "loading", loading, "error", error);

  return (
    <div>
      <h3>Custom Hook Fetch</h3>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};

export default CustomHookFetch;
