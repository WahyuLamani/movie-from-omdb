import { z } from "zod";

const searchSchema = z.object({
    s: z.string().min(1, { message: "Title is required" }),
    y: z.string(),
});

export { searchSchema };
export type SearchSchema = z.infer<typeof searchSchema>;
