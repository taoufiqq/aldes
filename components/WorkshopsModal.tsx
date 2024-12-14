import React from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    description: string;
    images: string[];
  };
}

export function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{service.title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>
        <p className="mb-6">{service.description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {service.images.map((src, index) => (
            <div key={index} className="relative aspect-video">
              <Image
                src={src}
                alt={`${service.title} image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
