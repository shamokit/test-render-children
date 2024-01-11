<script lang="ts">
	import { isMobile } from '$lib/mediaQuery.store.action';

	let { isHome = false } = $props<{
		isHome: boolean;
	}>();
	let tag = $derived(isHome ? 'h1' : 'p');
</script>

<svelte:element this="{tag}">test / {isHome}</svelte:element>
$isMobile: {$isMobile ? 'mobile' : 'desktop'}
