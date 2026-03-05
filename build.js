// Build the project with Bun
const result = await Bun.build({
    entrypoints: ["src/index.html"],
    outdir: "dist",
    sourcemap: "linked",
    minify: true,
    format: "esm",
    naming: "[dir]/[name].[ext]",
    splitting: true,
    jsx: {
        factory: "h",
        importSource: "preact",
        runtime: "automatic",
    },
});

if (!result.success) {
    console.error("Build failed:");
    for (const message of result.logs) {
        console.error(message);
    }
    process.exit(1);
}

console.log("Build complete → dist/");
