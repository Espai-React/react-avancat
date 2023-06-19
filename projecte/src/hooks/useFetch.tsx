import { useEffect, useState } from 'react';

export const useFetch = <T,>(url: string) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, seterror] = useState(false);
  const [data, setData] = useState<T>();

  console.log('useState houses', data);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((d: T) => {
        console.log('fetch data', d);
        setData(d);
        setLoading(false);
      })
      .catch(() => {
        seterror(true);
        setLoading(false);
      });
	}, [url]);
	
	return {
		loading,
		error,
		data
	};
};
