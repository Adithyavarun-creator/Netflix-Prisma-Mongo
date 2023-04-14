import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const useCurrentUser = () => {
  const { data, isLoading, mutate, error } = useSWR("/api/current", fetcher);

  return {
    data,
    isLoading,
    mutate,
    error,
  };
};

export default useCurrentUser;
