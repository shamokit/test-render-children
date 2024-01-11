<script lang="ts">
	let { data } = $props();
	let { data1, data2, zenn, qiita, thinkings, photos } = data;
</script>

test data1: {JSON.stringify(data1)}<br />
data2: {JSON.stringify(data2)}

zenn: {JSON.stringify(zenn)}<br />
qiita: {JSON.stringify(qiita)}<br />
thinkings: {JSON.stringify(thinkings)}<br />
photos: {JSON.stringify(photos)}
