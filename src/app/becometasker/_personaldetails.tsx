"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { DatePicker } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Input } from "@nextui-org/input";
import { Select, SelectItem} from "@nextui-org/select";

const _PersonalDetails = () => {
  // Initialize react-hook-form
  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      gender: "",
      dob: null,
    },
  });

  const genderOptions = [
    { key: "male", label: "Male" },
    { key: "female", label: "Female" },
    { key: "other", label: "Other" },
  ];

  return (
      <motion.main className="gap-10">
        <div className="flex flex-col w-full h-fit items-center rounded-none md:rounded-2xl shadow-input bg-white dark:bg-black">
          <p className="flex font-bold text-base text-neutral-800 dark:text-neutral-200">
            Personal Information
          </p>

          <Form {...form}>
            <form className="w-full my-10 p-4">
              {/* First Name Field */}
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="mb-4">
                    <FormControl>
                      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                        <Input 
                          type="firstname" 
                          label="First Name"    
                          labelPlacement="outside"
                          placeholder="Sean"
                          size="md"
                          radius="sm"
                          variant="bordered"
                          isRequired
                          className="bg-white" 
                          {...field} 
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Last Name Field */}
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="mb-4">
                    <FormControl>
                      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                        <Input 
                          type="lastname" 
                          label="Last Name"    
                          labelPlacement="outside"
                          placeholder="Palacay"
                          size="md"
                          radius="sm" 
                          variant="bordered"
                          isRequired
                          {...field} 
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Gender Selection */}
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem className="mb-4">
                    <FormControl>
                      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                        <Select 
                          label="Gender"
                          placeholder="Select an animal"   
                          labelPlacement="outside"
                          size="md"
                          radius="sm"
                          variant="bordered"
                          isRequired
                          {...field} 
                        >
                          {genderOptions.map((gender) => (
                            <SelectItem key={gender.key}>
                              {gender.label}
                            </SelectItem>
                          ))}
                        </Select>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Date of Birth */}
              <FormField
                control={form.control}
                name="dob"
                render={({ field }) => (
                  <FormItem className="mb-4">
                    <FormControl>
                      <div className="w-full flex flex-row gap-4">
                        <DatePicker
                          label="Date of Birth"
                          labelPlacement="outside"
                          size="md"
                          radius="sm"
                          variant="bordered"
                          showMonthAndYearPickers
                          isRequired
                          {...field} 
                        />
                      </div>
                    </FormControl>
                    <FormDescription>Your date of birth is used to calculate your age.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </div>
      </motion.main>
  );
};

export default _PersonalDetails;
