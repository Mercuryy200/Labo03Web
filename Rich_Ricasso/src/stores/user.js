import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    isLoggedIn: false,
    userId: null,
  }),
  actions: {
    login(userId) {
      this.isLoggedIn = true;
      this.userId = userId;
      localStorage.setItem('userId', userId); 
    },
    logout() {
      this.isLoggedIn = false;
      this.userId = null;
      localStorage.removeItem('userId'); 
    },
    initialize() {
      const savedUserId = localStorage.getItem('userId');
      if (savedUserId) {
        this.isLoggedIn = true;
        this.userId = savedUserId;
      }
    },
  },
});
