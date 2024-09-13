type Movie = {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: string;
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: string;
};

interface Search {
    s: string;
    y: string;
}

interface MoviesInterface {
    Response: string;
    Search: SearchResult[];
    totalResults: string;
}
type SearchResult = {
    Poster: string;
    Title: string;
    Type: string;
    Year: string;
    imdbID: string;
};
