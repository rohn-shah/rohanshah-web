import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { UserContext } from '../../store/User/action';
import './Projects.css';
import { Box, Link, makeStyles, Typography } from '@material-ui/core';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: '20px',
    marginBottom: '-15px',
  },
  link: {
    textDecoration: 'none',
    color: '#58a6ff',
    fontSize: 'medium',
    '&:hover': {
      color: '#58a6ff',
    },
  },
  linkDark: {
    color: theme.palette.primary.main,
  },
  description: {
    color: '#8b949e',
    fontSize: 'x-small',
    marginTop: '8px',
    marginBottom: '16px',
  },
  language: {
    color: '#8b949e',
    fontSize: 'smaller',
  },
  updated: {
    marginLeft: '20px',
  },
  descriptionProject: {
    fontSize: 'smaller',
  },
}));

function Projects({ darkState }) {
  const { user } = useContext(UserContext);
  const [repos, setRepos] = useState([]);
  const projects = [
    {
      name: 'Calibration as a Service',
      description:
        'This project includes two portals; Admin Dashboard for managing the roles & permissions and CaaS System for displaying the Risk analysis with different models and factors using Charts and Graphs.',
      duration: 'Sep, 2020 - Present',
      teamsize: '3',
      techStack: 'MERN Stack, GoJS, D3JS',
      html_url: null,
    },
    {
      name: 'MagentaBI',
      description:
        'My role in this project is to render the data into different Dashboards that consists of different types of Charts such as Bar chart, Line chart, Pie chart, Tabular etc. I have also developed a few APIs in Python-Flask based Backend.',
      duration: 'Jan, 2020 - Jul, 2020',
      teamsize: '7',
      techStack: 'ReactJS, Flask, Apache Superset, D3JS',
      html_url: null,
    },
    {
      name: 'Petopartner',
      description:
        'Petopartner is a social networking platform that allows a pet parent to find friends for their pets. It also has a blog section that helps users to get the blogs and articles about their pet.',
      duration: 'Mar, 2021 - Present',
      teamsize: '2',
      techStack: 'MERN Stack',
      html_url: 'https://petopartner-fe.vercel.app/',
    },
  ];

  const styles = useStyles();

  useEffect(() => {
    user?.repos_url &&
      axios.get(user.repos_url).then((response) => {
        setRepos(response.data);
      });
  }, [user]);

  return (
    <>
      <Typography className={styles.title} variant="subtitle2" component="span">
        <strong>{`Projects`}</strong>
      </Typography>
      <div className="projects">
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className={`home__bodyTabsBox ${
                darkState ? ' home__bodyTabsBox-dark' : ''
              }`}
            >
              <Link
                href={project.html_url ? project.html_url : null}
                target="_blank"
                rel="noreferrer"
                className={`${styles.link} ${
                  !darkState ? styles.linkDark : ''
                }`}
              >
                <strong>{project.name}</strong>
              </Link>
              <Typography
                className={`${styles.description} ${styles.descriptionProject}`}
                variant="body2"
                component="span"
              >
                {project.description}
              </Typography>
              <Box display="flex" alignItems="center">
                <Typography
                  className={styles.language}
                  variant="body2"
                  component="span"
                >
                  {project.techStack}
                </Typography>
                <Typography
                  className={`${styles.language} ${styles.updated}`}
                  variant="body2"
                  component="span"
                >
                  {project.duration}
                </Typography>
                <Typography
                  className={`${styles.language} ${styles.updated}`}
                  variant="body2"
                  component="span"
                >
                  {`Team of ${project.teamsize}`}
                </Typography>
              </Box>
            </div>
          );
        })}
      </div>
      <Typography className={styles.title} variant="subtitle2" component="span">
        <strong>{`GitHub repositories`}</strong>
      </Typography>
      <div className="projects">
        {repos.map((repo) => {
          return (
            <div
              key={repo.id}
              className={`home__bodyTabsBox home__bodyTabsBox-half ${
                darkState ? ' home__bodyTabsBox-dark' : ''
              }`}
            >
              <Link
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className={`${styles.link} ${
                  !darkState ? styles.linkDark : ''
                }`}
              >
                <strong>{repo.name}</strong>
              </Link>
              <Typography
                className={styles.description}
                variant="body2"
                component="span"
              >
                {repo.description}
              </Typography>
              <Box display="flex" alignItems="center">
                <Typography
                  className={styles.language}
                  variant="body2"
                  component="span"
                >
                  {repo.language}
                </Typography>
                <Typography
                  className={`${styles.language} ${styles.updated}`}
                  variant="body2"
                  component="span"
                >
                  Updated on {moment(repo.updated_at).format('MMM DD')}
                </Typography>
              </Box>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Projects;
