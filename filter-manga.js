const fs = require('fs');
const path = require('path');

const mockPath = path.join(__dirname, 'src', 'lib', 'mock-data.ts');
let content = fs.readFileSync(mockPath, 'utf8');

// The DB array is exported as: export const mockMangaDB: Manga[] = [...]
// We can use regex to extract the JSON array, parse it, filter it, and put it back.
const match = content.match(/export const mockMangaDB: Manga\[\] = (\[[\s\S]*?\]);\n\nexport function getTrending/);

if (match) {
    try {
        const jsonStr = match[1];
        const mangas = JSON.parse(jsonStr);

        // Filter out romance, harem, hentai
        const filtered = mangas.filter(m => {
            const forbidden = ['Romance', 'Harem', 'Hentai', 'Ecchi', 'Erotica', 'Smut'];
            return !m.genres.some(g => forbidden.includes(g));
        });

        console.log(`Original count: ${mangas.length}, Filtered count: ${filtered.length}`);

        const newJsonStr = JSON.stringify(filtered, null, 2);
        content = content.replace(jsonStr, newJsonStr);

        fs.writeFileSync(mockPath, content);
        console.log('Successfully filtered mock-data.ts');
    } catch (e) {
        console.error('Failed to parse or filter data:', e);
    }
} else {
    console.error('Could not find mockMangaDB array in mock-data.ts');
}
