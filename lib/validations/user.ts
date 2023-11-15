import * as z from 'zod';

export const UserValidation = z.object({
    profile_photo: z.string().url().nonempty(),
    name: z.string().min(2).max(30),
    direction: z.string().min(2).max(30),
    bio: z.string().min(2).max(10000),
})