import { supabase } from "@/lib/supabase";
import Hero from "@/components/Hero"
import ProjectList from "@/components/ProjectList";

export default async function Home() {
  const { data: projects, error: projectsError } = await supabase
    .from("projects")
    .select("*, categories(*)")

  const { data: profile, error: profileError } = await supabase
    .from("profile")
    .select("*");

  const categories = projects
    ? Array.from(
      new Set(
        projects
          .map((p: any) => {
            const category = Array.isArray(p.categories)
              ? p.categories[0]
              : p.categories;
            return category?.name;
          })
          .filter(Boolean)
      )
    )
    : [];

  const profileData = profile?.[0]


  if (projectsError) {
    console.error("Error fetching projects:", projectsError);
  }
  if (profileError) {
    console.error("Error fetching projects:", profileError);
  }
  return (
    <div>
      <div className="border-b-1 border-zinc-200 py-16 md:py-24">
        <div className="hero container">
          <Hero
            title={profileData.title}
            subtitle={profileData.subtitle}
            github_url={profileData.github_url}
            linkedin_url={profileData.linkedin_url}
            email={profileData.email}
          >
          </Hero>
        </div>
      </div>
      <div className="container py-16">
        <h2 className="text-zinc-950 text-xl mb-2 font-medium">Featured projects</h2>
        <p className="text-zinc-600 mb-8">A selection of projects showcasing my development skills and experience</p>
        <div className="filters">
          <ProjectList projects={projects || []} categories={categories} />
        </div>
      </div>
    </div>
  );
}
