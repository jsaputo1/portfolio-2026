import React from "react";
import Button from "@/components/Button";
import {
    EmailIcon,
    GithubIcon,
    LinkedInIcon,
    CodeIcon
} from "@/components/Icons";
import { supabase } from "@/lib/supabase";

const { data: all, error } = await supabase
    .from("profile")
    .select("*");

interface HeroProps {
    title: string;
    subtitle: string;
    github_url: string;
    linkedin_url: string;
    email: string;
}


export default function Hero({
    title,
    subtitle,
    github_url,
    linkedin_url,
    email
}: HeroProps) {


    return (
        <div>
            <div className="flex flex-col gap-4">
                <div className="flex gap-2 items-center">
                    <div className="h-10 w-10"><CodeIcon /></div>
                    <h1 className="text-zinc-950 font-medium text-2xl">{title}</h1>
                </div>
                <p className="text-xl text-zinc-600 w-3xl flex mb-4">{subtitle}</p>
                <div className="flex gap-2">
                    <Button
                        href={github_url}
                        target="_blank"
                        variant="primary"
                        icon={<GithubIcon />}
                    >
                        GitHub
                    </Button>
                    <Button
                        href={linkedin_url}
                        target="_blank"
                        variant="secondary"
                        icon={<LinkedInIcon />}
                    >
                        LinkedIn
                    </Button>
                    <Button
                        href={`mailto:${email}`}
                        target="_blank"
                        variant="secondary"
                        icon={<EmailIcon />}
                    >
                        Email
                    </Button>
                </div>
            </div>
        </div>

    );
}



