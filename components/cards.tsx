"use client";
import { Suspense, useState } from "react";
import Modal from "@/components/modal";
import Details from "@/app/details";

export default function Cards({ movies }: { movies: MoviesInterface }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [imdb, setImdb] = useState("");
    const setModal = (id: string) => {
        setIsModalOpen(true);
        setImdb(id);
    };
    return (
        <div className="flex justify-center pt-5">
            {movies.Response === "True" ? (
                <div className="grid grid-cols-5 gap-4 mt-5">
                    {movies.Search.map((movie) => (
                        <div
                            key={movie.imdbID}
                            onClick={() => setModal(movie.imdbID)}
                        >
                            <Card movie={movie} />
                        </div>
                    ))}
                </div>
            ) : (
                <h1 className="text-5xl text-blue-700 font-bold text-center">
                    No Movies Found
                </h1>
            )}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <Suspense fallback={<div>Loading...</div>}>
                    <Details imdb={imdb} />
                </Suspense>
            </Modal>
        </div>
    );
}

export function Card({ movie }: { movie: SearchResult }) {
    return (
        <div className="p-2 border-2 rounded-md shadow-md shadow-blue-300/50 hover:shadow-blue-500/50 hover:border-blue-500 transition-all duration-300 ease-in-out">
            <img
                className="w-40 h-[14rem] object-fit"
                src={movie.Poster}
                alt={movie.Title}
            />
        </div>
    );
}
