<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';

	let elementOnce: HTMLElement;
	let intersectOnce: boolean;
	const src = 'https://dummyimage.com/600x400/000/fff';
	$: isIntersecting = false;
</script>

<IntersectionObserver
	once
	element="{elementOnce}"
	on:observe="{(e) => {
		isIntersecting = e.detail.isIntersecting;
	}}"
	bind:intersecting="{intersectOnce}"
>
	<img
		bind:this="{elementOnce}"
		src="{isIntersecting
			? src
			: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAQSURBVHgBAQUA+v8ADVBp/wL6AcYxvWp0AAAAAElFTkSuQmCC'}"
		alt=""
		width="600"
		height="400"
	/>
</IntersectionObserver>
