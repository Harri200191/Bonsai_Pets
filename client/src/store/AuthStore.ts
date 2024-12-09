import { create } from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  user: null | { name: string; email: string };
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  login: async (email: string, password: string) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    set({ isAuthenticated: true, user: { name: email.split('@')[0], email } });
  },
  signup: async (name: string, email: string, password: string) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    set({ isAuthenticated: true, user: { name, email } });
  },
  logout: () => {
    set({ isAuthenticated: false, user: null });
  },
}));