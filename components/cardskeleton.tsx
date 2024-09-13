export default function CardsSkeleton() {
    return (
        <div className="flex justify-center pt-5">
            <div className="grid grid-cols-5 mt-5 gap-4">
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
            </div>
        </div>
    );
}
export function CardSkeleton() {
    return (
        <div className="p-2 border-2 rounded-md shadow-md shadow-blue-300/50">
            <div className="animate-pulse flex space-x-4">
                <div className="w-40 h-[14rem] bg-slate-200 h-10 w-10"></div>
            </div>
        </div>
    );
}
