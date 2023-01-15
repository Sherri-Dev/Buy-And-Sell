const getData = async (url,options={method:'GET'}) => {
const jsonData = await fetch(url);
const data = await jsonData.json()
return data
}

export default getData;