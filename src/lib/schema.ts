import { z } from 'zod';

export const dataProductSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters." }),
  description: z.string().min(10, { message: "Description must be at least 10 characters." }),
  domain: z.enum(['Finance', 'Marketing', 'Sales', 'Engineering']),
  type: z.enum(['Dataset', 'Report', 'Dashboard', 'API']),
  lifecycle: z.enum(['Development', 'Production', 'Deprecated']),
  owner: z.object({
    name: z.string().min(1, { message: "Owner name is required." }),
    avatarUrl: z.string().url({ message: "Please enter a valid URL." }),
  }),
  tags: z.string().min(1, { message: "Please enter at least one tag." }),
});
