import React, {useState, useEffect} from 'react';
import { useStore, actions } from "./store";

import './App.scss';
// import queryString from 'query-string'
import { Header } from './component/common';
import PostList from './component/Post'
import ClearFilter from './component/ClearFilter'
import Pagination from './component/Pagination'
import Sort from './component/Sort'
import Category from './component/Category'
import StarRate from './component/StarRate'
import Prices from './component/Prices'
import Brand from './component/Brand'
import Type from './component/Type'

function App() {
  const [state, dispatch] = useStore();
  const { productList, filter } = state;
  useEffect(() => {
    async function fetchPostsCategory() {
      try {
        const requestUrl = "http://localhost:3004/product";
        const res = await fetch(requestUrl);
        const resJson = await res.json();
        dispatch(actions.setProductList(resJson));
      } catch (error) {
        console.log(error);
      }
    }
    fetchPostsCategory();
  }, []);


  return (
    <div className="app">
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

export default App;
