<script lang="ts">
	import Image from '../lib/Image.svelte';
	import Day from '../lib/Day.svelte';
	let { data } = $props();
	let { data1, data2, zenn, qiita, thinkings, photos } = data;
</script>

<svelte:head>
	<title>test</title>
</svelte:head>
test data1: {JSON.stringify(data1)}<br />
data2: {JSON.stringify(data2)}

zenn
<ul>
	{#each zenn as post}
		<li>
			{@html post.title.replace(/\r?\n/g, '<br />')}<br />
		</li>
	{/each}
</ul>
qiita: {JSON.stringify(qiita)}<br />
thinkings: {JSON.stringify(thinkings)}<br />
photos: {JSON.stringify(photos)}
<ul>
	{#each data.photos as photo}
		<li>
			<a href="{photo.permalink}" target="_blank" rel="noopener noreferrer"
				><Image
					src="{photo.media_url}"
					alt="{photo.caption}"
					width="{600}"
					height="{600}"
				/><Day date="2023-01-28T14:21:18.984Z" /></a
			>
		</li>
	{/each}
</ul>
<Image height="{400}" />
