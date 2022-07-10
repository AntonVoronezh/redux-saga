export const getLatestNews = async (query) => {
  const res = await fetch(
    `https://hn.algolia.com/api/v1/search?query=${query}&hitsPerPage=10&page=0`
  );
  return await res.json();
};
