import React from 'react';
import { createContext, useState } from "react";

// 1. Create context
// This is the context to consume
export const FiltersContext = createContext()

// 2. Create provider, to provide context
// This provides access to the context
export function FiltersProvider({ children }) {

    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 0
    })

    return (
        <FiltersContext.Provider value={{
            filters,
            setFilters
        }}
        >
            {children}
        </FiltersContext.Provider>
    )
}