/*jslint indent: 2, maxlen: 80, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

var equal = require('assert').deepStrictEqual;

(function readmeDemo() {
  // #BEGIN# usage demo
  var join = require('norm-join-path'),
    want = 'foo/bar/qux';

  equal(join('./foo/bar/baz/../qux'), want);
  equal(join('./foo/bar', 'baz/../qux'), want);
  equal(join('./foo/bar', 'baz/../', '', 'qux'), want);
  equal(join('./foo/bar', 'baz', '../qux'), want);
  equal(join('./foo/bar', ['baz/../', '/qux']), want);
  equal(join('./foo/bar', ['baz', '../qux']), want);
  equal(join('./foo/bar', false, ['baz', false, '../qux']), want);
  equal(join(['./foo/bar'], ['baz', '../qux']), want);

  equal(join(['./foo/bar', 'baz', '../qux']), want);
  equal(join(['./foo/bar', 'baz', '..', 'qux']), want);

  equal(join(['./foo/bar'], [], ['baz', '../qux']), want);
  equal(join(['./foo/bar'], [], 'baz', '../qux'), want);
  equal(join(['./foo/bar'], [], 'baz', ['../qux']), want);
  // #ENDOF# usage demo
}());









console.log("+OK tests passed.");   //= "+OK tests passed."
