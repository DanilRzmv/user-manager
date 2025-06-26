import { z } from "zod";

export const userSchema = z.object({
  firstName: z.string().min(2, "Имя должно содержать минимум 2 символа"),
  lastName: z.string().min(2, "Фамилия должна содержать минимум 2 символа"),
  email: z.string().email("Некорректный email"),
  age: z.number().min(18, "Минимальный возраст 18 лет"),
});

export type UserFormData = z.infer<typeof userSchema>;
