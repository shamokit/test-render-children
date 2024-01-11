export async function load({ fetch }) {
	const [response1, response2] = await Promise.all([
		fetch('https://svatus.pages.dev/status/200'),
		fetch('https://svatus.pages.dev/status/200'),
	]);
	const [data1, data2] = await Promise.all([
		response1.json(),
		response2.json(),
	]);
	return {
		data1,
		data2,
	};
}
