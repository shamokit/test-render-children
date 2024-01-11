<script lang="ts">
  import Test from '../lib/Test.svelte'
  let { children } = $props();
</script>
<div class="test">
  <Test />
  <div class="test2">
    {@render children()}
  </div>
</div>
