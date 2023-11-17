import { InferType } from "yup";
import { createProject } from "@/schemas/createProject";

export type CreateProject = InferType<typeof createProject>;
