"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";

const FormSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Invalid email address.",
    }),
    comment: z.string().min(10, {
        message: "Comment must be at least 10 characters.",
    }),
});

export function InputForm() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: "",
            email: "",
            comment: "",
        },
    });

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        try {
            const response = await fetch("/api/post", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    text: `Adam Johnson says hi!`,
                    blocks: [
                        {
                            type: "section",
                            text: {
                                type: "mrkdwn",
                                text: `Name: ${data.name}`,
                            },
                        },
                        {
                            type: "section",
                            text: {
                                type: "mrkdwn",
                                text: `Email: ${data.email}`,
                            },
                        },
                        {
                            type: "section",
                            text: {
                                type: "mrkdwn",
                                text: `Comment: ${data.comment}`,
                            },
                        },
                    ],
                }),
            });
            if (response.ok) {
                toast(
                    <div>
                        <div>You submitted the following values:</div>
                        <pre className="mt-2 w-full rounded-md p-2 bg-foreground text-background">
                            {JSON.stringify(data, null, 2)}
                        </pre>
                    </div>
                );
            }
        } catch (error) {
            console.log("error", error);
            toast("Something went wrong");
        }
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 border-2 border-foreground/20 border-gray-200 p-8 rounded-md bg-gray-50 max-w-xl mx-auto"
            >
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="john@example.com"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="comment"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Comments</FormLabel>
                            <FormControl>
                                <Textarea
                                    {...field}
                                    placeholder="Please share your thoughts..."
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
}
