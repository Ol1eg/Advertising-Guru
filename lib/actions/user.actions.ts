"use server"

import { revalidatePath } from "next/cache"
import User from "../models/user.model"
import { connectToDB } from "../mongoose"

interface Params{
    userId: string,
    name: string,
    direction: string,
    bio: string,
    image: string,
    path: string
}

export async function updateUser({
    userId,
    name,
    direction,
    bio,
    image,
    path
}: Params): Promise<void> {
    try {
        connectToDB()
        await User.findOneAndUpdate(
            { id: userId },
            {
                name,
                direction,
                bio,
                image,
                onboarded: true
            },
            { upsert: true }
        )
        if (path === '/profile/edit') {
            revalidatePath(path)
        }
    } catch (error: any) {
        throw new Error(`Failed to create/update user: ${error.message}`)
    }
}

export async function fetchUser(userId: string) {
    try {
        connectToDB()
        return await User.findOne({id: userId})
    } catch (error: any) {
        throw new Error(`Failed to fetch user ${error.message}`)
    }
}