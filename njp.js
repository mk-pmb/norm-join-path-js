/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

var pathLib = require('path');

function normJoinPath() {
  var seg = [];
  seg = seg.concat.apply(seg, arguments).filter(Boolean);
  return pathLib.normalize(pathLib.join.apply(pathLib, seg));
}


module.exports = normJoinPath;
