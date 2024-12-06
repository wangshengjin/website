import { defineConfig } from 'umi';

export default defineConfig({
	outputPath: 'dist',
	hash: true,
	history: { type: 'hash' },
	copy: [
		{ from: 'app-ads.txt', to: 'dist/app-ads.txt' },
	]
});