import { PaginationButton } from "../ui/PaginationButton"
import * as SC from "./styles"

function Pagination({
  onPageChange,
  activePage,
  pageCount,
}) 

{ 
    return (
       <SC.ContainerPaginationButton>
        {Array.from({ length: pageCount }, (_, index) => (
          <PaginationButton
            key={index}
            onClick={() => onPageChange(index)}
            style={{ backgroundColor: activePage === index ? "rgb(168, 168, 168)" : "rgb(240, 240, 240)" }}
          >
            {index + 1}
          </PaginationButton>
        ))}
      </SC.ContainerPaginationButton>
    )
}

export default Pagination;
