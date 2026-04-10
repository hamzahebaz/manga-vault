const fs = require('fs');
const path = require('path');

async function fetchMangaDex() {
  console.log("Fetching top manga from MangaDex API...");
  try {
    const url = 'https://api.mangadex.org/manga?limit=30&includes[]=cover_art&includes[]=author&order[followedCount]=desc&contentRating[]=safe&contentRating[]=suggestive';
    const res = await fetch(url);
    const data = await res.json();
    
    if (!data.data) {
      console.error("No data found from MangaDex API", data);
      return;
    }

    const mangas = data.data.map(manga => { // Manga object mapping
      const id = manga.id;
      // Get title (fallback to en, or first available)
      const titleObj = manga.attributes.title || {};
      const titleEn = titleObj.en || titleObj.ja || Object.values(titleObj)[0] || 'Unknown';
      const slug = titleEn.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      
      const descObj = manga.attributes.description || {};
      
      // Cover Art
      const coverRel = manga.relationships.find(r => r.type === 'cover_art');
      const authorRel = manga.relationships.find(r => r.type === 'author');
      
      let coverImage = '';
      if (coverRel && coverRel.attributes && coverRel.attributes.fileName) {
          coverImage = `https://uploads.mangadex.org/covers/${id}/${coverRel.attributes.fileName}.512.jpg`;
      }
      
      let author = authorRel && authorRel.attributes ? authorRel.attributes.name : 'Unknown';
      
      const year = manga.attributes.year || 2020;
      const statusMap = {
          'ongoing': 'Ongoing',
          'completed': 'Completed',
          'hiatus': 'Hiatus',
          'cancelled': 'Completed'
      };
      const status = statusMap[manga.attributes.status] || 'Ongoing';
      
      return {
          id: id,
          slug: slug || id,
          title: {
              en: titleEn,
              fr: titleObj.fr || titleEn
          },
          synopsis: {
              en: descObj.en || "No English description available.",
              fr: descObj.fr || descObj.en || "Pas de description en français."
          },
          coverImage: coverImage,
          author: author,
          year: year,
          status: status,
          chapters: manga.attributes.lastChapter ? parseInt(manga.attributes.lastChapter) : 0,
          genres: manga.attributes.tags.filter(t => t.attributes.group === 'genre').map(t => t.attributes.name.en).slice(0, 3) || ['Manga'],
          rating: parseFloat((Math.random() * (9.9 - 8.0) + 8.0).toFixed(1)), // Mock rating
          ratingCount: Math.floor(Math.random() * 100000)
      };
    });

    const fileContent = `export type Manga = {
  id: string;
  slug: string;
  title: Record<string, string>;
  synopsis: Record<string, string>;
  coverImage: string;
  author: string;
  year: number;
  status: 'Ongoing' | 'Completed' | 'Hiatus';
  chapters: number;
  genres: string[];
  rating: number;
  ratingCount: number;
};

export const mockMangaDB: Manga[] = ${JSON.stringify(mangas, null, 2)};

export function getTrendingManga() {
   return mockMangaDB.slice(0, 10);
}

export function searchManga(query: string, locale: string = 'en') {
   return mockMangaDB.filter(m => {
     const t = m.title[locale] || m.title.en || '';
     return t.toLowerCase().includes(query.toLowerCase()) || m.author.toLowerCase().includes(query.toLowerCase());
   });
}
`;

    fs.writeFileSync(path.join(__dirname, 'src', 'lib', 'mock-data.ts'), fileContent);
    console.log(`Successfully wrote ${mangas.length} mangas to mock-data.ts`);
  } catch (error) {
    console.error("Error fetching MangaDex:", error);
  }
}

fetchMangaDex();
