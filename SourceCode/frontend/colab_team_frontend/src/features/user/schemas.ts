import * as Yup from "yup";

const firstName = Yup.string().required("Firstname is required");

const lastName = Yup.string().required("Lastname is required");

const location = Yup.string().required("Location is required");

const skills = Yup.string().required("Add atleast one skill");

const about = Yup.string().required("Add about you");

export const userProfileSchema = Yup.object().shape({
  firstName,
  lastName,
  location,
  skills,
  about,
});
