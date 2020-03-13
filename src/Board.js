import * as d3 from "d3";
import Square from "./Square";
import Piece from "./Pieces/Piece";
import King from "./Pieces/King";
import Queen from "./Pieces/Queen";
import Rook from "./Pieces/Rook";
import Bishop from "./Pieces/Bishop";
import Knight from "./Pieces/Knight";
import Pawn from "./Pieces/Pawn";

const FILES = 8;
const RANKS = FILES;

const WHITE = 0;
const BLACK = 1;

const DEFAULT_WIDTH = 400;
const DEFAULT_HEIGHT = DEFAULT_WIDTH;

export default class Board {
	constructor() {
		this.width = DEFAULT_WIDTH;
		this.height = DEFAULT_HEIGHT;
		this.squares = [];
	}

	draw() {
		this.container = d3
			.select("body")
			.append("svg")
			.attr("width", this.width)
			.attr("height", this.height);

		for (
			let col = "a";
			col !== "i";
			col = String.fromCharCode(col.charCodeAt(0) + 1)
		) {
			for (let row = 1; row <= RANKS; row++) {
				var s = new Square(col, row, this.width / FILES);
				s.draw(this.container);
				this.squares.push(s);
			}
		}
	}

	initial() {
		// Draw Kings
		this.squares[32].piece = new King(WHITE, ["E", 1]);
		this.squares[32].piece.draw(
			this.container,
			this.squares[32].getPixel()[0],
			this.squares[32].getPixel()[1]
		);
		this.squares[39].piece = new King(BLACK);
		this.squares[39].piece.draw(
			this.container,
			this.squares[39].getPixel()[0],
			this.squares[39].getPixel()[1]
		);

		// Draw Queens
		this.squares[24].piece = new Queen(WHITE);
		this.squares[24].piece.draw(
			this.container,
			this.squares[24].getPixel()[0],
			this.squares[24].getPixel()[1]
		);
		this.squares[31].piece = new Queen(BLACK);
		this.squares[31].piece.draw(
			this.container,
			this.squares[31].getPixel()[0],
			this.squares[31].getPixel()[1]
		);

		// Draw Rooks
		this.squares[0].piece = new Rook(WHITE);
		this.squares[0].piece.draw(
			this.container,
			this.squares[0].getPixel()[0],
			this.squares[0].getPixel()[1]
		);
		this.squares[56].piece = new Rook(WHITE);
		this.squares[56].piece.draw(
			this.container,
			this.squares[56].getPixel()[0],
			this.squares[56].getPixel()[1]
		);
		this.squares[7].piece = new Rook(BLACK);
		this.squares[7].piece.draw(
			this.container,
			this.squares[7].getPixel()[0],
			this.squares[7].getPixel()[1]
		);
		this.squares[63].piece = new Rook(BLACK);
		this.squares[63].piece.draw(
			this.container,
			this.squares[63].getPixel()[0],
			this.squares[63].getPixel()[1]
		);

		// Draw Bishops
		this.squares[16].piece = new Bishop(WHITE);
		this.squares[16].piece.draw(
			this.container,
			this.squares[16].getPixel()[0],
			this.squares[16].getPixel()[1]
		);
		this.squares[40].piece = new Bishop(WHITE);
		this.squares[40].piece.draw(
			this.container,
			this.squares[40].getPixel()[0],
			this.squares[40].getPixel()[1]
		);
		this.squares[23].piece = new Bishop(BLACK);
		this.squares[23].piece.draw(
			this.container,
			this.squares[23].getPixel()[0],
			this.squares[23].getPixel()[1]
		);
		this.squares[47].piece = new Bishop(BLACK);
		this.squares[47].piece.draw(
			this.container,
			this.squares[47].getPixel()[0],
			this.squares[47].getPixel()[1]
		);

		// Draw Knights
		this.squares[8].piece = new Knight(WHITE);
		this.squares[8].piece.draw(
			this.container,
			this.squares[8].getPixel()[0],
			this.squares[8].getPixel()[1]
		);
		this.squares[48].piece = new Knight(WHITE);
		this.squares[48].piece.draw(
			this.container,
			this.squares[48].getPixel()[0],
			this.squares[48].getPixel()[1]
		);
		this.squares[15].piece = new Knight(BLACK);
		this.squares[15].piece.draw(
			this.container,
			this.squares[15].getPixel()[0],
			this.squares[15].getPixel()[1]
		);
		this.squares[55].piece = new Knight(BLACK);
		this.squares[55].piece.draw(
			this.container,
			this.squares[55].getPixel()[0],
			this.squares[55].getPixel()[1]
		);

		// Draw Pawns
		// White
		for (let i = 1; i <= 1 + RANKS * (FILES - 1); i = i + RANKS) {
			this.squares[i].piece = new Pawn(WHITE);
			this.squares[i].piece.draw(
				this.container,
				this.squares[i].getPixel()[0],
				this.squares[i].getPixel()[1]
			);
		}
		// Black
		for (let i = 6; i <= 7 + RANKS * (FILES - 1); i = i + RANKS) {
			this.squares[i].piece = new Pawn(BLACK);
			this.squares[i].piece.draw(
				this.container,
				this.squares[i].getPixel()[0],
				this.squares[i].getPixel()[1]
			);
		}
	}
}
