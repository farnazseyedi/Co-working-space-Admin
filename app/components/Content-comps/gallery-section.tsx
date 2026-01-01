"use client";

import { useFormContext, useFieldArray } from "react-hook-form";
import {
  DndContext,
  closestCenter,
  DragEndEvent,
  useSensor,
  useSensors,
  PointerSensor,
  KeyboardSensor,
} from "@dnd-kit/core";
import {
  SortableContext,
  rectSortingStrategy,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import { Plus } from "lucide-react";
import { SortableImage } from "./sortable-image";
import { FormValues } from "@/app/lib/schemas/content-schema";
import { useEffect } from "react";
import { CardTitle } from "../ui/card";
import { Separator } from "../ui/seprator";

interface galleryProps{
  editMode : boolean;
}

export const GallerySection = ({editMode} : galleryProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormValues>();

  const { fields, append, remove, move } = useFieldArray({
    control,
    name: "gallery",
  });

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = fields.findIndex((item) => item.id === active.id);
      const newIndex = fields.findIndex((item) => item.id === over.id);
      move(oldIndex, newIndex);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      Array.from(files).forEach((file) => {
        append({
          id: Math.random().toString(36).substr(2, 9),
          file: file,
          preview: URL.createObjectURL(file),
        });
      });
    }
    e.target.value = "";
  };

  useEffect(() => {
    return () => {
      fields.forEach((field) => {
        if (field.file) URL.revokeObjectURL(field.preview);
      });
    };
  }, []);

  return (
    <section>
      <div className="flex items-center gap-4">
        <CardTitle className="text-xl font-bold text-neutral-900">
          گالری
        </CardTitle>
        <Separator className="flex-1 bg-neutral-400" />
      </div>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={fields.map((f) => f.id)}
          strategy={rectSortingStrategy}
        >
          <div className="w-218 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-9">
            {fields.map((field, index) => (
              <SortableImage
                key={field.id}
                id={field.id}
                preview={field.preview}
                onRemove={() => remove(index)}
              />
            ))}

            <label className={`${editMode ? "cursor-pointer group aspect-video flex flex-col items-center justify-center rounded-xl bg-neutral-200 transition-all" : "hidden"}`}>
              <div className="p-1 bg-neutral-200 rounded-full border-3 border-neutral-700">
                <Plus
                  size={32}
                  className="text-neutral-700 group-hover:text-neutral-700 "
                />
              </div>

              <input
                type="file"
                multiple
                accept="image/*"
                className="hidden"
                onChange={handleFileUpload}
              />
            </label>
          </div>
        </SortableContext>
      </DndContext>
      {errors.gallery && (
        <p className="text-error-500 text-sm mt-2">{errors.gallery.message}</p>
      )}
    </section>
  );
};
