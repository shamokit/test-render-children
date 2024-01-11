import { onMount } from 'svelte';
import { writable } from 'svelte/store';
import type { Action } from 'svelte/action';
const BREAK_POINTS = {
	min: 375,
	sm: 600,
	md: 768,
	lg: 1120,
	xl: 1280,
	xlx: 1536,
} as const;

export const isMobile = writable(true);
export const mediaQueryAction: Action<Document> = () => {
	const mediaQuery = window.matchMedia(`(max-width: ${BREAK_POINTS.md}px)`);
	const handleMediaQuery = (matches: boolean) => {
		isMobile.set(matches);
	};
	onMount(() => {
		handleMediaQuery(mediaQuery.matches);
		mediaQuery.addEventListener('change', ({ matches }) =>
			handleMediaQuery(matches)
		);
		return () => {
			mediaQuery.removeEventListener(
				'change',
				({ matches }: MediaQueryListEvent) => handleMediaQuery(matches)
			);
		};
	});
};
