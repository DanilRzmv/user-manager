"use client";

import { Button } from "@/shared/ui/shadcn/button";
import { CreateUserForm } from "@/entities/user/ui/create-user-form";
import { useCreateUserForm } from "@/features/user/create/model/useCreateUserForm";
import { CloseModal } from "@/shared/types/ui/modal";
import { Modal } from "@/shared/ui";

export const CreateUserModal = ({ close }: CloseModal) => {
  const { form, onSubmit } = useCreateUserForm(() => {
    close();
    form.reset();
  });

  return (
    <>
      <Modal.Header
        title="Создание пользователя"
        description="Заполните все поля формы"
      />

      <Modal.Content>
        <CreateUserForm form={form} onSubmit={onSubmit} />
      </Modal.Content>
    </>
  );
};

export const CreateUserModalContainer = () => (
  <Modal trigger={<Button variant="outline">Создать пользователя</Button>}>
    {({ close }: CloseModal) => <CreateUserModal close={close} />}
  </Modal>
);
