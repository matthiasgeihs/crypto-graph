var network_legend;

function createLegend() {
  // create legend
  var container_legend = document.getElementById('mynetwork-legend');
  var x = - container_legend.clientWidth / 2 + 10;
  var y = - container_legend.clientHeight / 2 + 10;
  var step_x = 350;
  var step_y = 60;

  var nodes_legend = new vis.DataSet([
    {id: 'Prim1', label: 'Prim1', group: 'primitives', x: x, y: y, fixed: true, physics: false},
    {id: 'Prim2', label: 'Prim2', group: 'primitives', x: x + step_x, y: y, fixed: true, physics: false},
    {id: 'Prim3', label: 'Prim1', group: 'primitives', x: x, y: y + step_y, fixed: true, physics: false},
    {id: 'Prim4', label: 'Prim2', group: 'primitives', x: x + step_x, y: y + step_y, fixed: true, physics: false},
    {id: 'ProbC', label: 'Prob', group: 'problems', x: x, y: y + 2 * step_y, fixed: true, physics: false},
    {id: 'Prim5', label: 'Prim', group: 'primitives', x: x + step_x, y: y + 2 * step_y, fixed: true, physics: false},
    {id: 'ProbA', label: 'ProbA', group: 'problems', x: x, y: y + 3 * step_y, fixed: true, physics: false},
    {id: 'ProbB', label: 'ProbB', group: 'problems', x: x + step_x, y: y + 3 * step_y, fixed: true, physics: false},
    {id: '*', label: '(*) Typically, a black-box separation.', shape: 'box', color: {border: 'white', background: 'white'}, x: x + step_x/2, y: y + 4 * step_y, fixed: true, physics: false, font:{size: 12}},
  ]);

  var edges_legend = [
    {from: 'Prim1', to: 'Prim2', arrows: 'to', label: 'If Prim1 is exists, then Prim2 exists.', font: {align: 'bottom'}, color: {inherit: false},},
    {from: 'Prim3', to: 'Prim4', arrows: {
        middle: {enabled: true, type: 'bar', scaleFactor: 0.5},
        to: {enabled:true},
      }, dashes: true,
      label: 'Prim2 cannot be constructed from Prim1. (*)', font: {align: 'bottom'}, color: {inherit: false},},
    {from: 'ProbC', to: 'Prim5', arrows: 'to', label: 'If Prob is hard, then Prim exists.', font: {align: 'bottom'}, color: {inherit: false},},
    {from: 'ProbA', to: 'ProbB', arrows: 'to', label: 'If ProbA is hard, then ProbB is hard.', font: {align: 'bottom'}, color: {inherit: false},},
  ];

  var data_legend = {
    nodes: nodes_legend,
    edges: edges_legend
  };

  var options_legend = {
    groups: NETWORK_GROUPS,
    interaction: {
      dragView: false,
      selectable: false,
      zoomView: false,
    },
  };

  network_legend = new vis.Network(container_legend, data_legend, options_legend);  
}