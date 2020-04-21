import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';
import InfoIcon from '@material-ui/icons/InfoOutlined';
import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  Typography,
  TablePagination,
  IconButton,
  Menu,
  MenuItem
} from '@material-ui/core';

import { getInitials } from 'helpers';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 800
  },
  nameContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    marginRight: theme.spacing(2)
  },
  actions: {
    justifyContent: 'flex-end'
  },
  tableRow: {
    height: 10
  },
  tableRowPink: { backgroundColor: '#FDF7F8', height: 10 }
}));

const NewsTable = props => {
  const { className, users, postData, ...rest } = props;
  console.log(props);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);
  // lifecycle

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();

  // const handleSelectAll = event => {
  //   const { users } = props;

  //   let selectedUsers;

  //   if (event.target.checked) {
  //     selectedUsers = users.map(user => user.id);
  //   } else {
  //     selectedUsers = [];
  //   }

  //   setSelectedUsers(selectedUsers);
  // };

  // const handleSelectOne = (event, id) => {
  //   const selectedIndex = selectedUsers.indexOf(id);
  //   let newSelectedUsers = [];

  //   if (selectedIndex === -1) {
  //     newSelectedUsers = newSelectedUsers.concat(selectedUsers, id);
  //   } else if (selectedIndex === 0) {
  //     newSelectedUsers = newSelectedUsers.concat(selectedUsers.slice(1));
  //   } else if (selectedIndex === selectedUsers.length - 1) {
  //     newSelectedUsers = newSelectedUsers.concat(selectedUsers.slice(0, -1));
  //   } else if (selectedIndex > 0) {
  //     newSelectedUsers = newSelectedUsers.concat(
  //       selectedUsers.slice(0, selectedIndex),
  //       selectedUsers.slice(selectedIndex + 1)
  //     );
  //   }

  //   setSelectedUsers(newSelectedUsers);
  // };

  const handlePageChange = (event, page) => {
    setPage(page);
  };

  const handleRowsPerPageChange = event => {
    setRowsPerPage(event.target.value);
  };

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell>Excerpt</TableCell>
                  <TableCell>User</TableCell>
                  <TableCell>Published</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell />
                </TableRow>
              </TableHead>
              <TableBody>
                {postData.slice(0, rowsPerPage).map((item, index) => (
                  <TableRow
                    className={
                      index % 2 ? classes.tableRow : classes.tableRowPink
                    }
                    // hover
                    key={item.id}
                    selected={selectedUsers.indexOf(item.id) !== -1}
                  >
                    <TableCell>{item.languages[0].title}</TableCell>
                    <TableCell>{item.languages[0].excerpt}</TableCell>
                    <TableCell>{item.user.name}</TableCell>
                    <TableCell>
                      {item.languages[0].publish === true ? (
                        <CheckIcon />
                      ) : (
                        <CloseIcon />
                      )}
                    </TableCell>
                    <TableCell>
                      {moment(item.createdAt).format('DD-MM-YYYY')}
                    </TableCell>
                    <TableCell>
                      <IconButton
                        aria-controls="simple-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
                      >
                        <MoreVertIcon />
                      </IconButton>
                      <Menu
                        anchorEl={anchorEl}
                        elevation={0}
                        id="simple-menu"
                        keepMounted
                        onClose={handleClose}
                        open={Boolean(anchorEl)}
                      >
                        <MenuItem onClick={handleClose}>
                          <InfoIcon /> Detail
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <CloseIcon /> Delete
                        </MenuItem>
                      </Menu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
      <CardActions className={classes.actions}>
        <TablePagination
          component="div"
          count={postData.length}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handleRowsPerPageChange}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </CardActions>
    </Card>
  );
};

NewsTable.propTypes = {
  className: PropTypes.string,
  users: PropTypes.array.isRequired
};

export default NewsTable;
