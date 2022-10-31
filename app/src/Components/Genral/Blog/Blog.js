import React from 'react';
import { Container } from '@mui/system';
import { FormControl } from '@mui/material';
import "./Blog.css"
const Blog = () => {
    return (
        <div className='p-5'>
            <Container>
                
                        <h3>Do You Have Questions ?</h3>
                        <p>We'll help you to grow your career and growth.</p>
                    
                        <div className="mb3">
                            <FormControl aria-label="Amount (to the nearest dollar)" />
                           
                            <input type={'text'} className='text' ></input>
                            
                        </div>
                        <input type={'submit'} className='submit'></input>
                   
            </Container>
        </div>
    );
};

export default Blog;