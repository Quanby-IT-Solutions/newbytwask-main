"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { DatePicker } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import { FileUpload } from "@/components/ui/file-upload";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const _ValID = () => {
  // Initialize react-hook-form
  const form = useForm({
    defaultValues: {
      cardtype: "",
      idnum: "",
      doe: null,
      uploadvalid: "",
    },
  });

  const cardtypeOption = [
    { key: "national", label: "National ID" },
    { key: "drivers", label: "Driver's License" },
    { key: "tin", label: "Tin ID" },
  ];

  const [files, setFiles] = useState<File[]>([]);

  const handleFileUpload = (files: File[]) => {
    setFiles(files);
    form.setValue('uploadvalid', files); // Optionally store the file in form
    console.log(files);
  };

  return (
    <motion.main className="gap-10">
      <div className="flex flex-col w-full h-fit items-center rounded-none md:rounded-2xl shadow-input bg-white dark:bg-black">
        <p className="flex font-bold text-base text-neutral-800 dark:text-neutral-200">
          Personal Information
        </p>

        <Form {...form}>
          <form className="w-full my-10 p-4">
            {/* ID Card Type Field */}
            <FormField
              control={form.control}
              name="cardtype"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormControl>
                    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                      <Select 
                        label="ID Card Type"
                        placeholder="Card Type"
                        labelPlacement="outside"
                        size="md"
                        radius="sm"
                        variant="bordered"
                        isRequired
                        {...field} 
                      >
                        {cardtypeOption.map((cardtype) => (
                          <SelectItem key={cardtype.key} value={cardtype.key}>
                            {cardtype.label}
                          </SelectItem>
                        ))}
                      </Select>
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />

            {/* ID Number Field */}
            <FormField
              control={form.control}
              name="idnum"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormControl>
                    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                      <Input 
                        type="text"  // Use "text" or "number"
                        label="ID Number"
                        labelPlacement="outside"
                        placeholder="0000 000 0000"
                        size="md"
                        radius="sm" 
                        variant="bordered"
                        isRequired
                        {...field} 
                      />
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Expiry Date Field */}
            <FormField
              control={form.control}
              name="doe"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormControl>
                    <div className="w-full flex flex-row gap-4">
                      <DatePicker
                        label="Expiry Date"
                        labelPlacement="outside"
                        size="md"
                        radius="sm"
                        variant="bordered"
                        showMonthAndYearPickers
                        isRequired
                        value={field.value || null} // Ensure controlled input
                        onChange={(date) => field.onChange(date)} // Update form value
                      />
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />

            {/* File Upload Field  */}
            <FormField
                control={form.control}
                name="uploadvalid"
                render={({ field }) => (
                  <FormItem className="mb-4">
                      <Label className="text-sm text-gray-400 font-light" htmlFor="password">Upload a valid ID Card</Label>
                      <div className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
                        <FileUpload onChange={handleFileUpload} />
                      </div>
                  </FormItem>
                )}
              />
          </form>
        </Form>
      </div>
    </motion.main>
  );
};

export default _ValID;
