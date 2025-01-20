"use client";
import {
   Form,
   FormControl,
   FormDescription,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";
import { FormFieldType } from "./PatientForm";
import Image from "next/image";

import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

interface CustomeProps {
   control: Control<any>;
   fieldType: FormFieldType;
   name: string;
   label?: string; //?: means optional
   placeholder?: string;
   iconSrc?: string;
   iconAlt?: string;
   disabled?: boolean;
   dateFormat?: string;
   showTimeSelect?: boolean;
   children?: React.ReactNode;
   renderSkeleton?: (field: any) => React.ReactNode; //used when we want to show a loading state for an input field
}

//functional component to render all diff kind of inputs
const RenderField = ({ field, props }: { field: any; props: CustomeProps }) => {
   const { fieldType, iconSrc, iconAlt, placeholder } = props;

   switch (fieldType) {
      case FormFieldType.INPUT:
         return (
            <div className="flex rounded-md border border-dark-500 bg-dark-400">
               {iconSrc && (
                  <Image
                     src={iconSrc}
                     height={24}
                     width={24}
                     alt={iconAlt || "icon"}
                     className="ml-2"
                  />
               )}

               <FormControl>
                  <Input
                     placeholder={placeholder}
                     {...field}
                     className="shad-input border-0"
                  />
               </FormControl>
            </div>
         );
      case FormFieldType.PHONE_INPUT:
         return (
            <FormControl>
               <PhoneInput
                  defaultCountry="IN"
                  placeholder={placeholder}
                  international
                  withCountryCallingCode
                  value={field.value} //for typescript
                  onChange={field.onChange}
                  className="input-phone"
               />
            </FormControl>
         );
      default:
         break;
   }
};

const CustomFormFields = (props: CustomeProps) => {
   const { fieldType, control, name, label, placeholder, iconSrc, iconAlt } =
      props; //destructured

   return (
      <FormField
         control={control}
         name={name}
         render={({ field }) => (
            <FormItem className="flex-1">
               {fieldType !== FormFieldType.CHECKBOX && label && (
                  <FormLabel>{label}</FormLabel>
               )}
               <RenderField field={field} props={props} />

               <FormMessage className="shad-error" />
            </FormItem>
         )}
      />
   );
};

export default CustomFormFields;
