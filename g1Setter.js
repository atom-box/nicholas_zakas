/* By Evan Genest, started January 17, 2018 */
/* Based on The Principles of oO Javascript by Nicholas Zakas  */

const albums = {
	toys: {
		songs: ['Sweet Emotion', 'Uncle Salty'],

	},
	captain: {
		songs:['Bitter Fingers', 'Someone Saved'],

	},
	rope: {
		songs: ['Safe European', 'Drug Squad']

	},

};

let prop;

for (prop in albums) {
	console.log(`${prop} contains this array: `);
	console.log(albums[prop]);
}
console.log(`Attempting to print this complicated object in its entirity: ${albums} There!  Did it.`);


