import { z } from "zod";

export const contactSchema = z.object({
	firstName: z.string().min(2, "First name is too short"),
	lastName: z.string().min(2, "Last name is too short"),
	email: z.string().email("Invalid email address"),
	subject: z.string().min(5, "Subject is too short"),
	message: z.string().min(10, "Message is too short"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
