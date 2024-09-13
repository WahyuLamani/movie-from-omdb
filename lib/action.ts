"use server";
const api = `${process.env.API_END_POINT}?apikey=${process.env.API_KEY}&`;

const fetching = async (query: string) => {
    const response = await fetch(`${api}${query}`);
    return response.json();
};

export { fetching };
