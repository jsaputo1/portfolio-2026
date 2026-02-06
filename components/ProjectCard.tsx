"use client";

import React, { useState, useEffect } from "react";
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

  const [isOpen, setIsOpen] = useState(false);

  return (

    <div className="project-card border-zinc-300 border-solid border-1 rounded-xl hover:shadow-md transition-shadow duration-300">
      {/* Mobile Accordion */}
      <div
        className="cursor-pointer py-6 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between items-center px-4">
          <div className="flex items-center gap-4">
            <div className="relative h-12 w-12 overflow-hidden rounded-xl border border-zinc-200">
              <Image src={image_url} alt={image_alt} fill className="object-cover" />
            </div>
            <h3 className="font-semibold text-zinc-900">{title}</h3>
          </div>
          <svg
            className={`h-5 w-5 text-zinc-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className={`flex flex-col ${!isOpen ? 'hidden md:flex' : ''}`}>
        <div className={`top image relative w-full h-[233px] ${isOpen ? 'hidden md:block' : ''}`}>
          <Image
            src={image_url}
            alt={image_alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="bottom text flex flex-col gap-6 px-4 md:py-8 md:py-1 pb-8">
          <h2 className={`text-zinc-950 font-semibold text-xl mb-[-12px] ${isOpen ? 'hidden md:block' : ''}`}>{title}</h2>
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