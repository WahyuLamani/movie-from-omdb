"use client";
import { fetching } from "@/lib/action";
import { useEffect, useState } from "react";
export default function Details({ imdb }: { imdb: string }) {
    const [movie, setMovie] = useState<Movie>({
        Title: "",
        Year: "",
        Rated: "",
        Released: "",
        Runtime: "",
        Genre: "",
        Director: "",
        Writer: "",
        Actors: "",
        Plot: "",
        Language: "",
        Country: "",
        Awards: "",
        Poster: "",
        Ratings: "",
        Metascore: "",
        imdbRating: "",
        imdbVotes: "",
        imdbID: "",
        Type: "",
        DVD: "",
        BoxOffice: "",
        Production: "",
        Website: "",
        Response: "",
    });
    useEffect(() => {
        const result = async () => {
            const response: Movie = await fetching(`i=${imdb}`);
            setMovie(response);
            console.log(response);
        };
        result();
    }, [imdb]);
    return (
        <div className="px-6 py-4">
            {/* Poster */}
            <div className="flex gap-3 mb-4">
                <img
                    className="w-auto h-auto max-h-80 object-cover"
                    src={movie.Poster}
                    alt={`${movie.Title} Poster`}
                />
                {/* Title and Year */}
                <div>
                    <div className="font-bold text-xl mb-2">
                        {movie.Title} ({movie.Year})
                    </div>
                    {/* Plot */}
                    <p className="text-gray-700 text-base mb-4">{movie.Plot}</p>
                </div>
            </div>
            <div className="">
                {/* Movie Details */}
                <ul className="text-sm text-gray-600 mb-2">
                    <li>
                        <strong>Rated:</strong> {movie.Rated}
                    </li>
                    <li>
                        <strong>Released:</strong> {movie.Released}
                    </li>
                    <li>
                        <strong>Runtime:</strong> {movie.Runtime}
                    </li>
                    <li>
                        <strong>Genre:</strong> {movie.Genre}
                    </li>
                    <li>
                        <strong>Director:</strong> {movie.Director}
                    </li>
                    <li>
                        <strong>Writer:</strong> {movie.Writer}
                    </li>
                    <li>
                        <strong>Actors:</strong> {movie.Actors}
                    </li>
                    <li>
                        <strong>Language:</strong> {movie.Language}
                    </li>
                    <li>
                        <strong>Country:</strong> {movie.Country}
                    </li>
                    <li>
                        <strong>Awards:</strong> {movie.Awards}
                    </li>
                    <li>
                        <strong>Metascore:</strong> {movie.Metascore}
                    </li>
                    <li>
                        <strong>IMDb Rating:</strong> {movie.imdbRating} (
                        {movie.imdbVotes} votes)
                    </li>
                    <li>
                        <strong>Box Office:</strong> {movie.BoxOffice}
                    </li>
                    <li>
                        <strong>Production:</strong> {movie.Production}
                    </li>
                </ul>

                {/* Website */}
                {movie.Website !== "N/A" && (
                    <a
                        href={movie.Website}
                        className="text-blue-500 hover:underline cursor-pointer"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Official Website
                    </a>
                )}
            </div>
        </div>
    );
}
