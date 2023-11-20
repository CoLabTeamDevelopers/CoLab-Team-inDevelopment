import * as Yup from "yup";

const projectTitle = Yup.string().required("Title is required");

const projectDescription = Yup.string().required("Description is required");

const skills = Yup.string().required("Add atleast one skill");

const projectPosition = Yup.string().required("Position is required");

const projectLevel = Yup.string().required("Level is required");

const projectRolesAndResponsiblities = Yup.string().required(
  "Roles and Responsiblity is required"
);

export const createProject = Yup.object().shape({
  projectTitle,
  projectDescription,
  skills,
  projectPosition,
  projectLevel,
  projectRolesAndResponsiblities,
});
