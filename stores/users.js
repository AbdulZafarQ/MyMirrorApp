import { defineStore } from "pinia";
export const useUsersStore = defineStore("users", {
  state: () => ({
    users: [],
  }),
  actions: {
    async fetchUsers() {
      try {
        const response = await $fetch(
          "https://6496d67483d4c69925a32763.mockapi.io/v1/users"
        );
        if (response) {
          this.users = response;
          return response;
        } else {
          return [];
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {
    getUsers() {
      return this.users;
    },
  },
});
