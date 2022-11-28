import React, { useEffect } from 'react'
import { Pagination, PaginationItem } from '@mui/material';
import useStyles from './businessStyles.js'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../actions/posts';

const Paginate = ( { page } ) => {
    const { numberOfPages } = useSelector((state) => state.posts)
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        if(page) dispatch(getPosts(page));
    }, [page]);

    return (
        <Pagination 
            style={{marginTop: '50px'}}
            classes={{ul: classes.ul}}
            count={numberOfPages}
            page={Number(page) || 1}
            variant='outlined'
            renderItem={(item) => (
                <PaginationItem {...item} component={Link} to={`/discover?page=${item.page}`}/>
            )}
        />
    )
}

export default Paginate;