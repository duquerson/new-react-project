import { z } from 'zod';

export const schema = z.object({
	name: z.string().min(1, { message: 'Name is required' }),
	email: z.string().email({ message: 'Invalid email address' }),
	phone: z.string().min(10, { message: 'Invalid phone number' }),
	plan: z.enum(['arcade', 'advanced', 'pro']),
	yearly: z.boolean(),
	addOns: z.array(z.string()).optional(),
});
