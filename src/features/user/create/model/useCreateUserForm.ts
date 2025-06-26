"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserFormData, userSchema } from "@/entities/user/model/userSchema";

export const useCreateUserForm = (onSuccess: () => void) => {
  const form = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      age: 18,
    },
  });

  const onSubmit = async (data: UserFormData) => {
    console.log("User created:", data);
    onSuccess();
  };

  return {
    form,
    onSubmit,
  };
};
