import { Injectable } from '@angular/core';
import Parser from 'rss-parser';

@Injectable({
  providedIn: 'root',
})
export class MediumFeedService {
  private parser: Parser = new Parser({
    customFields: {
      item: ['content:encoded'], // Include the full article content
    },
  });

  constructor() {}

  async fetchMediumFeed(username: string): Promise<any[]> {
    const url = `https://medium.com/feed/@${username}`;
    const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(
      url
    )}`;
    try {
      const response = await fetch(proxyUrl);
      const data = await response.json();
      const feed = await this.parser.parseString(data.contents);
      return feed.items; // Array of articles with full content
    } catch (error) {
      console.error('Error fetching Medium feed:', error);
      return [];
    }
  }
}
