import {
	INSTAGRAM_BUSINESS_ACCOUNT_ID,
	INSTAGRAM_ACCESS_TOKEN,
} from '$env/static/private';
import { client } from '$lib/microcms.server';

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
	const [data1, data2, thinkings] = await Promise.all([
		response1.json(),
		response2.json(),
		client.getList({
			endpoint: 'thinking',
			queries: {
				limit: 9,
			},
		}),
	]);

	const instagramUrl = `https://graph.facebook.com/v15.0/${INSTAGRAM_BUSINESS_ACCOUNT_ID}?fields=name,media.limit(12){media_url,permalink,caption}&access_token=${INSTAGRAM_ACCESS_TOKEN}`;
	const photosResponse = await fetch(instagramUrl);
	const photos = (await photosResponse.json()) as {
		media: {
			data: {
				id: string;
				media_url: string;
				permalink: string;
				caption: string;
			}[];
		};
	};
	return {
		zenn: zenn.items.slice(0, 3),
		qiita: qiita.items.slice(0, 3),
		thinkings,
		photos: photos.media.data.map(({ permalink, media_url, caption }) => ({
			permalink,
			media_url,
			caption,
		})),
		data1,
		data2,
	};
};
