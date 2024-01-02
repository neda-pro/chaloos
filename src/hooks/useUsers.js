import { useQuery } from "@tanstack/react-query";
import { request } from "../utils/axios-utils";

const getUsersHelper = () => {
  return request({ url: "/users/1" });
};

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: () => getUsersHelper(),
    select: (data) => data.data,
  });
};
