<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';

	export let src: string = 'https://dummyimage.com/600x400/000/fff';
	export let alt: string = '';
	export let width: number = 600;
	export let height: number = 600;

	let elementOnce: HTMLElement;
	let intersectOnce: boolean;
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
		{alt}
		{width}
		{height}
	/>
</IntersectionObserver>
