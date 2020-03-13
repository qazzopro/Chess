const WHITE = 0;
const BLACK = 1;

var selectedElement = null;

export default class Piece {
	constructor(colour, size, position) {
		this.colour = colour;
		this.size = size;
		this.position = position;
	}

	draw(container, X, Y) {}
	makeDraggable(ele, board) {
		ele.style("cursor", "move");
		ele.node().addEventListener("mousedown", startDrag);
		ele.node().addEventListener("mousemove", drag);
		ele.node().addEventListener("mouseup", endDrag);
		// ele.node().addEventListener("mouseleave", endDrag);

		function startDrag(evt) {
			// selected is the g node
			selectedElement = evt.target.parentNode;
		}

		function drag(evt) {
			if (selectedElement) {
				evt.preventDefault();

				// WHY is 30? MAGIC NUMBER!!
				var transform =
					"translate(" +
					(evt.clientX - 30) +
					"," +
					(evt.clientY - 30) +
					")";
				ele.attr("transform", transform);
			}
		}

		function endDrag(evt) {
			selectedElement = null;

			//get square of end
			console.log(evt.clientX, evt.clientY);
		}
	}
}
