"use client";

import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import "@/styles/globals.css";
import {
  initialValuesJob,
  jobSchema,
  FormData,
} from "@/app/job/create/validation";
import { JobData } from "@/types";
import useStore from '@/store/store';

const CreateJobPage = () => {
  const { companies } = useStore();
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(jobSchema),
    defaultValues: initialValuesJob,
  });

  const onSubmit = async (values: Omit<JobData, "jobId">) => {
      const response = await axios.post(`/api/job`, {
        jobName: values.jobName,
        jobDescription: values.jobDescription,
        companyId: values.companyName,
      });
      if (response.status === 200) {
        reset();
        window.location.replace("/job");
      }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-8 shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">Create a new job</h1>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label
            htmlFor="jobName"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <Controller
            name="jobName"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                id="jobName"
                className="mt-1 block w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm sm:text-sm"
              />
            )}
          />
          {errors.jobName && (
            <div className="text-red-500 text-sm mt-1">
              {errors.jobName.message}
            </div>
          )}
        </div>
        <div>
          <label
            htmlFor="companyName"
            className="block text-sm font-medium text-gray-700"
          >
            Company
          </label>
          <Controller
            name="companyName"
            control={control}
            render={({ field }) => (
              <select
                {...field}
                id="companyName"
                className="mt-1 block w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm sm:text-sm"
              >
                <option>Select a company</option>
                {companies.map((company) => (
                  <option key={company.companyId} value={company.companyId}>
                    {company.companyName}
                  </option>
                ))}
              </select>
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
            Description
          </label>
          <Controller
            name="jobDescription"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                id="jobDescription"
                className="mt-1 block w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm sm:text-sm"
              />
            )}
          />
          {errors.jobDescription && (
            <div className="text-red-500 text-sm mt-1">
              {errors.jobDescription.message}
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

export default CreateJobPage;
