import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({ fallback: '404.html' }),
		paths: {
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH,
		},
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				// Allow links to assets (PDFs, images) that may not yet be added to /static.
				// The pages still render; the link just 404s until the file is dropped in.
				if (/\.(pdf|png|jpg|jpeg|gif|svg|webp)$/i.test(path)) {
					return;
				}
				throw new Error(message);
			},
			handleMissingId: 'warn',
		},
	},
};

export default config;
