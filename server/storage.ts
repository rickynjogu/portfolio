import { type User, type InsertUser, type Project, type InsertProject } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getAllProjects(): Promise<Project[]>;
  getProject(id: string): Promise<Project | undefined>;
  createProject(project: InsertProject): Promise<Project>;
  updateProject(id: string, project: Partial<InsertProject>): Promise<Project | undefined>;
  deleteProject(id: string): Promise<boolean>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private projects: Map<string, Project>;

  constructor() {
    this.users = new Map();
    this.projects = new Map();
    this.seedProjects();
  }

  private seedProjects() {
    const sampleProjects: InsertProject[] = [
      {
        title: "Django Blog App",
        description: "A blog application built with Django",
        longDescription: "Full-featured blog platform built with Django, Python's popular web framework.",
        progress: 100,
        techStack: ["Python", "Django"],
        githubUrl: "https://github.com/rickynjogu/django-blog-app",
        liveUrl: null,
        imageUrl: null,
        eta: null,
      },
      {
        title: "Habit Tracker",
        description: "Django web app with authentication, CRUD operations and analytics",
        longDescription: "A Django web application for tracking habits with user authentication, CRUD operations, and analytics to monitor progress.",
        progress: 100,
        techStack: ["Python", "Django", "HTML"],
        githubUrl: "https://github.com/rickynjogu/habit-tracker",
        liveUrl: null,
        imageUrl: null,
        eta: null,
      },
      {
        title: "User Profile Manager",
        description: "Android app for managing user profiles, built with Jetpack Compose",
        longDescription: "An Android app for managing user profiles, built with Jetpack Compose for a modern UI experience.",
        progress: 100,
        techStack: ["Kotlin", "Android", "Jetpack Compose"],
        githubUrl: "https://github.com/rickynjogu/UserProfileManager",
        liveUrl: null,
        imageUrl: null,
        eta: null,
      },
      {
        title: "OS Management System",
        description: "Simulates and manages core OS functions: file management, memory management, and I/O operations",
        longDescription: "A system management application in C# that simulates and manages core OS functions such as file management, memory management, and I/O operations.",
        progress: 100,
        techStack: ["C#"],
        githubUrl: "https://github.com/rickynjogu/OSManagementSystem",
        liveUrl: null,
        imageUrl: null,
        eta: null,
      },
      {
        title: "RAG Pipeline",
        description: "Retrieval-Augmented Generation pipeline for AI-powered applications",
        longDescription: "A RAG (Retrieval-Augmented Generation) pipeline implementation using Jupyter Notebooks for AI and NLP workflows.",
        progress: 40,
        techStack: ["Python", "Jupyter"],
        githubUrl: "https://github.com/rickynjogu/RAG_PIPELINE",
        liveUrl: null,
        imageUrl: null,
        eta: null,
      },
      {
        title: "Recipe RAG Chatbot",
        description: "AI-powered recipe chatbot using RAG for cooking assistance",
        longDescription: "A chatbot that helps with recipes using Retrieval-Augmented Generation to provide relevant cooking suggestions.",
        progress: 100,
        techStack: ["Python", "AI", "RAG"],
        githubUrl: "https://github.com/rickynjogu/recipe-rag-chatbot",
        liveUrl: null,
        imageUrl: null,
        eta: null,
      },
      {
        title: "Tomato Disease Diagnosis and Advisory System",
        description: "AI-powered system to diagnose tomato plant diseases and provide farming advice",
        longDescription: "An intelligent system that identifies tomato plant diseases from images and offers advisory recommendations for treatment and prevention.",
        progress: 10,
        techStack: ["Python", "Django", "AI", "ML"],
        githubUrl: null,
        liveUrl: null,
        imageUrl: null,
        eta: "Coming Soon",
      },
    ];

    sampleProjects.forEach((project) => {
      const id = randomUUID();
      this.projects.set(id, {
        ...project,
        id,
        createdAt: new Date(),
        progress: project.progress ?? 0,
        longDescription: project.longDescription ?? null,
        githubUrl: project.githubUrl ?? null,
        liveUrl: project.liveUrl ?? null,
        imageUrl: project.imageUrl ?? null,
        eta: project.eta ?? null,
      });
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getAllProjects(): Promise<Project[]> {
    return Array.from(this.projects.values());
  }

  async getProject(id: string): Promise<Project | undefined> {
    return this.projects.get(id);
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const id = randomUUID();
    const project: Project = {
      ...insertProject,
      id,
      createdAt: new Date(),
      progress: insertProject.progress ?? 0,
      longDescription: insertProject.longDescription ?? null,
      githubUrl: insertProject.githubUrl ?? null,
      liveUrl: insertProject.liveUrl ?? null,
      imageUrl: insertProject.imageUrl ?? null,
      eta: insertProject.eta ?? null,
    };
    this.projects.set(id, project);
    return project;
  }

  async updateProject(id: string, updates: Partial<InsertProject>): Promise<Project | undefined> {
    const existing = this.projects.get(id);
    if (!existing) return undefined;
    
    const updated: Project = { ...existing, ...updates };
    this.projects.set(id, updated);
    return updated;
  }

  async deleteProject(id: string): Promise<boolean> {
    return this.projects.delete(id);
  }
}

export const storage = new MemStorage();
