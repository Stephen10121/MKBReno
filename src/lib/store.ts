import { writable } from "svelte/store";

export const isContactModalOpen = writable(false);
export const mobileMenuOpen = writable(false);
export const loading = writable(false);