import React from 'react'
import { useQuery } from 'react-query'
import { getAllProperties } from '../utils/api';

const useProperties = () => {
    const { data, isLoading, isError, refetch } = useQuery(
        "allProperties",
        getAllProperties,
        {
            refetchOnMount: true,
            refetchOnWindowFocus: false,
            cacheTime: 0, // Disable caching
            staleTime: 0, // Consider data stale immediately
        }
    );

    return { data, isError, isLoading, refetch };
};

export default useProperties;