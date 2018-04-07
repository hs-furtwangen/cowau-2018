export class Sound {
	//ID of the sound to identify it uniquely. Randomly generated when newly created
	id : number;

	//The type of sound this Sound file is supposed to be playing in. needs to be set in the constructor
	type : SoundType;

	/* The actual array of when the sounds are supposed to play.
	 * the int values represent the length of the sound started at this beat in 1/8ths.
	 * the size of the grid defaults to 5x32, the first dimension can be set in the constructor
	 * the first dimension is the height of the tone, the second dimension is the beat position
	*/ 
	beatGrid : number[][];

	constructor(_type : SoundType, _toneheights:number = 5){

		this.type = _type;

		//randomly selects an id between -32767 and 32767
		this.id = Math.floor(Math.random() * (32767 + 32767 + 1)) - 32767;

		this.beatGrid = [];
		//initialise the beat grid with 0s
		for (var i : number = 0; i < _toneheights; i++){
			this.beatGrid[i] = [];
			for (var j: number = 0; j < 32; j++){
				this.beatGrid[i][j] = 0;
			}
		}
	}


	public getId() : number {
		return this.id; 
	}

	public getType() : SoundType {
		return this.type;
	}

	public getBeatGrid() : number[][]{
		return this.beatGrid;
	}

	public setBeatGrid(grid: number[][]):boolean {
		if (this.beatGrid.length == grid.length && this.beatGrid[0].length == grid[0].length) {
			this.beatGrid = grid;
			return true;
		} else {
			return false;
		}
	}

	public setBeatGridAtPos(x: number, y:number, value:number):boolean {
		if (x < this.beatGrid.length && x >= 0 && y < this.beatGrid[0].length && y >= 0 && value >= 0){
			this.beatGrid[x][y] = value;
			return true;
		} else {
			return false;
		}
	}

	public clearBeatGrid() : void {
		var x : number = this.beatGrid.length;

		this.beatGrid = [];

		for (var i : number = 0; i < x; i++){
			this.beatGrid[i] = [];
			for (var j: number = 0; j < 32; j++){
				this.beatGrid[i][j] = 0;
			}
		}
	}

}


// Enum to hold the different types of Sounds. please add the possible sounds here.
export enum SoundType {
	Drums,
	Bass,
	Marimba
}