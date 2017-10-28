export const GENRES = [
 'chill',
 'deep',
 'dubstep',
 'house',
 'progressive',
 'tech',
 'trance',
 'tropical',
];

const aurl='http://www.mytabmedia.com/images/businessman.png';

export const mockSongs = [

	{
		artwork_url:"http://thecatapi.com/api/images/get?format=src&type=gif",
		title: 'Purrfect Day',
		user: {
			avatar_url:aurl
		}
	},
	{
		artwork_url:"http://thecatapi.com/api/images/get?format=src&type=gif",
		title: 'How do you like me Meow',
		user: {
			avatar_url:aurl
		}
	},
	{
		artwork_url:"http://thecatapi.com/api/images/get?format=src&type=gif",
		title: 'Take a look at me Meow',
		user: {
			avatar_url:aurl
		}
	},

	{
		artwork_url:"http://thecatapi.com/api/images/get?format=src&type=gif",
		title: "It's Meow or Never",
		user: {
			avatar_url:aurl
		}
	},


	{
		artwork_url:"http://thecatapi.com/api/images/get?format=src&type=gif",
		title: "F the Pawlice",
		user: {
			avatar_url:aurl
		}
	}

];

export const client_id='cUa40O3Jg3Emvp6Tv4U6ymYYO50NUGpJ';

export const url=`https://api.soundcloud.com/tracks?linked_partitioning=1&client_id=${client_id}&limit=20&offset=0&tags=trance`;