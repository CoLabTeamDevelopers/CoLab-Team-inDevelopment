import { Box, Card, Link, Typography } from "@mui/material";

import {
  ProjectCardContentStyle,
  ProjectListCardStyle,
} from "@/common/styles/ProjectListStyles";

import ProjectTags from "../components/ProjectTags";

export function Component() {
  return (
    <Card sx={ProjectListCardStyle}>
      <img
        src="https://neural.love/cdn/ai-photostock/1edc6d57-83d6-69c8-b715-b73582e1fb7e/0.jpg?Expires=1701388799&Signature=UgnN5MpbWI6UFRgYyo4JHbHKt0KOlFodnrbgew0~xjBAxv2rO3JJkGLmOZeLQzvhW-O0lc~3VJQ1ERpVogvkHbiRXWHdZ~mtlohtDfY6plfZPohI~pP25LYLf2P7WJQiAdpIuajlKH5nI05cuJewLPbgbf7-u6nBGtY-IYfNTvtuJjJKwJ0Y7fmsI-PW-K~y30Lv7bEsAU8orHMHfgWnRj-97SnvLKKGlT3jYNF5I~6Kk0Eo9Kq6w4EgA~NRQG-K6zPuGW6Ry5HKZZ3MPDzzUURE1q54iP9OD2~J2XUEbvVFaNJArNvWGZu7fC~pil8gtSA0mzDIA7d1FFvD66m-tQ__&Key-Pair-Id=K2RFTOXRBNSROX"
        alt="Project Logo"
        width="20%"
        style={{ objectFit: "cover" }}
      />
      <Box sx={ProjectCardContentStyle}>
        <Link href="/projects/colab" variant="h2">
          Colab Team - Collaborative platform for developers
        </Link>
        <Typography variant="subtitle1">
          Colab Team is a web app which provides a platform for the developers.
          The aim of this project is to bring all the developers around the
          world to work together and ...
        </Typography>
        <ProjectTags />
      </Box>
    </Card>
  );
}
