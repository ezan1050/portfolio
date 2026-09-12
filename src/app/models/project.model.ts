export interface Project {
    slug: string;
    name: string;
    shortDescription: string;
    technologies: string[];
    githubUrl: string;
    liveUrl?: string;

    // pour la page détail
    problem: string;
    objective: string;
    features: string[];
    challenges: string;
    learnings: string;
}