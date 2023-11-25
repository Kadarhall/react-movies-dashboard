const url = 'https://nfl-api-data.p.rapidapi.com/nfl-player-info/v1/data?id=4360644';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '85316703b9mshfff47d521a0505cp162732jsn3b0fd0f63e48',
		'X-RapidAPI-Host': 'nfl-api-data.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}