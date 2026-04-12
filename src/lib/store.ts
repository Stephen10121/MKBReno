import { writable } from "svelte/store";

export const isContactModalOpen = writable(false);
export const mobileMenuOpen = writable(false);
export const loading = writable(false);
export const topHeaderStatus = writable<"show" | "hide">("show");
export const turnstileWidgetId = writable("");