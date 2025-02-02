'use client'
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { PageContainer } from "~/components/layout/PageContainer";
import { SectionContainer } from "~/components/layout/SectionContainer";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "~/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
} from "~/components/ui/form";
import {
  registerFormSchema,
  type RegisterFormSchema,
} from "~/features/forms/register";
import Link from "next/link";
import { RegisterFormInner } from "../components/RegisterFormInner";

const RegisterPage = () => {

  const form = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
  });

  const handleRegisterSubmit = (values: RegisterFormSchema) => {
    alert("Created Successfully");
  };

  return (
    <PageContainer title="Register Page">
      <SectionContainer className="flex min-h-[calc(100vh-144px)] w-full flex-col justify-center">
        <Card className="w-full max-w-[480px] self-center">
          <CardHeader className="flex flex-col items-center justify-center">
            {/* Logos Here */}
            <h1 className="text-3xl font-bold text-primary">Buat Akun</h1>
            <p className="text-muted-foreground">
              {" "}
              Qepoin Kreator Favorite Kamu
            </p>
          </CardHeader>

          <CardContent>
            <Form {...form}>
                <RegisterFormInner handleRegisterSubmit={handleRegisterSubmit}/>
            </Form>

            {/* Continue With Google */}
          </CardContent>

          <CardFooter className="flex flex-col gap-4">
            <div className="flex w-full items-center justify-between gap-x-4">
                <div className="h-[2px] w-full border-t-2"/> 
                <p className="flex-1 text-muted-foreground text-nowrap text-sm">Atau Lanjut Dengan</p>
                <div className="h-[2px] w-full border-t-2"/> 
            </div>

            <Button variant={"secondary"} className="w-full" size="lg">
                <FaGoogle/>
                Buat Akun Dengan Google
            </Button>

            <p className="flex gap-x-2">Sudah Punya akun ?<Link href="/login" className="text-purple-600 text-bold"> Login</Link></p>
          </CardFooter>
        </Card>
      </SectionContainer>
    </PageContainer>
  );
};
export default RegisterPage;
