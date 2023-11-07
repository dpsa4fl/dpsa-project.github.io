(function() {var implementors = {
"bitvec":[["impl&lt;R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;<a class=\"struct\" href=\"bitvec/index/struct.BitSel.html\" title=\"struct bitvec::index::BitSel\">BitSel</a>&lt;R&gt;&gt; for <a class=\"struct\" href=\"bitvec/index/struct.BitMask.html\" title=\"struct bitvec::index::BitMask\">BitMask</a>&lt;R&gt;<span class=\"where fmt-newline\">where\n    R: <a class=\"trait\" href=\"bitvec/mem/trait.BitRegister.html\" title=\"trait bitvec::mem::BitRegister\">BitRegister</a>,</span>"]],
"chrono":[["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;&amp;'a <a class=\"struct\" href=\"chrono/struct.Duration.html\" title=\"struct chrono::Duration\">Duration</a>&gt; for <a class=\"struct\" href=\"chrono/struct.Duration.html\" title=\"struct chrono::Duration\">Duration</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;<a class=\"struct\" href=\"chrono/struct.Duration.html\" title=\"struct chrono::Duration\">Duration</a>&gt; for <a class=\"struct\" href=\"chrono/struct.Duration.html\" title=\"struct chrono::Duration\">Duration</a>"]],
"curve25519_dalek":[["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;T&gt; for <a class=\"struct\" href=\"curve25519_dalek/ristretto/struct.RistrettoPoint.html\" title=\"struct curve25519_dalek::ristretto::RistrettoPoint\">RistrettoPoint</a><span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"curve25519_dalek/ristretto/struct.RistrettoPoint.html\" title=\"struct curve25519_dalek::ristretto::RistrettoPoint\">RistrettoPoint</a>&gt;,</span>"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;T&gt; for <a class=\"struct\" href=\"curve25519_dalek/scalar/struct.Scalar.html\" title=\"struct curve25519_dalek::scalar::Scalar\">Scalar</a><span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"curve25519_dalek/scalar/struct.Scalar.html\" title=\"struct curve25519_dalek::scalar::Scalar\">Scalar</a>&gt;,</span>"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;T&gt; for <a class=\"struct\" href=\"curve25519_dalek/edwards/struct.EdwardsPoint.html\" title=\"struct curve25519_dalek::edwards::EdwardsPoint\">EdwardsPoint</a><span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"curve25519_dalek/edwards/struct.EdwardsPoint.html\" title=\"struct curve25519_dalek::edwards::EdwardsPoint\">EdwardsPoint</a>&gt;,</span>"]],
"fixed":[["impl&lt;'a, Frac: 'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;&amp;'a <a class=\"struct\" href=\"fixed/struct.FixedU8.html\" title=\"struct fixed::FixedU8\">FixedU8</a>&lt;Frac&gt;&gt; for <a class=\"struct\" href=\"fixed/struct.FixedU8.html\" title=\"struct fixed::FixedU8\">FixedU8</a>&lt;Frac&gt;"],["impl&lt;Frac&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;<a class=\"struct\" href=\"fixed/struct.FixedI32.html\" title=\"struct fixed::FixedI32\">FixedI32</a>&lt;Frac&gt;&gt; for <a class=\"struct\" href=\"fixed/struct.FixedI32.html\" title=\"struct fixed::FixedI32\">FixedI32</a>&lt;Frac&gt;"],["impl&lt;'a, F: 'a + <a class=\"trait\" href=\"fixed/traits/trait.Fixed.html\" title=\"trait fixed::traits::Fixed\">Fixed</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;&amp;'a <a class=\"struct\" href=\"fixed/struct.Wrapping.html\" title=\"struct fixed::Wrapping\">Wrapping</a>&lt;F&gt;&gt; for <a class=\"struct\" href=\"fixed/struct.Wrapping.html\" title=\"struct fixed::Wrapping\">Wrapping</a>&lt;F&gt;"],["impl&lt;'a, Frac: 'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;&amp;'a <a class=\"struct\" href=\"fixed/struct.FixedU64.html\" title=\"struct fixed::FixedU64\">FixedU64</a>&lt;Frac&gt;&gt; for <a class=\"struct\" href=\"fixed/struct.FixedU64.html\" title=\"struct fixed::FixedU64\">FixedU64</a>&lt;Frac&gt;"],["impl&lt;'a, F: 'a + <a class=\"trait\" href=\"fixed/traits/trait.Fixed.html\" title=\"trait fixed::traits::Fixed\">Fixed</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;&amp;'a <a class=\"struct\" href=\"fixed/struct.Unwrapped.html\" title=\"struct fixed::Unwrapped\">Unwrapped</a>&lt;F&gt;&gt; for <a class=\"struct\" href=\"fixed/struct.Unwrapped.html\" title=\"struct fixed::Unwrapped\">Unwrapped</a>&lt;F&gt;"],["impl&lt;'a, Frac: 'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;&amp;'a <a class=\"struct\" href=\"fixed/struct.FixedI128.html\" title=\"struct fixed::FixedI128\">FixedI128</a>&lt;Frac&gt;&gt; for <a class=\"struct\" href=\"fixed/struct.FixedI128.html\" title=\"struct fixed::FixedI128\">FixedI128</a>&lt;Frac&gt;"],["impl&lt;'a, Frac: 'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;&amp;'a <a class=\"struct\" href=\"fixed/struct.FixedU32.html\" title=\"struct fixed::FixedU32\">FixedU32</a>&lt;Frac&gt;&gt; for <a class=\"struct\" href=\"fixed/struct.FixedU32.html\" title=\"struct fixed::FixedU32\">FixedU32</a>&lt;Frac&gt;"],["impl&lt;Frac&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;<a class=\"struct\" href=\"fixed/struct.FixedU64.html\" title=\"struct fixed::FixedU64\">FixedU64</a>&lt;Frac&gt;&gt; for <a class=\"struct\" href=\"fixed/struct.FixedU64.html\" title=\"struct fixed::FixedU64\">FixedU64</a>&lt;Frac&gt;"],["impl&lt;'a, Frac: 'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;&amp;'a <a class=\"struct\" href=\"fixed/struct.FixedI32.html\" title=\"struct fixed::FixedI32\">FixedI32</a>&lt;Frac&gt;&gt; for <a class=\"struct\" href=\"fixed/struct.FixedI32.html\" title=\"struct fixed::FixedI32\">FixedI32</a>&lt;Frac&gt;"],["impl&lt;F: <a class=\"trait\" href=\"fixed/traits/trait.Fixed.html\" title=\"trait fixed::traits::Fixed\">Fixed</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;<a class=\"struct\" href=\"fixed/struct.Unwrapped.html\" title=\"struct fixed::Unwrapped\">Unwrapped</a>&lt;F&gt;&gt; for <a class=\"struct\" href=\"fixed/struct.Unwrapped.html\" title=\"struct fixed::Unwrapped\">Unwrapped</a>&lt;F&gt;"],["impl&lt;Frac&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;<a class=\"struct\" href=\"fixed/struct.FixedU16.html\" title=\"struct fixed::FixedU16\">FixedU16</a>&lt;Frac&gt;&gt; for <a class=\"struct\" href=\"fixed/struct.FixedU16.html\" title=\"struct fixed::FixedU16\">FixedU16</a>&lt;Frac&gt;"],["impl&lt;Frac&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;<a class=\"struct\" href=\"fixed/struct.FixedI128.html\" title=\"struct fixed::FixedI128\">FixedI128</a>&lt;Frac&gt;&gt; for <a class=\"struct\" href=\"fixed/struct.FixedI128.html\" title=\"struct fixed::FixedI128\">FixedI128</a>&lt;Frac&gt;"],["impl&lt;'a, Frac: 'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;&amp;'a <a class=\"struct\" href=\"fixed/struct.FixedI64.html\" title=\"struct fixed::FixedI64\">FixedI64</a>&lt;Frac&gt;&gt; for <a class=\"struct\" href=\"fixed/struct.FixedI64.html\" title=\"struct fixed::FixedI64\">FixedI64</a>&lt;Frac&gt;"],["impl&lt;'a, Frac: 'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;&amp;'a <a class=\"struct\" href=\"fixed/struct.FixedU128.html\" title=\"struct fixed::FixedU128\">FixedU128</a>&lt;Frac&gt;&gt; for <a class=\"struct\" href=\"fixed/struct.FixedU128.html\" title=\"struct fixed::FixedU128\">FixedU128</a>&lt;Frac&gt;"],["impl&lt;Frac&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;<a class=\"struct\" href=\"fixed/struct.FixedI16.html\" title=\"struct fixed::FixedI16\">FixedI16</a>&lt;Frac&gt;&gt; for <a class=\"struct\" href=\"fixed/struct.FixedI16.html\" title=\"struct fixed::FixedI16\">FixedI16</a>&lt;Frac&gt;"],["impl&lt;'a, F: 'a + <a class=\"trait\" href=\"fixed/traits/trait.Fixed.html\" title=\"trait fixed::traits::Fixed\">Fixed</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;&amp;'a <a class=\"struct\" href=\"fixed/struct.Saturating.html\" title=\"struct fixed::Saturating\">Saturating</a>&lt;F&gt;&gt; for <a class=\"struct\" href=\"fixed/struct.Saturating.html\" title=\"struct fixed::Saturating\">Saturating</a>&lt;F&gt;"],["impl&lt;F: <a class=\"trait\" href=\"fixed/traits/trait.Fixed.html\" title=\"trait fixed::traits::Fixed\">Fixed</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;<a class=\"struct\" href=\"fixed/struct.Saturating.html\" title=\"struct fixed::Saturating\">Saturating</a>&lt;F&gt;&gt; for <a class=\"struct\" href=\"fixed/struct.Saturating.html\" title=\"struct fixed::Saturating\">Saturating</a>&lt;F&gt;"],["impl&lt;Frac&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;<a class=\"struct\" href=\"fixed/struct.FixedU128.html\" title=\"struct fixed::FixedU128\">FixedU128</a>&lt;Frac&gt;&gt; for <a class=\"struct\" href=\"fixed/struct.FixedU128.html\" title=\"struct fixed::FixedU128\">FixedU128</a>&lt;Frac&gt;"],["impl&lt;'a, Frac: 'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;&amp;'a <a class=\"struct\" href=\"fixed/struct.FixedI16.html\" title=\"struct fixed::FixedI16\">FixedI16</a>&lt;Frac&gt;&gt; for <a class=\"struct\" href=\"fixed/struct.FixedI16.html\" title=\"struct fixed::FixedI16\">FixedI16</a>&lt;Frac&gt;"],["impl&lt;Frac&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;<a class=\"struct\" href=\"fixed/struct.FixedU8.html\" title=\"struct fixed::FixedU8\">FixedU8</a>&lt;Frac&gt;&gt; for <a class=\"struct\" href=\"fixed/struct.FixedU8.html\" title=\"struct fixed::FixedU8\">FixedU8</a>&lt;Frac&gt;"],["impl&lt;F: <a class=\"trait\" href=\"fixed/traits/trait.Fixed.html\" title=\"trait fixed::traits::Fixed\">Fixed</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;<a class=\"struct\" href=\"fixed/struct.Wrapping.html\" title=\"struct fixed::Wrapping\">Wrapping</a>&lt;F&gt;&gt; for <a class=\"struct\" href=\"fixed/struct.Wrapping.html\" title=\"struct fixed::Wrapping\">Wrapping</a>&lt;F&gt;"],["impl&lt;'a, Frac: 'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;&amp;'a <a class=\"struct\" href=\"fixed/struct.FixedU16.html\" title=\"struct fixed::FixedU16\">FixedU16</a>&lt;Frac&gt;&gt; for <a class=\"struct\" href=\"fixed/struct.FixedU16.html\" title=\"struct fixed::FixedU16\">FixedU16</a>&lt;Frac&gt;"],["impl&lt;Frac&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;<a class=\"struct\" href=\"fixed/struct.FixedU32.html\" title=\"struct fixed::FixedU32\">FixedU32</a>&lt;Frac&gt;&gt; for <a class=\"struct\" href=\"fixed/struct.FixedU32.html\" title=\"struct fixed::FixedU32\">FixedU32</a>&lt;Frac&gt;"],["impl&lt;'a, Frac: 'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;&amp;'a <a class=\"struct\" href=\"fixed/struct.FixedI8.html\" title=\"struct fixed::FixedI8\">FixedI8</a>&lt;Frac&gt;&gt; for <a class=\"struct\" href=\"fixed/struct.FixedI8.html\" title=\"struct fixed::FixedI8\">FixedI8</a>&lt;Frac&gt;"],["impl&lt;Frac&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;<a class=\"struct\" href=\"fixed/struct.FixedI64.html\" title=\"struct fixed::FixedI64\">FixedI64</a>&lt;Frac&gt;&gt; for <a class=\"struct\" href=\"fixed/struct.FixedI64.html\" title=\"struct fixed::FixedI64\">FixedI64</a>&lt;Frac&gt;"],["impl&lt;Frac&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;<a class=\"struct\" href=\"fixed/struct.FixedI8.html\" title=\"struct fixed::FixedI8\">FixedI8</a>&lt;Frac&gt;&gt; for <a class=\"struct\" href=\"fixed/struct.FixedI8.html\" title=\"struct fixed::FixedI8\">FixedI8</a>&lt;Frac&gt;"]],
"half":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;<a class=\"struct\" href=\"half/struct.bf16.html\" title=\"struct half::bf16\">bf16</a>&gt; for <a class=\"struct\" href=\"half/struct.bf16.html\" title=\"struct half::bf16\">bf16</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;&amp;'a <a class=\"struct\" href=\"half/struct.bf16.html\" title=\"struct half::bf16\">bf16</a>&gt; for <a class=\"struct\" href=\"half/struct.bf16.html\" title=\"struct half::bf16\">bf16</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;<a class=\"struct\" href=\"half/struct.f16.html\" title=\"struct half::f16\">f16</a>&gt; for <a class=\"struct\" href=\"half/struct.f16.html\" title=\"struct half::f16\">f16</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;&amp;'a <a class=\"struct\" href=\"half/struct.f16.html\" title=\"struct half::f16\">f16</a>&gt; for <a class=\"struct\" href=\"half/struct.f16.html\" title=\"struct half::f16\">f16</a>"]],
"num_bigint":[["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;T&gt; for <a class=\"struct\" href=\"num_bigint/struct.BigInt.html\" title=\"struct num_bigint::BigInt\">BigInt</a><span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"num_bigint/struct.BigInt.html\" title=\"struct num_bigint::BigInt\">BigInt</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;T, Output = <a class=\"struct\" href=\"num_bigint/struct.BigInt.html\" title=\"struct num_bigint::BigInt\">BigInt</a>&gt;,</span>"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;T&gt; for <a class=\"struct\" href=\"num_bigint/struct.BigUint.html\" title=\"struct num_bigint::BigUint\">BigUint</a><span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"num_bigint/struct.BigUint.html\" title=\"struct num_bigint::BigUint\">BigUint</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;T, Output = <a class=\"struct\" href=\"num_bigint/struct.BigUint.html\" title=\"struct num_bigint::BigUint\">BigUint</a>&gt;,</span>"]],
"num_rational":[["impl&lt;'a, T: <a class=\"trait\" href=\"num_integer/trait.Integer.html\" title=\"trait num_integer::Integer\">Integer</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;&amp;'a <a class=\"struct\" href=\"num_rational/struct.Ratio.html\" title=\"struct num_rational::Ratio\">Ratio</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"num_rational/struct.Ratio.html\" title=\"struct num_rational::Ratio\">Ratio</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"num_integer/trait.Integer.html\" title=\"trait num_integer::Integer\">Integer</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;<a class=\"struct\" href=\"num_rational/struct.Ratio.html\" title=\"struct num_rational::Ratio\">Ratio</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"num_rational/struct.Ratio.html\" title=\"struct num_rational::Ratio\">Ratio</a>&lt;T&gt;"]],
"ordered_float":[["impl&lt;'a, T: <a class=\"trait\" href=\"ordered_float/trait.Float.html\" title=\"trait ordered_float::Float\">Float</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a> + 'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;&amp;'a <a class=\"struct\" href=\"ordered_float/struct.OrderedFloat.html\" title=\"struct ordered_float::OrderedFloat\">OrderedFloat</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"ordered_float/struct.OrderedFloat.html\" title=\"struct ordered_float::OrderedFloat\">OrderedFloat</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"ordered_float/trait.Float.html\" title=\"trait ordered_float::Float\">Float</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;<a class=\"struct\" href=\"ordered_float/struct.NotNan.html\" title=\"struct ordered_float::NotNan\">NotNan</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"ordered_float/struct.NotNan.html\" title=\"struct ordered_float::NotNan\">NotNan</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"ordered_float/trait.Float.html\" title=\"trait ordered_float::Float\">Float</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;<a class=\"struct\" href=\"ordered_float/struct.OrderedFloat.html\" title=\"struct ordered_float::OrderedFloat\">OrderedFloat</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"ordered_float/struct.OrderedFloat.html\" title=\"struct ordered_float::OrderedFloat\">OrderedFloat</a>&lt;T&gt;"],["impl&lt;'a, T: <a class=\"trait\" href=\"ordered_float/trait.Float.html\" title=\"trait ordered_float::Float\">Float</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a> + 'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;&amp;'a <a class=\"struct\" href=\"ordered_float/struct.NotNan.html\" title=\"struct ordered_float::NotNan\">NotNan</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"ordered_float/struct.NotNan.html\" title=\"struct ordered_float::NotNan\">NotNan</a>&lt;T&gt;"]],
"p256":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;<a class=\"struct\" href=\"p256/struct.ProjectivePoint.html\" title=\"struct p256::ProjectivePoint\">ProjectivePoint</a>&gt; for <a class=\"struct\" href=\"p256/struct.ProjectivePoint.html\" title=\"struct p256::ProjectivePoint\">ProjectivePoint</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;&amp;'a <a class=\"struct\" href=\"p256/struct.ProjectivePoint.html\" title=\"struct p256::ProjectivePoint\">ProjectivePoint</a>&gt; for <a class=\"struct\" href=\"p256/struct.ProjectivePoint.html\" title=\"struct p256::ProjectivePoint\">ProjectivePoint</a>"]],
"time":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;<a class=\"struct\" href=\"time/struct.Duration.html\" title=\"struct time::Duration\">Duration</a>&gt; for <a class=\"struct\" href=\"time/struct.Duration.html\" title=\"struct time::Duration\">Duration</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;&amp;'a <a class=\"struct\" href=\"time/struct.Duration.html\" title=\"struct time::Duration\">Duration</a>&gt; for <a class=\"struct\" href=\"time/struct.Duration.html\" title=\"struct time::Duration\">Duration</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()