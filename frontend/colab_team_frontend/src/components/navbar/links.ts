import { ABOUT, DISCUSS, PROJECTS, WORKSPACE } from "@/api/app/appEndpoints";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: PROJECTS },
  { label: "Workspace", href: WORKSPACE },
  { label: "Discuss", href: DISCUSS },
  { label: "About", href: ABOUT },
];
