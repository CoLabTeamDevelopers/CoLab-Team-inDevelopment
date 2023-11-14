import {
  PROJECTS,
  WORKSPACE,
  DISCUSS,
  ABOUT,
  HOME,
  PROFILE,
  CREATEPROJECT,
  MYPROJECTS,
  REQUSTS,
} from "@/api/app/appEndpoints";

export const leftNavLinks = [
  { label: "Home", href: HOME },
  { label: "Projects", href: PROJECTS },
  { label: "Workspace", href: WORKSPACE },
  { label: "Discuss", href: DISCUSS },
  { label: "About", href: ABOUT },
];

export const rightNavLinks = [
  { label: "Profile", href: PROFILE },
  { label: "Create", href: CREATEPROJECT },
  { label: "Requests", href: REQUSTS },
  { label: "My Projects", href: MYPROJECTS },
];
