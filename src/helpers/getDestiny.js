export const getDestiny = async(keyword) =>{

      const url = `https://nominatim.openstreetmap.org/search?q=${keyword}&viewbox=-75.706444,6.140896,-75.516930,6.352492&bounded=1&format=json`
      const res = await fetch(url);
      const data = await res.json();

  
  return data
}