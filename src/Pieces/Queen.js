import Piece from "./Piece";
const WHITE = 0;
const BLACK = 1;

export default class Queen extends Piece {
	draw(container, X, Y) {
		// create g object
		this.g = container
			.append("g")
			.style("opacity", "1")
			.style("fill", "#ffffff")
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
				.attr("d", "M 9 13 A 2 2 0 1 1  5,13 A 2 2 0 1 1  9 13 z")
				.attr("transform", "translate(-1,-1)");
			this.g
				.append("path")
				.attr("d", "M 9 13 A 2 2 0 1 1  5,13 A 2 2 0 1 1  9 13 z")
				.attr("transform", "translate(15.5,-5.5)");
			this.g
				.append("path")
				.attr("d", "M 9 13 A 2 2 0 1 1  5,13 A 2 2 0 1 1  9 13 z")
				.attr("transform", "translate(32,-1)");
			this.g
				.append("path")
				.attr("d", "M 9 13 A 2 2 0 1 1  5,13 A 2 2 0 1 1  9 13 z")
				.attr("transform", "translate(7,-4.5)");
			this.g
				.append("path")
				.attr("d", "M 9 13 A 2 2 0 1 1  5,13 A 2 2 0 1 1  9 13 z")
				.attr("transform", "translate(24,-4)");
			this.g
				.append("path")
				.attr(
					"d",
					"M 9,26 C 17.5,24.5 30,24.5 36,26 L 38,14 L 31,25 L 31,11 L 25.5,24.5 L 22.5,9.5 L 19.5,24.5 L 14,10.5 L 14,25 L 7,14 L 9,26 z"
				)
				.style("stroke-linecap", "butt");
			this.g
				.append("path")
				.attr(
					"d",
					"M 9,26 C 9,28 10.5,28 11.5,30 C 12.5,31.5 12.5,31 12,33.5 C 10.5,34.5 10.5,36 10.5,36 C 9,37.5 11,38.5 11,38.5 C 17.5,39.5 27.5,39.5 34,38.5 C 34,38.5 35.5,37.5 34,36 C 34,36 34.5,34.5 33,33.5 C 32.5,31 32.5,31.5 33.5,30 C 34.5,28 36,28 36,26 C 27.5,24.5 17.5,24.5 9,26 z"
				)
				.style("stroke-linecap", "butt");
			this.g
				.append("path")
				.attr("d", "M 11.5,30 C 15,29 30,29 33.5,30")
				.style("fill", "none");
			this.g
				.append("path")
				.attr("d", "M 12,33.5 C 18,32.5 27,32.5 33,33.5")
				.style("fill", "none");
		} else {
			this.g.style("fill", "#000000");

			let tmp = this.g
				.append("g")
				.style("fill", "#000000")
				.style("stroke", "none");
			tmp.append("circle")
				.attr("cx", "6")
				.attr("cy", "12")
				.attr("r", "2.75");
			tmp.append("circle")
				.attr("cx", "14")
				.attr("cy", "9")
				.attr("r", "2.75");
			tmp.append("circle")
				.attr("cx", "22.5")
				.attr("cy", "8")
				.attr("r", "2.75");
			tmp.append("circle")
				.attr("cx", "31")
				.attr("cy", "9")
				.attr("r", "2.75");
			tmp.append("circle")
				.attr("cx", "39")
				.attr("cy", "12")
				.attr("r", "2.75");

			this.g
				.append("path")
				.attr(
					"d",
					"M 9,26 C 17.5,24.5 30,24.5 36,26 L 38.5,13.5 L 31,25 L 30.7,10.9 L 25.5,24.5 L 22.5,10 L 19.5,24.5 L 14.3,10.9 L 14,25 L 6.5,13.5 L 9,26 z"
				)
				.style("stroke-linecap", "butt")
				.style("stroke", "#000000");
			this.g
				.append("path")
				.attr(
					"d",
					"M 9,26 C 9,28 10.5,28 11.5,30 C 12.5,31.5 12.5,31 12,33.5 C 10.5,34.5 10.5,36 10.5,36 C 9,37.5 11,38.5 11,38.5 C 17.5,39.5 27.5,39.5 34,38.5 C 34,38.5 35.5,37.5 34,36 C 34,36 34.5,34.5 33,33.5 C 32.5,31 32.5,31.5 33.5,30 C 34.5,28 36,28 36,26 C 27.5,24.5 17.5,24.5 9,26 z"
				)
				.style("stroke-linecap", "butt");
			this.g
				.append("path")
				.attr("d", "M 11,38.5 A 35,35 1 0 0 34,38.5")
				.style("stroke-linecap", "butt")
				.style("stroke", "#000000")
				.style("fill", "none");
			this.g
				.append("path")
				.attr("d", "M 11,29 A 35,35 1 0 1 34,29")
				.style("stroke", "#ffffff")
				.style("fill", "none");
			this.g
				.append("path")
				.attr("d", "M 12.5,31.5 L 32.5,31.5")
				.style("stroke", "#ffffff")
				.style("fill", "none");
			this.g
				.append("path")
				.attr("d", "M 11.5,34.5 A 35,35 1 0 0 33.5,34.5")
				.style("stroke", "#ffffff")
				.style("fill", "none");
			this.g
				.append("path")
				.attr("d", "M 10.5,37.5 A 35,35 1 0 0 34.5,37.5")
				.style("stroke", "#ffffff")
				.style("fill", "none");
		}
		var translation = "translate(" + X + "," + Y + ")";
		this.g.attr("transform", translation);
		this.makeDraggable(this.g);
	}
}
