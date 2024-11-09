"use client";
import Cards from "@/components/cards";
import CardsSkeleton from "@/components/cardskeleton";
import Modal from "@/components/modal";
import Pagination from "@/components/pagination";
import { fetching } from "@/lib/action";
import { formAction } from "@/lib/utils";
import { searchSchema } from "@/lib/validation";
import clsx from "clsx";
import { Suspense, useEffect, useState } from "react";

interface SearchRespons {
    success: boolean;
    data: Search;
}

export default function Searching() {
    const [display, setDisplay] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [error, setError] = useState<Record<string, string>>({});
    const [movies, setMovies] = useState<MoviesInterface>({
        Response: "",
        Search: [],
        totalResults: "",
    });
    const [param, setParam] = useState({
        y: "",
        s: "",
    });
    useEffect(() => {
        if (movies.totalResults)
            setTotalPage(
                Math.ceil(parseInt(movies.totalResults) / movies.Search.length)
            );
    }, [param]);
    useEffect(() => {
        if (display) getData(param);
    }, [currentPage]);
    const getData = async (data: Search) => {
        const results: MoviesInterface = await fetching(
            `y=${data.y}&s=${data.s}&page=${currentPage}`
        );
        return setMovies(results);
    };
    const submitForm = async (e: any) => {
        e.preventDefault();
        const { data, success }: SearchRespons = formAction(e, searchSchema);
        if (success) {
            setError({});
            const results: MoviesInterface = await fetching(
                `y=${data.y}&s=${data.s}&page=${currentPage}`
            );
            setParam(data);
            setDisplay(true);
            console.log(results);
            setMovies(results);
            setCurrentPage(1);
        } else {
            const errorMessage: Record<string, string> = {};
            Object.entries(data).forEach(([key, value]) => {
                const { _errors } = value;
                if (_errors) {
                    errorMessage[key] = _errors[0];
                }
            });
            setError(errorMessage);
        }
    };
    return (
        <div>
            <div className="flex flex-col gap-2">
                <form
                    onSubmit={submitForm}
                    className="flex justify-center gap-2"
                >
                    <div className="flex items-center">
                        <label htmlFor="title" className="px-2 text-xl">
                            Title :
                        </label>
                        <div>
                            <input
                                type="text"
                                name="s"
                                id="title"
                                placeholder="Search Movie"
                                className={clsx(
                                    "px-4 py-2 border-2 rounded-md shadow-md shadow-blue-300/50 transition-all duration-300 ease-in-out",
                                    {
                                        "border-red-300 hover:border-red-500 outline-red-500 focus:border-red-500 shadow-red-300/50 animate-shake":
                                            error.s,
                                        "border-blue-300 hover:border-blue-500 outline-blue-500 focus:border-blue-500 shadow-blue-300/50":
                                            !error.s,
                                    }
                                )}
                                autoComplete="off"
                            />
                        </div>
                    </div>
                    <div className="flex items-center">
                        <label htmlFor="year" className="px-2 text-xl">
                            Year :
                        </label>
                        <input
                            type="text"
                            name="y"
                            id="year"
                            placeholder="Year"
                            className="px-4 py-2 border-2 rounded-md border-blue-300 hover:border-blue-500 outline-blue-500 focus:border-blue-500 shadow-md shadow-blue-300/50 transition-all duration-300 ease-in-out"
                            autoComplete="off"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 shadow-md shadow-blue-300/50 hover:shadow-blue-500/50"
                    >
                        Search
                    </button>
                </form>
            </div>

            <div className="mt-5">
                {display && (
                    <>
                        <Suspense fallback={<CardsSkeleton />}>
                            <Cards movies={movies} />
                        </Suspense>
                        {totalPage > 1 && (
                            <Pagination
                                currentPage={currentPage}
                                totalPages={totalPage}
                                onPageChange={(page: number) => {
                                    setCurrentPage(page);
                                }}
                            />
                        )}
                    </>
                )}
            </div>
        </div>
    );
}
