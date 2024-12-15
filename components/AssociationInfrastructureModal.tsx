import React, { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AssociationInfrastructureModalProps {
  isOpen: boolean;
  onClose: () => void;
  associationInfrastructure: {
    title: string;
    description: string;
    images: string[];
  } | null;
}

export function AssociationInfrastructureModal({
  isOpen,
  onClose,
  associationInfrastructure,
}:AssociationInfrastructureModalProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!isOpen || !associationInfrastructure) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{associationInfrastructure.title}</h2>
          <Button
            onClick={onClose}
            variant="ghost"
            size="icon"
            className="text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Close modal"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
        <p className="mb-6">{associationInfrastructure.description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {associationInfrastructure.images.map((src, index) => (
            <div key={index} className="relative aspect-video cursor-pointer">
              <Image
                src={src}
                alt={`${associationInfrastructure.title} image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
                onClick={() => setSelectedImage(src)}
              />
            </div>
          ))}
        </div>
      </div>
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-60">
          <div className="relative w-full h-full max-w-4xl max-h-[90vh]">
            <Image
              src={selectedImage}
              alt="Full size image"
              layout="fill"
              objectFit="contain"
            />
            <Button
              onClick={() => setSelectedImage(null)}
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              aria-label="Close full size image"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
