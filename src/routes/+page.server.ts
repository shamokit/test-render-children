export const prerender = true;
export const load = async ({ fetch }) => {
	const [qiitaResponse, zennResponse] = await Promise.all([
		fetch(
			'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fqiita.com%2Fshamokit%2Ffeed.atom'
		),
		fetch(
			'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fzenn.dev%2Fshamokit%2Ffeed'
		),
	]);
	const [qiita, zenn] = await Promise.all([
		qiitaResponse.json(),
		zennResponse.json(),
	]);
	const [response1, response2] = await Promise.all([
		fetch('https://svatus.pages.dev/status/200'),
		fetch('https://svatus.pages.dev/status/200'),
	]);
	const [data1, data2] = await Promise.all([
		response1.json(),
		response2.json(),
	]);
	return {
		zenn: zenn.items.slice(0, 3),
		qiita: qiita.items.slice(0, 3),
		data1,
		data2,
	};
};
