import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhotoService } from '../services/photo.service';
import { BackgroundService } from '../services//background.service';
import { AuthService } from '../services//auth.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css'],
})
export class PhotoListComponent implements OnInit {
  photos: any[] = [];
  currentPage = 1;
  itemsPerPage = 12;
  totalItems = 0;
  pagesToShow = 8; 

  constructor(
    private photoService: PhotoService,
    private backgroundService: BackgroundService,
    private authService: AuthService,
    private router: Router 
  ) {}

  ngOnInit(): void {
    this.loadPhotos();
  }

  loadPhotos(): void {
    const offset = (this.currentPage - 1) * this.itemsPerPage;
    this.photoService.getPhotos(offset, this.itemsPerPage).subscribe(
      (data: any) => {
        this.photos = data.photos;
        this.totalItems = data.total_photos !== undefined ? data.total_photos : 0;
      },
      (error) => {
        console.error('Error loading photos', error);
      }
    );
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadPhotos();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadPhotos();
    }
  }

  setPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.loadPhotos();
    }
  }

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  get pageRange(): number[] {
    const start = Math.max(1, this.currentPage);
    const end = Math.min(this.totalPages, start + this.pagesToShow - 1);
    return Array.from({ length: end - start + 1 }, (_, i) => i + start + 1);
  }

  setBackground(url: string): void {
    this.backgroundService.setBackgroundUrl(url);
  }

  logout(): void {
    console.log('Logging out...');
    this.authService.logout();
    this.router.navigate(['']); // Redirect to login directly
  }
}
