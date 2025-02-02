import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { type RegisterFormSchema } from "~/features/forms/register";

type RegisterFormInnerProps = {
    handleRegisterSubmit: (values: RegisterFormSchema) => void,
    isLoading?: boolean
}

export const RegisterFormInner = ({handleRegisterSubmit, isLoading} : RegisterFormInnerProps) => {
    const [showPassword , setShowPassword] = useState<boolean>(false)
    const form = useFormContext<RegisterFormSchema>()

  return (
    <form
      onSubmit={form.handleSubmit(handleRegisterSubmit)}
      className="flex flex-col gap-y-1"
    >
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input type="email" placeholder="Masukkan Email" {...field} />
            </FormControl>
            <FormDescription />
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Masukkan Password"
                {...field}
              />
            </FormControl>
            <FormDescription />
            <FormMessage />
          </FormItem>
        )}
      />
      <Label className="mt-2 flex items-center gap-2">
        <Checkbox
          checked={showPassword}
          onCheckedChange={(checked) => setShowPassword(!!checked)}
        />
        Show Password
      </Label>
      <Button type="submit" className="mt-4 w-full" disabled={isLoading}>
        Buat Akun
      </Button>
    </form>
  );
};
