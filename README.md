
<!--#echo json="package.json" key="name" underline="=" -->
norm-join-path
==============
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Join and normalize path segments. Accepts arrays.
<!--/#echo -->



API
---

This module exports one function:

### normJoinPath(pathSegments[, …morePathSegments])

Expects one or more arguments. Each of them must be either

  * a path segment given as non-empty string,
  * a false-y value, which will be ignored,
  * or a (potentially empty) array of any of the above.

They are flattened (up to one level deep),
`join()`ed as path segments,
and the resulting path is `normalize()`d
using the `path` module's methods.




Usage
-----

from [test.usage.js](test.usage.js):

<!--#include file="test.usage.js" outdent="  " code="javascript"
  start="  // #BEGIN# usage demo" stop="  // #ENDOF# usage demo" -->
<!--#verbatim lncnt="20" -->
```javascript
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
```
<!--/include-->



<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
