/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { Pagination, PaginationItem } from '@material-ui/lab';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getStories } from "../redux/actions/stories";
import paginationStyles from './styles';

const Paginate = ({ page }) => {
  const { numPages } = useSelector((state) => state.stories);
  const dispatch = useDispatch();
  const classes = paginationStyles();

  useEffect(() => {
    if (page) {
      dispatch(getStories(page));
    }
  }, [dispatch, page]);

  return (
    <Pagination
      classes={{ ul: classes.ul, root: classes.root}}
      count={numPages}
      page={Number(page) || 1}
      variant="outlined"
      color="primary"
      renderItem={(item) => (
        <PaginationItem {...item} component={Link} to={`/stories?page=${item.page}`} />
      )}
    />
  );
};

export default Paginate;