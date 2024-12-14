import React from "react";
import Image from "next/image";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  review: {
    name: string;
    username: string;
    body: string;
    img: string;
  } | null;
}

export function Modal({ isOpen, onClose, review }: ModalProps) {
  if (!isOpen || !review) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{review.name}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src={review.img}
            alt={review.name}
            width={250}
            height={250}
            className="rounded-full mb-4"
          />
          <p className="text-center mb-2">{review.body}</p>
          {review.username && (
            <p className="text-sm text-gray-500">{review.username}</p>
          )}
        </div>
      </div>
    </div>
  );
}
