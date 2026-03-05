import index from "./index.html";

Bun.serve({
    port: 3000,
    routes: {
        // Serve the SPA shell for all routes so client-side routing works
        "/*": index,
    },
    development: {
        hmr: true,
        console: true,
    },
});

console.log("Server started on http://localhost:3000");
