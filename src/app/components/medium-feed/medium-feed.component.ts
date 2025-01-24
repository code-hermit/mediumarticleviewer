import { Component, OnInit } from '@angular/core';
import { MediumFeedService } from '../../services/medium-feed.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-medium-feed',
  templateUrl: './medium-feed.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./medium-feed.component.css'],
})
export class MediumFeedComponent implements OnInit {
  articles: any[] = [];
  selectedArticle: any | null = null;
  generatedImageUrl: string | null = null;
  username: string = '@kirubakaranrajendran'; // Replace with your Medium username

  constructor(private mediumFeedService: MediumFeedService) {}

  async ngOnInit() {
    this.articles = await this.mediumFeedService.fetchMediumFeed(this.username);
  }

  showArticle(article: any) {
    this.selectedArticle = article;
  }

  backToList() {
    this.selectedArticle = null;
  }
}
