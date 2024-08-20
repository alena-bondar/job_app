import { z } from "zod";

export const initialValuesCompany = {
  companyName: "",
  companyEmail: "",
};

export const companySchema = z.object({
  companyName: z
    .string()
    .min(5, { message: "Must be 5 or more characters long" }),
  companyEmail: z.string().email({ message: "Invalid email address" }),
});

export type FormData = z.infer<typeof companySchema>;
