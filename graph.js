
function addNode(graph, nodeId, nodeLabel) {
	graph.nodes.add({
		id: nodeId,
		label: nodeLabel
	});
}

function addEdge(graph, edgeId, srcNode, destNode) {
	graph.edges.add({
		id: edgeId,
		from: srcNode,
		to: destNode
	});
}

function getGraph() {
	let nodes, edges;
	let graph = {  nodes: nodes , edges: edges };
	return graph;
}
