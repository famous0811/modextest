import { action, observable } from "mobx";

interface Movieprops {
  id: number;
  title: string;
  rate?: number;
}
class Movie {
  id;
  title;
  rate;

  constructor({ id, title, rate = 0 }: Movieprops) {
    this.id = id;
    this.title = title;
    this.rate = rate;
  }
}

export default class MovieStore {
  @observable movies: Movieprops[] = [
    new Movie({ id: 0, title: "test", rate: 5 }),
    new Movie({ id: 1, title: "test2", rate: 1 }),
  ];

  @action CreateMovie(title:string, rate:number) {
    this.movies = [
      ...this.movies,
      new Movie({ id: this.movies[this.movies.length - 1].id, title, rate }),
    ];
  }
  @action DeleteMovie(id: number) {
    this.movies.filter((data) => data.id !== id);
  }
  @action ChangeMovie(id: number,rate:number) {
    this.movies.map((data) =>
      data.id === id ? { ...data, rate } : data
    );
  }
}
