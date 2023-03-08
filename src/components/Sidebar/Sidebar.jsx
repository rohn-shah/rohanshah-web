import { Avatar, Link, makeStyles, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { UserContext } from '../../store/User/action';
import { BiBuildings } from 'react-icons/bi';
import { HiOutlineDocumentDownload, HiOutlineMail } from 'react-icons/hi';
import { IoLogoGithub } from 'react-icons/io';
import {
  TiLocationOutline,
  TiSocialTwitter,
  TiSocialLinkedin,
} from 'react-icons/ti';

import './Sidebar.css';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(32),
    height: theme.spacing(32),
  },
  loginText: {
    color: '#8b949e',
  },
  iconColor: {
    color: 'grey',
  },
  iconColorDark: {
    color: '#8b949e',
  },
  detailItem: {
    fontSize: 'small',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
    fontSize: 'small',
    '&:hover': {
      color: '#58a6ff',
    },
  },
}));

function Sidebar({ darkState }) {
  const styles = useStyles();

  const { user } = useContext(UserContext);

  if (!user) return <></>;
  return (
    <div className="sidebar">
      <Avatar alt={user.name} src={user.avatar_url} className={styles.large} />
      <div className="sidebar__title">
        <Typography variant="h5" component="h5">
          <strong>{user.name}</strong>
        </Typography>
        <Typography
          className={styles.loginText}
          variant="body1"
          component="span"
        >
          {user.login}
        </Typography>
      </div>
      <div className="sidebar__bio">{user.bio}</div>
      <div className="sidebar__details">
        <div className="sidebar__detailsItem">
          <BiBuildings
            size={20}
            className={darkState ? styles.iconColorDark : styles.iconColor}
          />
          <Typography
            variant="body2"
            component="span"
            className={styles.detailItem}
          >
            {user.company}
          </Typography>
        </div>
        <div className="sidebar__detailsItem">
          <TiLocationOutline
            size={20}
            className={darkState ? styles.iconColorDark : styles.iconColor}
          />
          <Typography
            variant="body2"
            component="span"
            className={styles.detailItem}
          >
            {user.location}
          </Typography>
        </div>
        <div className="sidebar__detailsItem">
          <HiOutlineMail
            size={20}
            className={darkState ? styles.iconColorDark : styles.iconColor}
          />
          <Link
            href={`mailto:rohanshah945@gmail.com`}
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            {`rohanshah945@gmail.com`}
          </Link>
        </div>
        <div className="sidebar__detailsItem">
          <IoLogoGithub
            size={20}
            className={darkState ? styles.iconColorDark : styles.iconColor}
          />
          <Link
            href={user.html_url}
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            {`${user.login}`}
          </Link>
        </div>
        <div className="sidebar__detailsItem">
          <TiSocialLinkedin
            size={20}
            className={darkState ? styles.iconColorDark : styles.iconColor}
          />
          <Link
            href={`https://www.linkedin.com/in/rohn-shah/`}
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >{`rohn-shah`}</Link>
        </div>
        <div className="sidebar__detailsItem">
          <TiSocialTwitter
            size={20}
            className={darkState ? styles.iconColorDark : styles.iconColor}
          />
          <Link
            href={`http://www.twitter.com/${user.twitter_username}`}
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >{`${user.twitter_username}`}</Link>
        </div>
        <div className="sidebar__detailsItem">
          <HiOutlineDocumentDownload
            size={20}
            className={darkState ? styles.iconColorDark : styles.iconColor}
          />
          <Link
            href={`https://drive.google.com/file/d/1DbDyXNY4nSdIz0oNsGmQ4f_p9iHuEHW0/view?usp=sharing`}
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >{`Download Resume`}</Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
