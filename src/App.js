import React, {useState, useEffect} from 'react';
import './App.scss';
import queryString from 'query-string'
import { Header } from './component/common';
import PostList from './component/Post'
import Pagination from './component/Pagination'
import Sort from './component/Sort'
import Category from './component/Category'
import StarRate from './component/StarRate'
import Prices from './component/Prices'
import Brand from './component/Brand'
import Type from './component/Type'
function App() {

  const [postList, setPostList] = useState([]);
  const [sortValues, setSortValues] = useState('')
  const [isClear, setIsClear] = useState(false)

  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 16,
    _totalRows: 116,
  });

  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 16,
    name_like: '',
    categories_like: '',
    price_range_like: '',
    _sort: '',
    _order: '',
    rating_like: '',
  })

  useEffect(() => {
    
    async function fetchPosts() {
      try{
        const paramString = queryString.stringify(filters)
        const requestUrl = `http://localhost:3004/product?${paramString}`;
        const res = await fetch(requestUrl);
        const resJson = await res.json();
        console.log(paramString)
        setPostList(resJson);
        setPagination({
          ...pagination,
          _page: filters._page,
        });
      } catch (error) {
        console.log('fail');
      } 
    }
    fetchPosts();

    const filterValueArr = [filters.name_like, filters.categories_like, filters.price_range_like];
    const flag = filterValueArr.some(value => value !== '')
    setIsClear(flag)
  }, [filters]);
  
  // Pagination
  function handlePageChange(pageNumber) {

    setFilters({
      ...filters,
      _page: pageNumber,
    })
  }

  // Search 
  function handleFilterChange(newFilter) {

    setFilters({
      ...filters,
      name_like: newFilter.searchTerm,

    })
  }

  // Sort
  function handleSort(e) {
    const valueSelected = e.target.value;
    setSortValues(valueSelected);
    setFilters({
      ...filters,
      _sort: 'price',
      _order: valueSelected
    })
    
  }

  // Category
  function handleCategory(value) {
    setFilters({
      ...filters,
      categories_like: value,
    })
  }

  // StarRate
  function handleStarRate(value) {
    setFilters({
      ...filters,
      rating_like: value,
    })

  }

  // Price
  function handlePrices(value) {
    setFilters({
      ...filters,
      price_range_like: value,
    })
  }

  // Clear
  function handleClearFilter() {
    setFilters({
      ...filters,
      name_like: '',
      categories_like: '',
      price_range_like: '',
    })
  }

  return (
    <div className="app">

      <Header onSubmit={handleFilterChange}/>

      <aside>

        {
          isClear && 
          <button onClick={handleClearFilter}>Clear Filter</button>
        }
        <Category onClick={handleCategory}/>
        <section>
          <div className="checkbox-title">Refine by</div>
          <Type 
            filter={filters}
            setFilters={setFilters}
          />
      
          <Brand  
            filter={filters}
            setFilters={setFilters}
          />
        </section>

        <section>
          <div className="title">Ratings</div>
          <StarRate onStarChange={handleStarRate}/>
        </section>

        <Prices onPriceChange={handlePrices}/>

      </aside>

      <div className="result_wrapper">

        <Sort 
          sort={sortValues}
          onPageChange={handleSort}
        />

        <PostList posts={postList} />

        <Pagination 
          pagination={pagination}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default App;
