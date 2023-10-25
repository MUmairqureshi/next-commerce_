export const getReviews = async <T>(url: string): Promise<T> => {
  const data = await fetch(url);
  const res = await data.json();
  return res;
};
