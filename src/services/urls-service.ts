const URLS: Record<
	'development' | 'test' | 'rc' | 'production',
	Record<string, string>
> = {
	development: {
		messages:
			'https://run.mocky.io/v3/736f396b-dad8-4f7c-a9ff-35e2dc22d3bf'
	},
	test: {
		messages:
			'https://run.mocky.io/v3/736f396b-dad8-4f7c-a9ff-35e2dc22d3bf'
	},
	rc: {
		messages:
			'https://run.mocky.io/v3/736f396b-dad8-4f7c-a9ff-35e2dc22d3bf'
	},
	production: {
		messages:
			'https://run.mocky.io/v3/736f396b-dad8-4f7c-a9ff-35e2dc22d3bf'
	}
};

export function getUrls(
	environment: 'development' | 'test' | 'rc' | 'production' = 'development'
) {
	return URLS[environment];
}
