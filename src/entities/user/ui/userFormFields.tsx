import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { UserFormData } from "@/entities/user/model/userSchema";

type UserFormFieldsProps = {
  form: UseFormReturn<UserFormData>;
};

export const UserFormFields = ({ form }: UserFormFieldsProps) => (
  <>
    <FormField
      control={form.control}
      name="firstName"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Имя</FormLabel>
          <FormControl>
            <Input placeholder="Иван" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />

    <FormField
      control={form.control}
      name="lastName"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Фамилия</FormLabel>
          <FormControl>
            <Input placeholder="Иванов" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />

    <FormField
      control={form.control}
      name="email"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input placeholder="ivan@example.com" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />

    <FormField
      control={form.control}
      name="age"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Возраст</FormLabel>
          <FormControl>
            <Input
              type="number"
              min={18}
              {...field}
              onChange={(e: { target: { value: string } }) =>
                field.onChange(Number(e.target.value))
              }
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  </>
);
