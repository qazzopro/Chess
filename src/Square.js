import * as d3 from "d3";
import King from "./Pieces/King";

const WHITE = 0;
const BLACK = 1;

export default class Square {
	constructor(X, Y, size) {
		this.X = X;
		this.Y = Y;
		this.size = size;
		this.piece = null;
	}

	getColor() {
		if ((this.X.charCodeAt(0) - 65 + this.Y) % 2 === 0) {
			return 0;
		} else return 1;
	}

	getPixel() {
		var arr = [];
		arr[0] = (this.X.charCodeAt(0) - 97) * this.size;
		arr[1] = (7 - (this.Y - 1)) * this.size;
		return arr;
	}

	draw(container) {
		if (this.getColor() == WHITE) {
			this.selection = container
				.append("rect")
				.attr("x", this.getPixel()[0])
				.attr("y", this.getPixel()[1])
				.attr("width", this.size)
				.attr("height", this.size)
				.style("fill", "rgb(242, 229, 217)");
		} else {
			this.selection = container
				.append("rect")
				.attr("x", this.getPixel()[0])
				.attr("y", this.getPixel()[1])
				.attr("width", this.size)
				.attr("height", this.size)
				.style("fill", "rgb(196, 138, 84)");
		}
	}

	SquareListeners(ele) {
		//ele.node().addEventListener("mousedown", startDrag);
		//ele.node().addEventListener("mousemove", drag);
		//ele.node().addEventListener("mouseup", endDrag);
		//ele.node().addEventListener("mouseleave", endDrag);

		function startDrag() {
			console.log("HI");
		}
	}
}
