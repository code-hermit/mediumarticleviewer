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
  fallbackImage: string = './../../../assets/squareoff.jpg';

  constructor(private mediumFeedService: MediumFeedService) {}
  convertToAlphanumeric(input: string) {
    return input.replace(/[^a-zA-Z0-9]/g, '');
  }
  get_image(title: string) {
    console.log(this.convertToAlphanumeric(title), 20);
    return `https://mediummeta.s3.ap-south-1.amazonaws.com/${this.convertToAlphanumeric(
      title
    )}.jpg`;
  }
  onImageError(event: Event) {
    (event.target as HTMLImageElement).src = this.fallbackImage;
  }

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
