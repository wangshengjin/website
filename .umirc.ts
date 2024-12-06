import { defineConfig } from 'umi';

export default defineConfig({
	outputPath: 'dist',
	hash: true,
	copy: [
		{ from: 'app-ads.txt', to: 'dist/app-ads.txt' },
	]
});