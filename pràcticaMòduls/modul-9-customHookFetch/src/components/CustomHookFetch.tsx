import { FC } from "react";
import { useFetch } from "./useFetch";

type TCustomHookFetch = {
  url: string;
};

const CustomHookFetch: FC<TCustomHookFetch> = ({ url }) => {
  const { estat } = useFetch(url);
  const { loading, error, dades } = estat;
  console.log("dades", dades, "loading", loading, "error", error);

  return (
    <div>
      <h3>Custom Hook Fetch</h3>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div>
        {dades?.map(({ href, data }) => (
          <ul key={href}>
            {data.map(({ title }) => (
              <p>{title}</p>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default CustomHookFetch;
