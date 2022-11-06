<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# csubf

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Subtract two single-precision complex floating-point numbers.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import csubf from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-ops-csubf@v0.0.2-esm/index.mjs';
```

#### csubf( z1, z2 )

Subtracts two single-precision complex floating-point numbers.

```javascript
import Complex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32@esm/index.mjs';
import real from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-real@esm/index.mjs';
import imag from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-imag@esm/index.mjs';

var z1 = new Complex64( 5.0, 3.0 );
var z2 = new Complex64( -2.0, 1.0 );

var v = csubf( z1, z2 );
// returns <Complex64>

var re = real( v );
// returns 7.0

var im = imag( v );
// returns 2.0
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import Complex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32@esm/index.mjs';
var discreteUniform = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-discrete-uniform' ).factory;
import csubf from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-ops-csubf@v0.0.2-esm/index.mjs';

var rand;
var z1;
var z2;
var z3;
var i;

rand = discreteUniform( -50, 50 );
for ( i = 0; i < 100; i++ ) {
    z1 = new Complex64( rand(), rand() );
    z2 = new Complex64( rand(), rand() );
    z3 = csubf( z1, z2 );
    console.log( '(%s) - (%s) = %s', z1.toString(), z2.toString(), z3.toString() );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-ops-csubf.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-ops-csubf

[test-image]: https://github.com/stdlib-js/math-base-ops-csubf/actions/workflows/test.yml/badge.svg?branch=v0.0.2
[test-url]: https://github.com/stdlib-js/math-base-ops-csubf/actions/workflows/test.yml?query=branch:v0.0.2

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-ops-csubf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-ops-csubf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-ops-csubf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-ops-csubf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-ops-csubf/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-ops-csubf/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-ops-csubf/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-ops-csubf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-ops-csubf/main/LICENSE

</section>

<!-- /.links -->
