import React, { useContext, useEffect, useState } from 'react'
import { FiltersContext } from '../contexts/filtersContext';
import qs from "qs";
import getData from '../helpers/getData';

const useLoadMore = ({ query, btnRef, pageSize = 1 }) => {
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [entriesCount, setEntriesCount] = useState(2);
  const [err, setErr] = useState(null);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const strapiQuery = qs.stringify(
    {
      filters: {
        categories: {
          name: {
            $eq: "Featured",
          },
        },
      },
      pagination: {
        page: page,
        pageSize: pageSize,
      },
      populate: "deep",
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      let apiData = await getData(`${process.env.REACT_APP_API_URL}/ads?${strapiQuery}`);
      setEntriesCount(apiData.meta.pagination.total);

      if (apiData) {
        setData([...data, ...apiData.data])
      } else {
        setErr('error')
      };
      setIsLoading(false);
    }
    fetchData();
    if (entriesCount > data?.length + 1 && btnRef.current) {
      btnRef.current.onclick = () => setPage(() => page + 1)
    } else if (!isLoading) {
      setHasMore(false)
    }
  }, [strapiQuery]);







  return { data, err, isLoading, hasMore }

}

export default useLoadMore;