const calculationStartPageAndEndPage = (
  allPages: number,
  maxPages: number,
  currentPage: number
) => {
  let startPage: number, endPage: number
  if (allPages <= maxPages) {
    // total de páginas menor que o máximo, então mostra todas as páginas
    // all pages less than max so show all pages
    startPage = 1
    endPage = allPages
    return { startPage, endPage }
  }
  // todas as páginas acima do máximo, calcula as páginas inicial e final
  // all pages more than max so calculate start and end pages
  let maxPagesBeforeCurrentPage: number = Math.floor(maxPages / 2)
  let maxPagesAfterCurrentPage: number = Math.ceil(maxPages / 2) - 1

  startPage = currentPage <= maxPagesBeforeCurrentPage ?  1 : currentPage + maxPagesAfterCurrentPage >= allPages? allPages - maxPages + 1:  currentPage - maxPagesBeforeCurrentPage;

  endPage = currentPage <= maxPagesBeforeCurrentPage ? maxPages : currentPage + maxPagesAfterCurrentPage >= allPages ? allPages : currentPage + maxPagesAfterCurrentPage;

  return { startPage, endPage };
}

export default calculationStartPageAndEndPage;
