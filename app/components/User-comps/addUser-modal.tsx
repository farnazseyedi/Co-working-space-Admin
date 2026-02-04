"use client";

import { Dialog, DialogContent } from "@/app/components/ui/dialog";
interface AddUserModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export default function AddUserModal({ isOpen, onClose }: AddUserModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <div>hi farnaz</div>
      </DialogContent>
    </Dialog>
  );
}
