import {z} from "zod";

export const createImageSchema = z.object({
    url:z.string({required_error: "URL is a required"}),
    name:z.string({ required_error: "Name is a required"}),
    description:z.string({required_error:"Description is a required"}),
    type:z.string({ required_error: "Type is a required"}),
    date:z.string().datetime().optional(),
});