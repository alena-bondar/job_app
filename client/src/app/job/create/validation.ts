import { z } from 'zod';

export const initialValuesJob = {
  jobName: '',
  jobDescription: '',
  companyName: ''
}

export const jobSchema = z.object({
  jobName: z.string().min(5, { message: "Must be 5 or more characters long" }),
  jobDescription: z.string().min(20, { message: "Must be 20 or more characters long" }),
  companyName: z.string().min(5, { message: "Must be 5 or more characters long" }),

});

export type FormData = z.infer<typeof jobSchema>;