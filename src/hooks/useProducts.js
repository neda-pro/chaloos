import { useQuery } from "@tanstack/react-query";
import { request } from "../utils/axios-utils";

const getAllProducts = () => {
  return request({ url: "/products", method: "GET" });
};
const getAllCategories = () => {
  return request({ url: "/products/categories", method: "GET" });
};
const getProduct = (id) => {
  return request({ url: `/products/${id}`, method: "GET" });
};

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
    select: (data) => data.data,
  });
};

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategories,
    select: (data) => data.data,
  });
};

export const useProduct = (id) => {
  return useQuery({
    queryKey: ["product"],
    queryFn: () => getProduct(id),
    select: (data) => data.data,
  });
};
