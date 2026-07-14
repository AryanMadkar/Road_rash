import fs from "fs";
import path from "path";
import { execSync } from "child_process";
// ============================
// CONFIG
// ============================

const ASSET_ROOT = path.resolve("D:\\buster\\car\\Mangos\\public\\data\\Exports\\gltf");
const OUTPUT_ROOT = path.resolve("./src/components/city");

// true = don't overwrite existing jsx files
const SKIP_EXISTING = true;

// ============================

function walk(dir) {
    let files = [];

    for (const file of fs.readdirSync(dir)) {
        const full = path.join(dir, file);

        if (fs.statSync(full).isDirectory()) {
            files.push(...walk(full));
        } else if (file.toLowerCase().endsWith(".gltf")) {
            files.push(full);
        }
    }

    return files;
}

function pascalCase(name) {
    return name
        .replace(".gltf", "")
        .replace(/[^a-zA-Z0-9]/g, " ")
        .split(" ")
        .filter(Boolean)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join("");
}

// Collect all existing JSX component names
function collectExistingNames(dir, set = new Set()) {
    if (!fs.existsSync(dir)) return set;

    for (const item of fs.readdirSync(dir)) {
        const full = path.join(dir, item);

        if (fs.statSync(full).isDirectory()) {
            collectExistingNames(full, set);
        } else if (item.endsWith(".jsx")) {
            set.add(path.parse(item).name);
        }
    }

    return set;
}

const existingNames = collectExistingNames(OUTPUT_ROOT);

const gltfFiles = walk(ASSET_ROOT);

let generated = 0;
let skipped = 0;
let failed = 0;

console.log(`\nFound ${gltfFiles.length} GLTF files\n`);

for (const file of gltfFiles) {

    const relative = path.relative(ASSET_ROOT, file);

    const folder = path.dirname(relative);

    const componentName = pascalCase(path.basename(file));

    // Skip duplicate component names anywhere
    if (existingNames.has(componentName)) {
        console.log(`⏭ Duplicate component name: ${componentName}`);
        skipped++;
        continue;
    }

    const outDir = path.join(OUTPUT_ROOT, folder);

    fs.mkdirSync(outDir, { recursive: true });

    const outFile = path.join(outDir, `${componentName}.jsx`);

    if (SKIP_EXISTING && fs.existsSync(outFile)) {
        console.log(`⏭ Already exists: ${outFile}`);
        skipped++;
        continue;
    }

    console.log(`⚙ Generating ${componentName}`);

    try {

        execSync(
            `npx gltfjsx "${file}" -o "${outFile}"`,
            {
                stdio: "inherit"
            }
        );

        existingNames.add(componentName);
        generated++;

    } catch (err) {
        console.error(`\n❌ Failed: ${componentName}`);

        console.error(err.message);

        if (err.stdout)
            console.error(err.stdout.toString());

        if (err.stderr)
            console.error(err.stderr.toString());

        failed++;
    }
}

console.log("\n=============================");
console.log(`Generated : ${generated}`);
console.log(`Skipped   : ${skipped}`);
console.log(`Failed    : ${failed}`);
console.log("=============================\n");