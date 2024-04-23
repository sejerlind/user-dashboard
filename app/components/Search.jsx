'use client';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useState } from "react"
import { useDebouncedCallback } from 'use-debounce';
import * as FaIcons from "react-icons/fa"
// import paginationBtn from './paginationBtn';
 
export default function Search({ placeholder }) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const [page, setPage] = useState(10); // Initialize page state with 1, assuming the first page
    const handleSearch = useDebouncedCallback((input) => {
        
    const params = new URLSearchParams(searchParams);
    if (input) {
        params.set('query', input);
      } else {
        params.delete('query');
      }
      replace(`${pathname}?${params.toString()}`);
    })


    const handleClickNext = () => {
      const newPage = page + 10;
      setPage(newPage);
      updatePageInUrl(newPage);
  };

  const handleClickPrev = () => {
      if (page > 0) {
          const newPage = page - 10;
          setPage(newPage);
          updatePageInUrl(newPage);
      }
  };

  const updatePageInUrl = (newPage) => {
      const params = new URLSearchParams(searchParams);
      params.set('skip', newPage);
      replace(`${pathname}?${params.toString()}`);
  };

 
  return (
    <>

        <div className="flex items-center mb-2">
        <button className=' m-1 rounded-lg' onClick={handleClickPrev}><FaIcons.FaChevronLeft/></button>
        <span>Page {String(page).slice(0, -1)}</span>
        <button className=' m-1 rounded-lg' onClick={handleClickNext}><FaIcons.FaChevronRight/> </button>
        </div>
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get('query')?.toString()}
      />
    </div>
    </>
  );
}