"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class Filters {
  pagination(items, currentPage = 1, pageSize = 20) {
    const AllItems = items.length;
    const maxPages = Math.round(items.length / pageSize); // calcula o total de páginas
    // calculate total pages

    let allPages = Math.ceil(AllItems / pageSize); // garante que a página atual não esteja fora do intervalo
    // ensure current page isn't out of range

    if (currentPage < 1) {
      currentPage = 1;
    } else if (currentPage > allPages) {
      currentPage = allPages;
    }

    let startPage, endPage;

    if (allPages <= maxPages) {
      // total de páginas menor que o máximo, então mostra todas as páginas
      // all pages less than max so show all pages
      startPage = 1;
      endPage = allPages;
    } else {
      // todas as páginas acima do máximo, calcula as páginas inicial e final
      // all pages more than max so calculate start and end pages
      let maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
      let maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;

      if (currentPage <= maxPagesBeforeCurrentPage) {
        startPage = 1;
        endPage = maxPages;
      } else if (currentPage + maxPagesAfterCurrentPage >= allPages) {
        startPage = allPages - maxPages + 1;
        endPage = allPages;
      } else {
        startPage = currentPage - maxPagesBeforeCurrentPage;
        endPage = currentPage + maxPagesAfterCurrentPage;
      }
    } // calcula os índices de item inicial e final
    // calculate start and end item indexes


    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, AllItems - 1); // cria um array de páginas para repetir no controle de paginas
    // create an array of pages to ng-repeat in the pager control

    let pages = Array.from(Array(endPage + 1 - startPage).keys()).map(i => startPage + i); //realiza a paginação em si dos itens
    // realiza uma paginação em si dos itens

    let contentItems = [];

    if (currentPage == 1) {
      contentItems = items.slice(0, pageSize);
    } else {
      const pageCall = currentPage - 1;
      contentItems = items.slice(pageSize * pageCall, pageSize + pageSize * pageCall);
    } // retorna o objeto com todas as propriedades exigidas paraa visualização
    // return object with all pager properties required by the view


    console.log(pages.length);
    return {
      AllItems,
      currentPage,
      pageSize,
      allPages: allPages !== pages.length ? pages.length : allPages,
      startPage,
      endPage,
      startIndex,
      endIndex,
      pages,
      items: contentItems
    };
  }

}

var _default = new Filters();

exports.default = _default;