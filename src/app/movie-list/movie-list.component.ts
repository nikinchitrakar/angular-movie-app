import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movieList = [];
  title = '';

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) { 
    router.events.subscribe((val) => {
      this.ngOnInit();
  });
  }

  ngOnInit() {
    this.title = this.route.snapshot.paramMap.get('title');
    this.apiService.getMovieByName(this.title).subscribe((res)=> {
      this.movieList = res['Search'];
    });
  }

  getPoster(imageUrl){
    if (imageUrl=="N/A"){
      imageUrl = 'assets/img/welcome_header.jpg';
    }
    return imageUrl;
  }

}
