import React,{useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {setProductList} from "../actions/productList"
import './HomePage.scss';
import { Header } from './common';
import PostList from './Post'
import ClearFilter from './ClearFilter'
import Pagination from './Pagination'
import Sort from './Sort'
import Category from './Category'
import StarRate from './StarRate'
import Prices from './Prices'
import Brand from './Brand'
import Type from './Type'

function HomePage() {
  const dispatch = useDispatch()
  const productList = useSelector(state =>state.productList.productList)
    useEffect(() => {
      async function fetchPostsCategory() {
        try {
          const requestUrl = "http://localhost:3004/product";
          const res = await fetch(requestUrl);
          const resJson = await res.json();
          dispatch(setProductList(resJson));
        } catch (error) {
          console.log(error);
        }
      }
      fetchPostsCategory();
    }, []);
  
  
    return (
      <div className="home-page">
        <Header />
        <aside>
          <ClearFilter />
          <Category />
          <div className="checkbox-title">Refine by</div>
          <Type />
  
          <Brand />
  
          <StarRate />
  
          <Prices />
          
        </aside>
        <div className="result_wrapper">
          <Sort />
  
          <PostList />
  
          <Pagination />
        </div>
      </div>
    );
  }
  
  export default HomePage;
  