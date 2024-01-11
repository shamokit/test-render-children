<script lang="ts">
	import '../lib/app.css';

	import { mediaQueryAction } from '$lib/mediaQuery.store.action';
	import { page } from '$app/stores';
  import Test from '../lib/Test.svelte'
  let { children } = $props();
</script>

<svelte:document use:mediaQueryAction />
<div class="test">
  <Test isHome={$page.route.id === '/'} />
  <div class="test2">
    {@render children()}
  </div>
</div>
