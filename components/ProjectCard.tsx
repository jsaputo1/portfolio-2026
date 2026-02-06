"use client";

import React, { useState } from "react";
import Image from "next/image";
import Button from "./Button";
import { ExternalLinkIcon, GithubIcon, CodeIcon } from "./Icons";

interface ProjectCardProps {
  title: string;
  description: string;
  image_url: string;
  image_alt: string;
  tags: string[];
  live_url: string;
  repo_url: string;
}

export default function ProjectCard({
  title,
  description,
  image_url,
  image_alt,
  tags,
  live_url,
  repo_url,
}: ProjectCardProps) {

  return (

    <div className="project-card border-zinc-300 border-solid border-1 rounded-xl hover:shadow-md transition-shadow duration-300">
      <div className="flex flex-col">
        <div className="top image relative w-full h-[233px]">
          <Image
            src={image_url}
            alt={image_alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="bottom text flex flex-col gap-6 py-8 px-4">
          <h2 className="text-zinc-950 font-semibold text-xl mb-[-12px]">{title}</h2>
          <p className="text-zinc-600 text-base">{description}</p>
          <div className="flex gap-2 tags">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-2 links">
            <Button href={live_url} variant="primary" icon={<ExternalLinkIcon />} target="_blank">Live Site</Button>
            <Button href={repo_url} variant="secondary" icon={<GithubIcon />} target="_blank">Repo</Button>
          </div>
        </div>

      </div>

    </div>
  );
}