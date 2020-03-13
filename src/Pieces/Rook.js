import Piece from "./Piece";
const WHITE = 0;
const BLACK = 1;

export default class Rook extends Piece {
	draw(container, X, Y) {
		// create g object
		this.g = container
			.append("g")
			.style("opacity", "1")
			.style("fill-opacity", "1")
			.style("fill-rule", "evenodd")
			.style("stroke", "#000000")
			.style("stroke-width", "1.5")
			.style("stroke-linecap", "round")
			.style("stroke-linejoin", "round")
			.style("stroke-miterlimit", "4")
			.style("stroke-dasharray", "none")
			.style("stroke-opacity", "1");

		// append paths
		if (this.colour == WHITE) {
			this.g.style("fill", "#ffffff");

			this.g
				.append("path")
				.attr("d", "M 9,39 L 36,39 L 36,36 L 9,36 L 9,39 z")
				.style("stroke-linecap", "butt");
			this.g
				.append("path")
				.attr("d", "M 12,36 L 12,32 L 33,32 L 33,36 L 12,36 z")
				.style("stroke-linecap", "butt");
			this.g
				.append("path")
				.attr(
					"d",
					"M 11,14 L 11,9 L 15,9 L 15,11 L 20,11 L 20,9 L 25,9 L 25,11 L 30,11 L 30,9 L 34,9 L 34,14"
				)
				.style("stroke-linecap", "butt");
			this.g.append("path").attr("d", "M 34,14 L 31,17 L 14,17 L 11,14");
			this.g
				.append("path")
				.attr("d", "M 31,17 L 31,29.5 L 14,29.5 L 14,17")
				.style("stroke-linecap", "butt")
				.style("stroke-linejoin", "miter");
			this.g
				.append("path")
				.attr("d", "M 31,29.5 L 32.5,32 L 12.5,32 L 14,29.5");
			this.g
				.append("path")
				.attr("d", "M 11,14 L 34,14")
				.style("fill", "none")
				.style("stroke-linejoin", "miter")
				.style("stroke", "#000000");
		} else {
			this.g.style("fill", "#000000");

			this.g
				.append("path")
				.attr("d", "M 9,39 L 36,39 L 36,36 L 9,36 L 9,39 z")
				.style("stroke-linecap", "butt");
			this.g
				.append("path")
				.attr(
					"d",
					"M 12.5,32 L 14,29.5 L 31,29.5 L 32.5,32 L 12.5,32 z"
				)
				.style("stroke-linecap", "butt");
			this.g
				.append("path")
				.attr("d", "M 12,36 L 12,32 L 33,32 L 33,36 L 12,36 z")
				.style("stroke-linecap", "butt");
			this.g
				.append("path")
				.attr(
					"d",
					"M 14,29.5 L 14,16.5 L 31,16.5 L 31,29.5 L 14,29.5 z"
				)
				.style("stroke-linecap", "butt")
				.style("stroke-linejoin", "miter");
			this.g
				.append("path")
				.attr("d", "M 14,16.5 L 11,14 L 34,14 L 31,16.5 L 14,16.5 z")
				.style("stroke-linecap", "butt");
			this.g
				.append("path")
				.attr(
					"d",
					"M 11,14 L 11,9 L 15,9 L 15,11 L 20,11 L 20,9 L 25,9 L 25,11 L 30,11 L 30,9 L 34,9 L 34,14 L 11,14 z"
				)
				.style("stroke-linecap", "butt");
			this.g
				.append("path")
				.attr("d", "M 12,35.5 L 33,35.5 L 33,35.5")
				.style("fill", "none")
				.style("stroke", "#ffffff")
				.style("stroke-width", "1")
				.style("stroke-linejoin", "miter");
			this.g
				.append("path")
				.attr("d", "M 13,31.5 L 32,31.5")
				.style("fill", "none")
				.style("stroke", "#ffffff")
				.style("stroke-width", "1")
				.style("stroke-linejoin", "miter");
			this.g
				.append("path")
				.attr("d", "M 14,29.5 L 31,29.5")
				.style("fill", "none")
				.style("stroke", "#ffffff")
				.style("stroke-width", "1")
				.style("stroke-linejoin", "miter");
			this.g
				.append("path")
				.attr("d", "M 14,16.5 L 31,16.5")
				.style("fill", "none")
				.style("stroke", "#ffffff")
				.style("stroke-width", "1")
				.style("stroke-linejoin", "miter");
			this.g
				.append("path")
				.attr("d", "M 11,14 L 34,14")
				.style("fill", "none")
				.style("stroke", "#ffffff")
				.style("stroke-width", "1")
				.style("stroke-linejoin", "miter");
		}
		var translation = "translate(" + X + "," + Y + ")";
		this.g.attr("transform", translation);
		this.makeDraggable(this.g);
	}
}
