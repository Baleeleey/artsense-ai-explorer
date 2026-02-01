import { useState, useCallback } from "react";
import { Upload, Image as ImageIcon, X } from "lucide-react";

interface UploadZoneProps {
  onImageSelect: (file: File | null) => void;
  selectedImage: File | null;
}

const UploadZone = ({ onImageSelect, selectedImage }: UploadZoneProps) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      onImageSelect(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  }, [onImageSelect]);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onImageSelect(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  }, [onImageSelect]);

  const clearImage = useCallback(() => {
    onImageSelect(null);
    setPreviewUrl(null);
  }, [onImageSelect]);

  return (
    <div
      className={`upload-zone cursor-pointer ${isDragOver ? "dragover" : ""} ${selectedImage ? "has-image" : ""}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={() => !selectedImage && document.getElementById("file-input")?.click()}
    >
      <input
        id="file-input"
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        className="hidden"
      />

      {selectedImage && previewUrl ? (
        <div className="relative fade-in">
          <button
            onClick={(e) => {
              e.stopPropagation();
              clearImage();
            }}
            className="absolute -top-4 -right-4 z-10 p-2 rounded-full bg-card shadow-md hover:bg-accent transition-colors"
          >
            <X className="w-4 h-4 text-muted-foreground" />
          </button>
          <div className="flex flex-col items-center gap-4">
            <div className="relative overflow-hidden rounded-xl shadow-lg max-w-md mx-auto">
              <img
                src={previewUrl}
                alt="Preview"
                className="w-full h-auto max-h-80 object-contain"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              {selectedImage.name}
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="p-4 rounded-full bg-secondary">
            {isDragOver ? (
              <ImageIcon className="w-10 h-10 text-primary" />
            ) : (
              <Upload className="w-10 h-10 text-muted-foreground" />
            )}
          </div>
          <div>
            <p className="text-lg font-medium text-foreground mb-1">
              {isDragOver ? "Déposez l'image ici" : "Glissez-déposez une œuvre d'art"}
            </p>
            <p className="text-sm text-muted-foreground">
              ou cliquez pour sélectionner un fichier
            </p>
          </div>
          <p className="text-xs text-muted-foreground">
            PNG, JPG jusqu'à 10MB
          </p>
        </div>
      )}
    </div>
  );
};

export default UploadZone;
