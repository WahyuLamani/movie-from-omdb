interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export default function Pagination({
    currentPage,
    totalPages,
    onPageChange,
}: PaginationProps) {
    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        const maxPageNumbersToShow = 5;

        if (totalPages <= maxPageNumbersToShow) {
            // Tampilkan semua halaman jika total halaman lebih kecil atau sama dengan batas
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(
                    <button
                        key={i}
                        onClick={() => onPageChange(i)}
                        className={`px-3 py-2 border rounded-lg ${
                            currentPage === i
                                ? "bg-blue-500 text-white"
                                : "hover:bg-gray-200"
                        }`}
                    >
                        {i}
                    </button>
                );
            }
        } else {
            // Tampilkan beberapa halaman + titik-titik jika total halaman lebih banyak
            let startPage = currentPage <= 3 ? 1 : currentPage - 2;
            let endPage =
                currentPage >= totalPages - 2 ? totalPages : currentPage + 2;

            if (startPage > 1) {
                pageNumbers.push(
                    <button
                        key={1}
                        onClick={() => onPageChange(1)}
                        className={`px-3 py-2 border rounded-lg ${
                            currentPage === 1
                                ? "bg-blue-500 text-white"
                                : "hover:bg-gray-200"
                        }`}
                    >
                        1
                    </button>
                );
                if (startPage > 2) {
                    pageNumbers.push(
                        <span key="start-dots" className="px-3 py-2">
                            ...
                        </span>
                    );
                }
            }

            for (let i = startPage; i <= endPage; i++) {
                pageNumbers.push(
                    <button
                        key={i}
                        onClick={() => onPageChange(i)}
                        className={`px-3 py-2 border rounded-lg ${
                            currentPage === i
                                ? "bg-blue-500 text-white"
                                : "hover:bg-gray-200"
                        }`}
                    >
                        {i}
                    </button>
                );
            }

            if (endPage < totalPages) {
                if (endPage < totalPages - 1) {
                    pageNumbers.push(
                        <span key="end-dots" className="px-3 py-2">
                            ...
                        </span>
                    );
                }
                pageNumbers.push(
                    <button
                        key={totalPages}
                        onClick={() => onPageChange(totalPages)}
                        className={`px-3 py-2 border rounded-lg ${
                            currentPage === totalPages
                                ? "bg-blue-500 text-white"
                                : "hover:bg-gray-200"
                        }`}
                    >
                        {totalPages}
                    </button>
                );
            }
        }

        return pageNumbers;
    };

    return (
        <div className="flex justify-center items-center space-x-2 mt-6">
            {/* Tombol Previous */}
            <button
                onClick={handlePrevious}
                className={`px-3 py-2 border rounded-lg ${
                    currentPage === 1
                        ? "cursor-not-allowed opacity-50"
                        : "hover:bg-gray-200"
                }`}
                disabled={currentPage === 1}
            >
                Previous
            </button>

            {/* Tombol untuk halaman */}
            {renderPageNumbers()}

            {/* Tombol Next */}
            <button
                onClick={handleNext}
                className={`px-3 py-2 border rounded-lg ${
                    currentPage === totalPages
                        ? "cursor-not-allowed opacity-50"
                        : "hover:bg-gray-200"
                }`}
                disabled={currentPage === totalPages}
            >
                Next
            </button>
        </div>
    );
}
