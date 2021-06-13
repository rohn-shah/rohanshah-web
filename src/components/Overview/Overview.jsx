import { Link, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import "./Overview.css";

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: "inherit",
    fontSize: "small",
    "&:hover": {
      color: "#58a6ff",
      textDecoration: "none",
    },
  },
  description: {
    marginTop: "30px",
    fontSize: "medium",
    fontWeight: "light",
    justifyContent: "center",
    display: "flex",
  },
}));

function Overview({ darkState }) {
  const styles = useStyles();

  return (
    <div
      className={`overview home__bodyTabsBox ${
        darkState ? " home__bodyTabsBox-dark" : ""
      }`}
    >
      <span className="tabTitle">
        <Link
          className={styles.link}
          href="http://www.github.com/rohanshah945"
          target="_blank"
          rel="noreferrer"
        >
          rohanshah945
        </Link>{" "}
        / README.md
      </span>
      <div className="tabBody">
        <Typography variant="h6" component="h1">
          {" "}
          Hi, there! 👋{" "}
        </Typography>
        <Typography
          className={styles.description}
          variant="body2"
          component="p"
        >
          My name is Rohan Shah. I am ReactJS Developer based out of Ahmedabad,
          India. I like to experiment with different JavaScript Libraries to
          build something innovative.
        </Typography>
        <ul style={{ margin: "20px" }}>
          <li>
            <Typography>
              🔭 I’m working on cool projects with ReactJS.
            </Typography>
          </li>
          <li>
            <Typography>🌱 I’m currently learning NextJS, NodeJS.</Typography>
          </li>
          <li>
            <Typography>
              👯 I’m looking to collaborate on ReactJS, GoJS, D3JS.
            </Typography>
          </li>
          <li>
            <Typography>
              💬 Ask me about anything related to Tech, Podcasts and Books.
            </Typography>
          </li>
          <li>
            <Typography>
              📫 How to reach me:{" "}
              <Link
                href="http://www.twitter.com/rohn_shah"
                target="_blank"
                rel="noreferrer"
              >
                @rohn_shah
              </Link>{" "}
              or{" "}
              <Link
                href="mailto:rohanshah945@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                rohanshah945@gmail.com
              </Link>
            </Typography>
          </li>
          <li>
            <Typography>😄 Pronouns: he / him / his</Typography>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Overview;
