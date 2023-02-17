import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Tooltip } from "@mui/material";

const Footer = () => {
  return (
    <footer>
      <div>
        <Tooltip title="Github">
          <div className="social-link">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/ivnmnndz"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </Tooltip>
        <Tooltip title="LinkedIn">
          <div className="social-link">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/ivanmenendez001/"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </Tooltip>
      </div>
    </footer>
  );
};

export default Footer;
