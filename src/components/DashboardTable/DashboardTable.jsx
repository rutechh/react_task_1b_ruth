import React, { useCallback } from "react";
import { DownArrow } from 'Assets/svgs';
import { DashboardTableRow } from 'Components/DashboardTableRow';
import { useEffect } from "react";
import MkdSDK from "Utils/MkdSDK";
import { useState } from "react";
import update from 'immutability-helper';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

const DashboardTable = () => {
  
  const [videos, setVideos] = useState([]);
  const [pageCount, setPageCount] = React.useState(0);
  const [dataTotal, setDataTotal] = React.useState(0);
  const [currentPage, setPage] = React.useState(1);
  const [canPreviousPage, setCanPreviousPage] = React.useState(false);
  const [canNextPage, setCanNextPage] = React.useState(false);

  const moveCard = useCallback((dragIndex, hoverIndex) => {
    setVideos((prevCards) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex]],
        ],
      }),
    )
  }, [])
  const fetchData = async (currentPage) => {
    const sdk = new MkdSDK();
    sdk.setTable('video');
    try {
      const result = await sdk.callRestAPI({ 
      "payload": {},
      "page": currentPage,
      "limit": 10}, 'PAGINATE');
      if (!result?.error){
      const { list, total, limit, num_pages, page } = result;
      
      setPageCount(num_pages);
      setPage(page);
      setDataTotal(total);
      setCanPreviousPage(page > 1);
      setCanNextPage(page + 1 <= num_pages);
      setVideos(()=>list);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      
    }
  };

  const prev = () =>{
    if (currentPage > 1){
      fetchData( currentPage - 1);
    }
  };
  const next = () =>{
    if (currentPage < pageCount){
      fetchData( currentPage + 1);
    }
  };


  useEffect(() => {
    fetchData(currentPage);
  }, []);

 

  
  return (
   <DndProvider backend={HTML5Backend}>
    <div className='font-thin w-full  text-[1rem] gap-3 leading-[1.21rem] text-[#666666] flex justify-between  '>
      <div className='flex w-[50%] space-x-5'>
        <p>#</p>
        <p>Title</p>
      </div>
      <div className='w-[35%]'>
        <p>Author</p>
      </div>
      <div className='flex space-x-3 grow justify-end'>
        <p>Most Liked</p>
        <DownArrow  className='mt-[0.50rem]'/>
      </div>
    </div>
    {videos?.length? videos.map((data, key) =>{
        return <DashboardTableRow moveCard={moveCard} index={key} key={key} data={data} />
    }
      
    ): null}
    <div className="gap-3 flex justify-end w-full text-lg my-6">
      <button className="bg-[#9BFF00] text-[1rem] font-[100] leading-[1.25rem] px-[.75rem] py-[.3125rem] rounded-tl-md rounded-bl-md" onClick={prev} disabled = {!canPreviousPage}>Prev</button>
      <button className="bg-[#9BFF00] text-[1rem] font-[100] leading-[1.25rem] px-[.75rem] py-[.3125rem] rounded-tr-md rounded-br-md" onClick={next} disabled = {!canNextPage}>Next</button>
    </div>
   </DndProvider>
  )
}

export default DashboardTable;