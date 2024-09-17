import { ReactNode } from "react";
interface ModalProps {
    size?: string;
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

export default function Modal({ size, isOpen, onClose, children }: ModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 overflow-hidden">
            <div
                className={`bg-white p-6 rounded-lg shadow-lg ${
                    size ?? "max-w-3xl"
                } relative w-full max-h-screen overflow-hidden`}
            >
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                >
                    ✕
                </button>
                <div className="overflow-y-scroll max-h-[80vh] pr-4 hide-scrollbar">
                    {children}
                </div>
            </div>
        </div>
    );
}
