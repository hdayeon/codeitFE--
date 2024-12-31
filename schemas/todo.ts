import { z } from "zod";

export const todoItemSchema = z.object({
  id: z.number(),
  name: z.string(),
  isCompleted: z.boolean(),
  imageUrl: z.string().optional(),
  memo: z.string().optional(),
});

export type TodoItem = z.infer<typeof todoItemSchema>;
