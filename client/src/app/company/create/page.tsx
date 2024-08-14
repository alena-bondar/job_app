"use client";

import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import "@/styles/globals.css";
import { useForm, Controller } from "react-hook-form";
import { CompanyData } from '@/types';
import { companySchema, FormData, initialValuesCompany } from '@/app/company/create/validation';

const CreateCompanyPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(companySchema),
    defaultValues: initialValuesCompany,
  });

  const onSubmit = async (values: Omit<CompanyData, 'companyId'>) => {
    try {
      const response = await axios.post(`/api/company`, values);
      if (response.status === 200) {
        reset();
        window.location.replace("/company");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-8 shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">Create a new company</h1>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label
            htmlFor="companyName"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <Controller
            name="companyName"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                id="companyName"
                className="mt-1 block w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm sm:text-sm"
              />
            )}
          />
          {errors.companyName && (
            <div className="text-red-500 text-sm mt-1">
              {errors.companyName.message}
            </div>
          )}
        </div>
        <div>
          <label
            htmlFor="companyEmail"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <Controller
            name="companyEmail"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="email"
                id="companyEmail"
                className="mt-1 block w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm sm:text-sm"
              />
            )}
          />
          {errors.companyEmail && (
            <div className="text-red-500 text-sm mt-1">
              {errors.companyEmail.message}
            </div>
          )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-cyan-600"
        >
          {isSubmitting ? "Creation..." : "Create"}
        </button>
      </form>
    </div>
  );
};

export default CreateCompanyPage;
