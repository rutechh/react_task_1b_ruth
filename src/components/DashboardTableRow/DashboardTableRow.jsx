import React, { useRef } from "react";
import { Img, logo } from "Assets/images";
import { UpArrowIcon } from "Assets/svgs";
import { ItemTypes } from "Utils/utils";
import { useDrag, useDrop } from "react-dnd";


const DashboardTableRow = ({data = null, moveCard, index}) => {
  const ref = useRef(null)
  const [{ handlerId }, drop] = useDrop({
    accept: ItemTypes.CARD,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    hover(item, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index
      
      if (dragIndex === hoverIndex) {
        return
      }
      
      const hoverBoundingRect = ref.current?.getBoundingClientRect()
      
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
     
      const clientOffset = monitor.getClientOffset()
     
      const hoverClientY = clientOffset.y - hoverBoundingRect.top
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }
      moveCard(dragIndex, hoverIndex)
      
      item.index = hoverIndex
    },
  })

  const [{ isDragging }, drag] = useDrag(
    {
      type: ItemTypes.CARD,
      item: () => {
        return { id: data.id, index }
      },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    },
    [data, index],
  )

  const opacity = isDragging ? 0 : 1

  drag(drop(ref))
  
  return (
    <>
      { data ?
        <div data-handler-id={handlerId} ref={ref} style={{opacity}} className="h-[6rem] rounded-[1rem] gap-3 w-full flex items-center  border-[0.0625rem] mt-[0.7rem]  border-gray-400">
        <div className="flex w-[50%] h-full py-2 gap-2">
          <div className="items-center flex font-thin text-[0.875rem] leading-[1.059rem] text-[#666666] h-full  min-w-fit max-w-fit px-3 ">
            {data?.id}
          </div>
          <img
            src={data?.photo}
            alt=""
            className="h-full min-w-[7.375rem] w-[7.375rem] rounded-[.5rem] "
          />
          <div className="h-full grow leading-[1.75rem] flex items-center text-white font-thin text-[1.25rem]">
          {data?.title}
          </div>
        </div>

        <div className=" text-white w-[35%] flex gap-2">
          <img
            src={logo}
            alt=""
            className="h-[1.5rem] w-[1.5rem] rounded-[.5rem] "
          />
          <span className="text-[#DBFD51] font-thin text-[1.25rem]">
          {data?.username}
          </span>
        </div>
        <div className="font-thin flex justify-end gap-2 px-3 text-[1rem] leading-[1.21rem] text-white grow">
          <span>{data?.like}</span>
          <UpArrowIcon />
        </div>
      </div>
      : null}
    </>
  );
};

export default DashboardTableRow;
