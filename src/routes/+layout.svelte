<script lang="ts">
	import { page } from '$app/stores';
  import Test from '../lib/Test.svelte'
  let { children } = $props();
</script>

<div class="test">
  <Test />
  {$page.route.id}
  <div class="test2">
    {@render children()}
  </div>
</div>
