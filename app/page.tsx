import Image from "next/image";
import PatientForm from "@/components/forms/PatientForm";
import Link from "next/link";

export default function Home() {
   return (
      <div className="flex h-screen max-h-screen">
         
         {/* todo: OTP Verification | Passkey Model */}

         <section className="remove-scrollbar container my-auto">
            <div className="sub-container max-w-[496px] text-white">
               <Image
                  src="/assets/icons/logo-full.svg"
                  height={1000}
                  width={1000}
                  alt="patient"
                  className="mb-12 h-10 f-fit"
               />

               {/* form */}
               <PatientForm />

               {/* kind of footer */}
               <div className="text-14-regular mt-20 flex justify-between">
                  <p className="justify-items-end text-dark-600 xl:text-left">
                     © 2025 Patient Management System. All rights reserved.
                  </p>
                  <Link href="/?admin=true" className="text-green-500">
                     Admin
                  </Link>
               </div>
            </div>
         </section>

         <Image
          src="/assets/images/onboarding-img.jpg"
          height={1000}
          width={1000}
          alt="patient"
          className="side-img max-w-[50%] opacity-50 fit-cover"
        />
      </div>
   );
}
