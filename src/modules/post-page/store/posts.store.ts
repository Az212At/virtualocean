import { defineStore } from "pinia";
import * as postTypes from "../interfaces/posts-types";
import * as postAPI from "../api/posts-api";

export const usePostStore = defineStore("post-store", {
  state: () => ({
    posts: [] as Array<postTypes.IPost>,
  }),

  actions: {
    getPosts() {
      return new Promise((resolve, reject) => {
        postAPI
          .apiGetPosts()
          .then((response) => {
            this.posts = response.data;
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
});
