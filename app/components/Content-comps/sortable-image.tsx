import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Image from "next/image";
import { XIcon } from "lucide-react";

interface SortableImageProps {
  id: string;
  preview: string;
  onRemove: () => void;
}

export const SortableImage = ({
  id,
  preview,
  onRemove,
}: SortableImageProps) => {
  const { setNodeRef, transform, transition, isDragging } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 50 : "auto",
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="relative group aspect-video rounded-xl overflow-hidden"
    >
      <Image
        src={preview}
        width={100}
        height={100}
        alt="gallery"
        className="w-full h-full object-cover hover:opacity-50"
      />
      <button
        type="button"
        onClick={onRemove}
        className="absolute top-2 right-2 p-0.5 rounded-md text-neutral-900 shadow-sm border opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <XIcon size={16} />
      </button>
    </div>
  );
};
