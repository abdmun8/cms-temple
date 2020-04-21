import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Typography,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Menu,
  MenuItem
} from '@material-ui/core';
import { useSelector } from 'react-redux';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
import SearchInput from '../../../components/SearchInput';
import { NewsTable } from './components';
import { get } from 'Fetch';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },
  content: {
    marginTop: theme.spacing(2)
  },
  formControl: {
    // marginLeft: 20,
    display: 'flex',
    width: 200
  },
  select: {
    borderWidth: 1,
    borderColor: 'grey',
    width: 100
  }
}));

const News = () => {
  const classes = useStyles();
  const [filter, setFilter] = useState('');
  const token = useSelector(state => state.token);
  const [postData, setPostData] = useState([]);
  useEffect(() => {
    getDataPost();
  }, []);

  // methods
  const getDataPost = () => {
    get(
      '/posts/list',
      { Authorization: `Bearer ${token}` },
      data => {
        // console.log(data);
        if (data.response) {
          const filtered = data.response.filter(
            item =>
              item.slug.toLowerCase() !== 'about' &&
              item.slug.toLowerCase() !== 'history'
          );
          setPostData(filtered);
        }
      },
      err => console.log(err)
    );
  };

  return (
    <div className={classes.root}>
      <Typography variant="h2">News</Typography>
      <SearchInput
        name="filterData"
        onChange={e => setFilter(e.target.value)}
        placeholder="Search"
        style={{ width: '20rem', marginTop: 10 }}
      />
      <div className={classes.content}>
        <Card>
          <CardHeader title="News List" />
          <Divider />
          <CardContent>
            <NewsTable
              postData={
                postData.length > 0
                  ? postData.filter(item => {
                    const title = item.languages[0].title.toLowerCase();
                    const excerpt = item.languages[0].excerpt.toLowerCase();
                    const name = item.user.name.toLowerCase();
                    return (
                      title.includes(filter) ||
                        excerpt.includes(filter) ||
                        name.includes(filter)
                    );
                  })
                  : []
              }
            />
          </CardContent>
          <Divider />
        </Card>
      </div>
    </div>
  );
};

export default News;
