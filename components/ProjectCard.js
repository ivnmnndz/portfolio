import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";

const ProjectCard = ({ project }) => {
  return (
    <Card className="card" sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={project.alt}
        height="300"
        image={project.img.src}
      />
      <CardContent className="card-body">
        <Typography gutterBottom variant="h5" component="div">
          {project.heading}
        </Typography>
        <Divider variant="middle" />
        <br />
        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>
      </CardContent>
      <CardActions style={{ display: "flex", justifyContent: "flex-end" }}>
        <Link
          style={{ color: "#3e8ede" }}
          href={project.github}
          underline="always"
        >
          GitHub
        </Link>
        {project.url && (
          <Link
            style={{ color: "#3e8ede" }}
            href={project.url}
            underline="always"
          >
            Live App
          </Link>
        )}
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
