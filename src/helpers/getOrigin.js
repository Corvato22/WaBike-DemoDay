export const getOrigin = async(keyword) =>{

  const url = `https://nominatim.openstreetmap.org/search?q=${keyword}&format=json`
  const res = await fetch(url);
  const data = await res.json();


return data
}