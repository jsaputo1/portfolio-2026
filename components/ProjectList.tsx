"use client";

import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import Filter from "./Filter";

interface ProjectListProps {
    projects: any[];
    categories: any[];
}

export default function ProjectList({ projects, categories }: ProjectListProps) {
    const [activeFilter, setActiveFilter] = useState<string>("All");
    // Filter projects based on active filter
    const filteredProjects =
        activeFilter === "All"
            ? projects
            : projects.filter((project) => project.categories?.name === activeFilter);
    return (
        <div>
            {/* Filter Section */}
            <div className="flex gap-2 py-2.5 flex-wrap justify-start md:px-6 md:justify-center mb-8">
                <Filter
                    isActive={activeFilter === "All"}
                    onClick={() => setActiveFilter("All")}
                >
                    All Projects
                </Filter>
                {categories.map((category) => (
                    <Filter
                        key={category}
                        isActive={activeFilter === category}
                        onClick={() => setActiveFilter(category)}
                    >
                        {category}
                    </Filter>
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {filteredProjects && filteredProjects.length > 0 ? (
                    filteredProjects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            title={project.title || ""}
                            description={project.description || ""}
                            image_url={project.image_url || ""}
                            image_alt={project.image_alt || project.title || ""}
                            tags={project.tags || []}
                            live_url={project.live_url || ""}
                            repo_url={project.repo_url || ""}
                        />
                    ))
                ) : (
                    <p className="text-zinc-500 col-span-full text-center">
                        No projects found in this category
                    </p>
                )}
            </div>
        </div>
    );
}