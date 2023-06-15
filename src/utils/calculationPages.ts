const calculationPages = (
  AllItems:number,
  pageSize:number,
) => {
    // calcula o número máximo de páginas
  const maxPages: number = Math.round(AllItems / pageSize);

  // calcula o total de páginas
  // calculate total pages
  let allPages: number = Math.ceil(AllItems / pageSize);
  return { maxPages,allPages };
}

export default calculationPages;
