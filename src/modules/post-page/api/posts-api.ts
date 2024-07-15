import API from "@/package/config/axios";
import * as postTypes from "../interfaces/posts-types";

export const apiGetPosts = () => {
  return API.get<Array<postTypes.IPost>>("posts");
};
