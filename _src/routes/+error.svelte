<script>
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Error！{$page.status}</title>
</svelte:head>
<section>
	<div class="grid gap-12 container py-16 lg:py-28">
		<p>{$page.error?.message}</p>
	</div>
</section>
