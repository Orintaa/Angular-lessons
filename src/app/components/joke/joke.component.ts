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

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.loadJoke();
  }

  private loadJoke(){
    this.http.get<Joke>('https://v2.jokeapi.dev/joke/Any?type=single').subscribe( (response) => {
      this.joke=response;
    })
  }

  nextJoke(){
    this.loadJoke();
  }

}
