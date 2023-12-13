"use client"

import { useForm } from "react-hook-form";
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Textarea } from "../ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod"
import { usePathname, useRouter } from "next/navigation";
// import { UserValidation } from "@/lib/validations/user";
// import { updateUser } from "@/lib/actions/user.actions";


interface Props {
    user: {
        id: string,
        objectId: string,
        name: string,
        direction: string,
        bio: string,
        image: string,
    };
    btnTitle: string;
}
    

function PostMessage({ userId }: { userId: string }) {
    const [files, setFiles] = useState<File[]>([])
    const { startUpload } = useUploadThing("media")
    const router = useRouter()
    const pathname = usePathname()

    const form = useForm({
        resolver: zodResolver(UserValidation),
        defaultValues: {
            profile_photo: user?.image || "",
            name: user?.name || "",
            direction: user?.direction || "",
            bio: user?.bio || "",
        }
    })
    return (
        <h1>Post message from</h1>
    )
}

export default PostMessage