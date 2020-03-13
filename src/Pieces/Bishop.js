import Piece from "./Piece";
const WHITE = 0;
const BLACK = 1;

export default class Bishop extends Piece {
	draw(container, X, Y) {
		// create g object
		this.g = container
			.append("g")
			.style("opacity", "1")
			.style("fill", "none")
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
			let tmp = this.g
				.append("g")
				.style("fill", "#ffffff")
				.style("stroke", "#000000")
				.style("stroke-linecap", "butt");
			tmp.append("path").attr(
				"d",
				"M 9,36 C 12.39,35.03 19.11,36.43 22.5,34 C 25.89,36.43 32.61,35.03 36,36 C 36,36 37.65,36.54 39,38 C 38.32,38.97 37.35,38.99 36,38.5 C 32.61,37.53 25.89,38.96 22.5,37.5 C 19.11,38.96 12.39,37.53 9,38.5 C 7.646,38.99 6.677,38.97 6,38 C 7.354,36.06 9,36 9,36 z"
			);
			tmp.append("path").attr(
				"d",
				"M 15,32 C 17.5,34.5 27.5,34.5 30,32 C 30.5,30.5 30,30 30,30 C 30,27.5 27.5,26 27.5,26 C 33,24.5 33.5,14.5 22.5,10.5 C 11.5,14.5 12,24.5 17.5,26 C 17.5,26 15,27.5 15,30 C 15,30 14.5,30.5 15,32 z"
			);
			tmp.append("path").attr(
				"d",
				"M 25 8 A 2.5 2.5 0 1 1  20,8 A 2.5 2.5 0 1 1  25 8 z"
			);
			this.g
				.append("path")
				.attr(
					"d",
					"M 17.5,26 L 27.5,26 M 15,30 L 30,30 M 22.5,15.5 L 22.5,20.5 M 20,18 L 25,18"
				)
				.style("fill", "none")
				.style("stroke", "#000000")
				.style("stroke-linejoin", "miter");
		} else {
			let tmp = this.g
				.append("g")
				.style("fill", "#000000")
				.style("stroke", "#000000")
				.style("stroke-linecap", "butt");
			tmp.append("path").attr(
				"d",
				"M 9,36 C 12.39,35.03 19.11,36.43 22.5,34 C 25.89,36.43 32.61,35.03 36,36 C 36,36 37.65,36.54 39,38 C 38.32,38.97 37.35,38.99 36,38.5 C 32.61,37.53 25.89,38.96 22.5,37.5 C 19.11,38.96 12.39,37.53 9,38.5 C 7.646,38.99 6.677,38.97 6,38 C 7.354,36.06 9,36 9,36 z"
			);
			tmp.append("path").attr(
				"d",
				"M 15,32 C 17.5,34.5 27.5,34.5 30,32 C 30.5,30.5 30,30 30,30 C 30,27.5 27.5,26 27.5,26 C 33,24.5 33.5,14.5 22.5,10.5 C 11.5,14.5 12,24.5 17.5,26 C 17.5,26 15,27.5 15,30 C 15,30 14.5,30.5 15,32 z"
			);
			tmp.append("path").attr(
				"d",
				"M 25 8 A 2.5 2.5 0 1 1  20,8 A 2.5 2.5 0 1 1  25 8 z"
			);

			this.g
				.append("path")
				.attr(
					"d",
					"M 17.5,26 L 27.5,26 M 15,30 L 30,30 M 22.5,15.5 L 22.5,20.5 M 20,18 L 25,18"
				)
				.style("fill", "none")
				.style("stroke", "#ffffff")
				.style("stroke-linejoin", "miter");
		}
		var translation = "translate(" + X + "," + Y + ")";
		this.g.attr("transform", translation);
		this.makeDraggable(this.g);
	}
}
