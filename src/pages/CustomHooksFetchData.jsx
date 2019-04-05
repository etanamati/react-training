import React, { useState, useEffect } from "react";

// Referência
// https://itnext.io/react-hooks-tutorial-on-developing-a-custom-hook-for-data-fetching-8ad5840db7ae

const Error = ({ error }) => <span>Error:{error.message}</span>;
const Loading = () => <span>Loading...</span>;

const DisplayRemoteData = () => {
  const { error, data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/1"
  );
  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (!data) return null;
  return <span>RemoteData:{data.title}</span>;
};

const CustomHooksFetchData = () => <DisplayRemoteData />;

const useFetch = url => {
  const [error] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  useEffect(() => {
    (async () => {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setLoading(false);
    })();
  }, [url]);
  return { error, loading, data };
};

export default CustomHooksFetchData;
