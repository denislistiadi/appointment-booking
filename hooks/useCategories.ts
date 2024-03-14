import useSWR from "swr";
import { fetcher } from "@/lib/config";

export const useCategories = () => {
    const { data, error } = useSWR("/categories?populate=*", fetcher);
    return { data: data?.data || [], loading: !error && !data };
  };