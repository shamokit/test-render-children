<script lang="ts">
  import Test from '../lib/Test.svelte'
  import {mediaQueryAction} from '../lib/mediaQuery.store.action'
  let { children } = $props();
</script>

<svelte:document use:mediaQueryAction />
<div class="test">
  <Test />
  <div class="test2">
    {@render children()}
  </div>
</div>
