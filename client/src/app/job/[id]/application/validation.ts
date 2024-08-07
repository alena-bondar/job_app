import { z } from 'zod';

export const initialValuesApplication = {
  userName: "",
  userEmail: "",
  applianceText: "",
}

export const applicationSchema = z.object({
  userName: z.string().min(5, { message: "Must be 5 or more characters long" }),
  userEmail: z.string().email({ message: "Invalid email address" }),
  applianceText: z
    .string()
    .min(5, { message: "Must be 5 or more characters long" }),
});

export type FormData = z.infer<typeof applicationSchema>;