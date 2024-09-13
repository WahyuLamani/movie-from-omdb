import Searching from "@/app/serching";

export default async function Home() {
    return (
        <div className="h-min-screen flex flex-col gap-6 pt-5">
            <h2 className="font-bold uppercase text-3xl text-center text-blue-500 opacity-85 text-shadow-lg shadow-blue-300/50">
                Search your Movie
            </h2>
            <Searching />
            
        </div>
    );
}
