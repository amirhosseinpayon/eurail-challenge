import { useState, useEffect } from "react";

import httpAgent from "../http/http-agent";

interface Props {
  method: string,
  url: string,
  payload?: any
}

export const useApi = ({method, url, payload}: Props) => {
  const [response, setResponse] = useState<any>(null);
  const [reject, setReject] = useState<any>(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const call = async () => {

      const httpAgentMethod = Reflect.get(httpAgent, method)
      
      try {
        setLoading(true);
        const { data }: any = await httpAgentMethod(url, payload);
        setResponse(data.results);

      } catch(error) {
        setReject(error)
      } finally {
        setLoading(false);
      }

    };

    call();
  }, [url, method, payload]);

  return {
    loading,
    response,
    reject,
  };
};
