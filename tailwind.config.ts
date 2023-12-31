import daisyui from 'daisyui'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [daisyui],
	daisyui: {
		themes: ["default",
		"retro",
		"cyberpunk",
		"valentine",
		"aqua"],
	}
}


