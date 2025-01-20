"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomFormFields from "./CustomFormFields";
import { useState } from "react";
import SubmitButton from "../SubmitButton";

export enum FormFieldType {
   INPUT = "input",
   CHECKBOX = "checkbox",
   TEXTAREA = "textarea",
   PHONE_INPUT = "phoneInput",
   DATE_PICKER = "datePicker",
   SELECT = "select",
   SKELETON = "skeleton",
}

const formSchema = z.object({
   username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
   }),
});

const PatientForm = () => {
   const [isLoading, setIsLoading] = useState(false);


   // 1. Define form.
   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         username: "",
      },
   });

   // 2. Define on submit handler.
   function onSubmit(values: z.infer<typeof formSchema>) {
      // Do something with the form values.
      // ✅ This will be type-safe and validated.
      console.log(values);
   }

   return (
      <Form {...form}>
         <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 flex-1"
         >
            <section className="mb-12 space-y-4">
               <h1 className="header">Hi there 👋</h1>
               <p className="text-dark-700">Schedule your first appointment.</p>
            </section>

            {/* NAME */}
            <CustomFormFields
               fieldType={FormFieldType.INPUT} //to render diff kind of inputs..
               control={form.control}
               name="name"
               label="Full Name"
               placeholder="Jigx"
               iconSrc="/assets/icons/user.svg"
               iconAlt="User Icon"
            />

            {/* EMAIL */}
            <CustomFormFields
               fieldType={FormFieldType.INPUT}
               control={form.control}
               name="email"
               label="Email"
               placeholder="jigx.lab@gmail.com"
               iconSrc="/assets/icons/email.svg"
               iconAlt="Email Icon"
            />

            {/* Phone Number */}
            <CustomFormFields
               fieldType={FormFieldType.PHONE_INPUT}
               control={form.control}
               name="phone"
               label="Phone Number"
               placeholder="000 000 0000"
               iconSrc="/assets/icons/phone.svg"
               iconAlt="Phone Icon"
            />

            <SubmitButton isLoading={isLoading} className="">
               Get Started
            </SubmitButton>
         </form>
      </Form>
   );
};

export default PatientForm;
