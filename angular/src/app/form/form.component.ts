import { ApiService } from './../api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [ApiService]
})
export class FormComponent {
  videoGames = [{title: 'Bushido Blade'}];
    selectedVideoGame;
  
  constructor(private api: ApiService){
    this.getVideoGames();
    this.selectedVideoGame = {id: -1, title: '', desc: '', console: '', year: 0};
  }
  getVideoGames = () => {
    this.api.getAllVideoGames().subscribe(
      data => {
        this.videoGames = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  videoGameClicked = (videoGame) => {
    this.api.getOneVideoGame(videoGame.id).subscribe(
      data => {
        this.selectedVideoGame = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  updateVideoGame = () => {
    this.api.updateVideoGame(this.selectedVideoGame).subscribe(
      data => {
        this.getVideoGames();
      },
      error => {
        console.log(error);
      }
    );
  }

  createVideoGame = () => {
    this.api.createVideoGame(this.selectedVideoGame).subscribe(
      data => {
        this.videoGames.push(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  deleteVideoGame = () => {
    this.api.deleteVideoGame(this.selectedVideoGame.id).subscribe(
      data => {
        this.getVideoGames();
      },
      error => {
        console.log(error);
      }
    );
  }

}
