import Piece from "./Piece";
const WHITE = 0;
const BLACK = 1;

export default class Pawn extends Piece {
	draw(container, X, Y) {
		this.g = container.append("g").append("path");

		this.g
			.attr(
				"d",
				"M 22,9 C 19.79,9 18,10.79 18,13 C 18,13.89 18.29,14.71 18.78,15.38 C 16.83,16.5 15.5,18.59 15.5,21 C 15.5,23.03 16.44,24.84 17.91,26.03 C 14.91,27.09 10.5,31.58 10.5,39.5 L 33.5,39.5 C 33.5,31.58 29.09,27.09 26.09,26.03 C 27.56,24.84 28.5,23.03 28.5,21 C 28.5,18.59 27.17,16.5 25.22,15.38 C 25.71,14.71 26,13.89 26,13 C 26,10.79 24.21,9 22,9 z"
			)
			.style("opacity", "1")
			.style("fill-opacity", "1")
			.style("fill-rule", "nonzero")
			.style("stroke", "#000000")
			.style("stroke-width", "1.5")
			.style("stroke-linecap", "round")
			.style("stroke-linejoin", "miter")
			.style("stroke-miterlimit", "4")
			.style("stroke-dasharray", "none")
			.style("stroke-opacity", "1");
		// append paths
		if (this.colour == WHITE) {
			this.g.style("fill", "#ffffff");
		} else {
			this.g.style("fill", "#000000");
		}
		var translation = "translate(" + X + "," + Y + ")";
		this.g.attr("transform", translation);
		this.makeDraggable(this.g);
	}
}
