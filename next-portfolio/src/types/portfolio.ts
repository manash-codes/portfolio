import type { StaticImageData } from "next/image";

export type CareerEntry = {
  period: string;
  role: string;
  company: string;
  summary: string;
  achievements: string[];
  signals: { label: string; value: string }[];
};

export type SkillGroup = {
  id: string;
  title: string;
  description: string;
  skills: string[];
};

export type Project = {
  title: string;
  image: StaticImageData;
  problem: string;
  outcome: string;
  decisions: string[];
  stack: string[];
  architecture: string[];
  metrics: { label: string; value: string }[];
  demo?: string;
  github?: string;
};
