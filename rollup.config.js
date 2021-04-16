import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";
import typescript from '@rollup/plugin-typescript';
import sveltePreprocess from 'svelte-preprocess';


import pkg from "./package.json";

const name = pkg.name
	.replace(/^(@\S+\/)?(svelte-)?(\S+)/, "$3")
	.replace(/^\w/, (m) => m.toUpperCase())
	.replace(/-\w/g, (m) => m[1].toUpperCase());

const mode = process.env.NODE_ENV;
const dev = mode === "development";

export default {
	input: "src/index.js",
	output: [
		{ file: pkg.module, format: "es" },
		{ file: pkg.main, format: "umd", name },
	],
	plugins: [svelte({
		preprocess: sveltePreprocess({ sourceMap: dev }),
	}), resolve(),typescript({ sourceMap: dev })],
	
};
