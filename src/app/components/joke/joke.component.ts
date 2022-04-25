import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Joke } from 'src/app/models/joke';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  public joke:Joke={
    id:0,
    category:'',
    joke:'',
    lang:'',
    safe:false,
    type:''
  };

  public isLoading:boolean = true;
  public isError:boolean=false;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.loadJoke();
  }

  private loadJoke(){
    this.isLoading=true;
    this.http.get<Joke>('https://v2.jokeapi.dev/joke/Any?type=single').subscribe({ next:(response) => {
      this.joke=response;
      this.isLoading=false;
    },
    error:(error) => {
      this.isLoading=false;
      this.isError=true;
    }
  })
  }

  nextJoke(){
    this.loadJoke();
  }

}
