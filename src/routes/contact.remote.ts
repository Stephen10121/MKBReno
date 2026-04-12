import { command } from "$app/server";
import * as v from "valibot";

const ContactFormSchema = v.object({
    name: v.pipe(v.string(), v.nonEmpty()),
    phone: v.pipe(v.string(), v.nonEmpty()),
    email: v.pipe(v.string(), v.nonEmpty(), v.email()),
    message: v.pipe(v.string(), v.nonEmpty()),
});

export const contactForm = command(ContactFormSchema, async (formData) => {
    console.log(formData);
});