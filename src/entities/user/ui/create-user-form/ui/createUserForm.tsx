import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { UserFormFields } from "@/entities/user/ui/userFormFields";
import { UseFormReturn } from "react-hook-form";
import { UserFormData } from "@/entities/user/model/userSchema";

type CreateUserFormProps = {
  form: UseFormReturn<UserFormData>;
  onSubmit: (data: UserFormData) => void;
  submitText?: string;
};

export const CreateUserForm = ({
  form,
  onSubmit,
  submitText = "Создать",
}: CreateUserFormProps) => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <UserFormFields form={form} />
        <Button type="submit" className="w-full">
          {submitText}
        </Button>
      </form>
    </Form>
  );
};
