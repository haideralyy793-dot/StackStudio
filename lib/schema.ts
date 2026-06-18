import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Full name is required"),
  email: z.email("Please enter a valid email address"),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().min(1, "Please select a budget range"),
  message: z.string().min(10, "Please provide at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
