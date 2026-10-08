const {
    writeFile,
    readFile,
    readdir,
    rm,
} = require("fs").promises;
const { join } = require("path");

const main = async () => {
    const outDir = join(__dirname, "out");
    const file = await readFile(join(outDir, "404/index.html"));
    await writeFile(join(outDir, "404.html"), file);

    // Keep only assets used by the board notices site in the public release.
    const publicFiles = new Set(["404", "404.html", "_next", "favicon.ico", "index.html", "sitemap.xml", "top-bg.webp", "top-mobile.webp", "ymca-logo.webp"]);
    const outputEntries = await readdir(outDir, { withFileTypes: true });
    for (const entry of outputEntries) {
        if (!publicFiles.has(entry.name)) {
            await rm(join(outDir, entry.name), { recursive: true, force: true });
        }
    }

    // Legacy routes are not published; remove their unreferenced page bundles too.
    const pageChunksDir = join(outDir, "_next/static/chunks/pages");
    const pageChunks = await readdir(pageChunksDir, { withFileTypes: true });
    const publishedPageChunk = /^(404|_app|_error|index)-[^/]+\.js$/;
    for (const entry of pageChunks) {
        if (entry.isDirectory() || !publishedPageChunk.test(entry.name)) {
            await rm(join(pageChunksDir, entry.name), { recursive: true, force: true });
        }
    }
};

main();
