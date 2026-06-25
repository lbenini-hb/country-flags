import { defineConfig } from "tsup";

export default defineConfig({
	entry: {
		"country-flags": "./src/index.ts",
	},
	format: ["esm"],
	outDir: "dist-single",
	outExtension() {
		return {
			js: ".js",
		};
	},
	dts: false,
	splitting: false,
	clean: true,
	skipNodeModulesBundle: true,
	shims: true,
});
