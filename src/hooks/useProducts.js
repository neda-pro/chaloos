import { useQuery } from "@tanstack/react-query";
import { request } from "../utils/axios-utils";

const getAllCategoriesHelper = () => {
  return request({ url: "/products/categories", method: "GET" });
};
const getProductHelper = (id) => {
  return request({ url: `/products/${id}`, method: "GET" });
};

const getProductsHelper = (query) => {
  const serialize = (obj) => {
    var str = [];
    for (var p in obj)
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    return str.join("&");
  };
  return request({ url: `/products?${serialize(query)}` });
};

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategoriesHelper,
    select: (data) => data.data,
  });
};

export const useProduct = (id) => {
  return useQuery({
    queryKey: ["product"],
    queryFn: () => getProductHelper(id),
    select: (data) => data.data,
  });
};

export const useProducts = (query) => {
  return useQuery({
    queryKey: ["products-with-query"],
    queryFn: () => getProductsHelper(query),
    select: (data) => data.data,
  });
};
