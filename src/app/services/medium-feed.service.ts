import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MediumFeedService {
  constructor() {}

  async fetchMediumFeed(username: string): Promise<any[]> {
    const url = `https://medium.com/feed/@${username}`;
    const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(
      url
    )}`;

    try {
      const response = await fetch(proxyUrl);
      const data = await response.json();
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(data.contents, 'text/xml');

      const items = xmlDoc.querySelectorAll('item');
      const articles = Array.from(items).map((item) => {
        const title = item.querySelector('title')?.textContent || '';
        const link = item.querySelector('link')?.textContent || '';
        const content = item.querySelector('encoded')?.textContent || ''; // Namespace handled via 'encoded'
        const pubDate = item.querySelector('pubDate')?.textContent || '';

        return { title, link, content, pubDate };
      });

      return articles;
    } catch (error) {
      console.error('Error fetching Medium feed:', error);
      return [];
    }
  }
}
