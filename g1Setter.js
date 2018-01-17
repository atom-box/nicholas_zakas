/* By Evan Genest, started January 17, 2018 */
/* Based on The Principles of oO Javascript by Nicholas Zakas  */

const albums = {
	toys: {
		_songs: ['Sweet Emotion', 'Uncle Salty'],
		get songs() {return this._songs},
		set songs(xx) {this._songs = xx }
		/*  oops YOU FORGET 'THIS' ALL THE TIME. */
	},
	captain: {
		_songs:['Bitter Fingers', 'Someone Saved'],
		get songs() {return this._songs},
		set songs(xx) {this._songs = xx}
	},
	rope: {
		_songs: ['Safe European', 'Drug Squad'],
		get songs() {return this._songs},
		set songs(xx) {this._songs = xx}
	},

};

let prop;

for (prop in albums) {
	console.log(`${prop} contains this array: `);
	console.log(albums[prop]);
}
console.log(`Attempting to print this complicated object in its entirity: ${albums} There!  Did it.`);



