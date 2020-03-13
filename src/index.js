import "./styles.css";
import Piece from "./Pieces/Piece";
import King from "./Pieces/King";
import Queen from "./Pieces/Queen";
import Rook from "./Pieces/Rook";
import Bishop from "./Pieces/Bishop";
import Knight from "./Pieces/Knight";
import Pawn from "./Pieces/Pawn";
import Board from "./Board";
import * as d3 from "d3";

const WHITE = 0;
const BLACK = 1;

var B = new Board(10, 10);
B.draw();
B.initial();
