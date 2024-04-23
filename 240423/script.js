const renderPagination = (currentPage) => {
  if (totalCount <= 20) return;
};

let totalPage = Math.ceil(totalCount / 20);
let pageGroup = Math.ceil(currentPage / 10);
