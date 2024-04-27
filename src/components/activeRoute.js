import { writable } from "svelte/store";

export let activeRoute = writable("");

export function updateActiveRoute(route) {
  activeRoute.set(route);
}
