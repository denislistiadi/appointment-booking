import useSWR from "swr";
import { fetcher } from "@/lib/config";

export const useDoctorList = () => {
    const { data, error } = useSWR("/doctors?populate=*", fetcher);
    return { data: data?.data || [], loading: !error && !data };
  };