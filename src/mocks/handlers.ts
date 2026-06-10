import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("https://www.omdbapi.com/", ({ request }) => {
    const url = new URL(request.url);
    const id = url.searchParams.get("i");

    if (id === "tt9999999") {
      return HttpResponse.json({
        Response: "False",
        Error: "Incorrect IMDb ID.",
      });
    }

    return HttpResponse.json({
      imdbID: "tt0372784",
      Title: "Batman Begins",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMzA2NDQzZDEtNDU5Ni00YTlkLTg2OWEtYmQwM2Y1YTBjMjFjXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      Year: "2005",
      Type: "movie",
      Plot: "After witnessing his parents death, billionaire Bruce Wayne learns the art of fighting to confront injustice. When he returns to Gotham as Batman, he must stop a secret society that intends to destroy the city.",
      Actors: "Christian Bale, Michael Caine, Ken Watanabe",
      Genre: "Action, Crime, Drama",
      Director: "Christopher Nolan",
      Response: "True",
    });
  }),
];
