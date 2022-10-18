import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

function Jurney() {
  const classes = useStyles();

  return (
    <Timeline align="alternate" style={{ padding: '20px' }}>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            Sep, 2020 - Present
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary"></TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="subtitle1" component="h1">
              <strong> Jr. Front End Developer </strong>
            </Typography>
            <Typography variant="body2">200OK Solutions</Typography>
            <Typography variant="body2">Ahmedabad</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            Jan, 2020 - Jun, 2020
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary"></TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="subtitle1" component="h1">
              <strong> Full Stack Developer Intern </strong>
            </Typography>
            <Typography variant="body2">Magenta Connect Pvt Ltd</Typography>
            <Typography variant="body2">Ahmedabad</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            2020
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary"></TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="subtitle1" component="h1">
              <strong>Master of Science - IT</strong>
            </Typography>
            <Typography variant="body2" component="span">
              DAIICT, Gandhinagar
            </Typography>
            <Typography
              style={{ fontSize: 'smaller' }}
              variant="body2"
              component="p"
            >
              CPI - 7
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            2018
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary"></TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="subtitle1" component="h1">
              <strong>Bachelor of Computer Application</strong>
            </Typography>
            <Typography variant="body2" component="span">
              Gujarat University
            </Typography>
            <Typography
              style={{ fontSize: 'smaller' }}
              variant="body2"
              component="p"
            >
              CPI - 7.73
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            2015
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary"></TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="subtitle1" component="h1">
              <strong>Higher Secondary School</strong>
            </Typography>
            <Typography variant="body2" component="span">
              Gujarat Board
            </Typography>
            <Typography
              style={{ fontSize: 'smaller' }}
              variant="body2"
              component="p"
            >
              PCT - 72.40%
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            2013
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary"></TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="subtitle1" component="h1">
              <strong>Secondary School</strong>
            </Typography>
            <Typography variant="body2" component="span">
              Gujarat Board
            </Typography>
            <Typography
              style={{ fontSize: 'smaller' }}
              variant="body2"
              component="p"
            >
              PCT - 62.33%
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

export default Jurney;
