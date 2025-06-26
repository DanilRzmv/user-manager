"use client";

import { FC, JSX, ReactElement, ReactNode, useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/shared/ui/shadcn/dialog";
import { CloseModal } from "@/shared/types/ui/modal";

type ModalProps = {
  children: ({ close }: CloseModal) => JSX.Element;
  trigger: ReactElement;
};

type ModalCompound = {
  Header: FC<{ title: string; description?: string }>;
  Content: FC<{ children: ReactNode }>;
};

const Modal: FC<ModalProps> & ModalCompound = ({ children, trigger }) => {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      {children({ close })}
    </Dialog>
  );
};

Modal.Header = ({ title, description }) => (
  <DialogHeader>
    <DialogTitle>{title}</DialogTitle>
    {description && <DialogDescription>{description}</DialogDescription>}
  </DialogHeader>
);

Modal.Content = ({ children }) => (
  <DialogContent className="sm:max-w-[425px]">{children}</DialogContent>
);

export { Modal };
