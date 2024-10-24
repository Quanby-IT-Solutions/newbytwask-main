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
import { Separator } from "@/components/ui/separator";


const _PersonalDetails = () => {
  // Initialize react-hook-form
  const form = useForm({
    defaultValues: {
      state: "",
      localgov: "",
      address: "",
      housenum: "",
      landmark: "",
    },
  });

  
  const stateOption = [
    { key: "male", label: "Male" },
    { key: "female", label: "Female" },
    { key: "other", label: "Other" },
  ];

  const localgovOption = [
    { key: "male", label: "Male" },
    { key: "female", label: "Female" },
    { key: "other", label: "Other" },
  ];

  return (
      <motion.main className="gap-10">
        <div className="flex flex-col w-full h-fit items-center rounded-none md:rounded-2xl shadow-input bg-white dark:bg-black">
          <p className="flex font-bold text-base text-neutral-800 dark:text-neutral-200">
            Address
          </p>

          <Form {...form}>
            <form className="w-full my-10 p-4">
              {/* State Selection */}
              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem className="mb-4">
                    <FormControl>
                      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                        <Select 
                          label="State"
                          placeholder="Select state"   
                          labelPlacement="outside"
                          size="md"
                          radius="sm"
                          variant="bordered"
                          isRequired
                          {...field} 
                        >
                          {stateOption.map((state) => (
                            <SelectItem key={state.key}>
                              {state.label}
                            </SelectItem>
                          ))}
                        </Select>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Local Government Selection */}
              <FormField
                control={form.control}
                name="localgov"
                render={({ field }) => (
                  <FormItem className="mb-4">
                    <FormControl>
                      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                        <Select 
                          label="Local Government"
                          placeholder="Select local government"   
                          labelPlacement="outside"
                          size="md"
                          radius="sm"
                          variant="bordered"
                          isRequired
                          {...field} 
                        >
                          {localgovOption.map((localgov) => (
                            <SelectItem key={localgov.key}>
                              {localgov.label}
                            </SelectItem>
                          ))}
                        </Select>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Address Field */}
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem className="mb-4">
                    <FormControl>
                      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                        <Input 
                          type="address" 
                          label="Address"    
                          labelPlacement="outside"
                          placeholder="Enter your detailed address"
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

              {/* House Number Field */}
              <FormField
                control={form.control}
                name="housenum"
                render={({ field }) => (
                  <FormItem className="mb-4">
                    <FormControl>
                      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                        <Input 
                          type="housenumber" 
                          label="House Number"    
                          labelPlacement="outside"
                          placeholder="Enter your house number"
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

              <Separator className="m-4"/>

              {/* Landmark Field */}
              <FormField
                control={form.control}
                name="landmark"
                render={({ field }) => (
                  <FormItem className="mb-4">
                    <FormControl>
                      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                        <Input 
                          type="landmark" 
                          label="Landmark (Optional)"    
                          labelPlacement="outside"
                          placeholder="Select landmark close to your address"
                          size="md"
                          radius="sm" 
                          variant="bordered"
                          isRequired
                          {...field} 
                        />
                      </div>
                    </FormControl>
                    <FormDescription>Landmarks could be schools, supermarkets, popular places around your address.</FormDescription>
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