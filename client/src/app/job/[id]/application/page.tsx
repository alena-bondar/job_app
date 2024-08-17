"use client";

import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import "@/styles/globals.css";
import { useForm, Controller } from "react-hook-form";
import { ApplicationData, JobDetailTypes } from "@/types";
import {
  applicationSchema,
  FormData,
  initialValuesApplication,
} from "@/app/job/[id]/application/validation";

const JobApplicationPage = ({ params }: JobDetailTypes) => {
  const { id } = params;

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(applicationSchema),
    defaultValues: initialValuesApplication,
  });

  const onSubmit = async (values: Omit<ApplicationData, "jobId">) => {
    const applicationData: ApplicationData = {
      ...values,
      jobId: id,
    };

    try {
      const response = await axios.post(`/api/appliances`, applicationData);
      if (response.status === 200) {
        reset();
        window.location.replace("/job");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-8 mt-8 shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">Apply for Job</h1>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label
            htmlFor="userName"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <Controller
            name="userName"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                id="userName"
                className="mt-1 block w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm sm:text-sm"
              />
            )}
          />
          {errors.userName && (
            <div className="text-red-500 text-sm mt-1">
              {errors.userName.message}
            </div>
          )}
        </div>
        <div>
          <label
            htmlFor="userEmail"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <Controller
            name="userEmail"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="email"
                id="userEmail"
                className="mt-1 block w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm sm:text-sm"
              />
            )}
          />
          {errors.userEmail && (
            <div className="text-red-500 text-sm mt-1">
              {errors.userEmail.message}
            </div>
          )}
        </div>
        <div>
          <label
            htmlFor="applianceText"
            className="block text-sm font-medium text-gray-700"
          >
            Application Text
          </label>
          <Controller
            name="applianceText"
            control={control}
            render={({ field }) => (
              <textarea
                {...field}
                id="applianceText"
                className="mt-1 block w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm sm:text-sm"
              />
            )}
          />
          {errors.applianceText && (
            <div className="text-red-500 text-sm mt-1">
              {errors.applianceText.message}
            </div>
          )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-cyan-600"
        >
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </button>
      </form>
    </div>
  );
};

export default JobApplicationPage;
