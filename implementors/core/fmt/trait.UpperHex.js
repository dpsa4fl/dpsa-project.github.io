(function() {var implementors = {
"base16ct":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"base16ct/struct.HexDisplay.html\" title=\"struct base16ct::HexDisplay\">HexDisplay</a>&lt;'_&gt;"]],
"bitvec":[["impl&lt;T, O&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"bitvec/boxed/struct.BitBox.html\" title=\"struct bitvec::boxed::BitBox\">BitBox</a>&lt;T, O&gt;<span class=\"where fmt-newline\">where\n    O: <a class=\"trait\" href=\"bitvec/order/trait.BitOrder.html\" title=\"trait bitvec::order::BitOrder\">BitOrder</a>,\n    T: <a class=\"trait\" href=\"bitvec/store/trait.BitStore.html\" title=\"trait bitvec::store::BitStore\">BitStore</a>,</span>"],["impl&lt;'a, T, O&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"enum\" href=\"bitvec/domain/enum.Domain.html\" title=\"enum bitvec::domain::Domain\">Domain</a>&lt;'a, <a class=\"struct\" href=\"bitvec/ptr/struct.Const.html\" title=\"struct bitvec::ptr::Const\">Const</a>, T, O&gt;<span class=\"where fmt-newline\">where\n    O: <a class=\"trait\" href=\"bitvec/order/trait.BitOrder.html\" title=\"trait bitvec::order::BitOrder\">BitOrder</a>,\n    T: <a class=\"trait\" href=\"bitvec/store/trait.BitStore.html\" title=\"trait bitvec::store::BitStore\">BitStore</a>,</span>"],["impl&lt;T, O&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"bitvec/slice/struct.BitSlice.html\" title=\"struct bitvec::slice::BitSlice\">BitSlice</a>&lt;T, O&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"bitvec/store/trait.BitStore.html\" title=\"trait bitvec::store::BitStore\">BitStore</a>,\n    O: <a class=\"trait\" href=\"bitvec/order/trait.BitOrder.html\" title=\"trait bitvec::order::BitOrder\">BitOrder</a>,</span>"],["impl&lt;A, O&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"bitvec/array/struct.BitArray.html\" title=\"struct bitvec::array::BitArray\">BitArray</a>&lt;A, O&gt;<span class=\"where fmt-newline\">where\n    O: <a class=\"trait\" href=\"bitvec/order/trait.BitOrder.html\" title=\"trait bitvec::order::BitOrder\">BitOrder</a>,\n    A: <a class=\"trait\" href=\"bitvec/view/trait.BitViewSized.html\" title=\"trait bitvec::view::BitViewSized\">BitViewSized</a>,</span>"],["impl&lt;T, O&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"bitvec/vec/struct.BitVec.html\" title=\"struct bitvec::vec::BitVec\">BitVec</a>&lt;T, O&gt;<span class=\"where fmt-newline\">where\n    O: <a class=\"trait\" href=\"bitvec/order/trait.BitOrder.html\" title=\"trait bitvec::order::BitOrder\">BitOrder</a>,\n    T: <a class=\"trait\" href=\"bitvec/store/trait.BitStore.html\" title=\"trait bitvec::store::BitStore\">BitStore</a>,</span>"]],
"bytes":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"bytes/struct.Bytes.html\" title=\"struct bytes::Bytes\">Bytes</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"bytes/struct.BytesMut.html\" title=\"struct bytes::BytesMut\">BytesMut</a>"]],
"crypto_bigint":[["impl&lt;const LIMBS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.73.0/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"crypto_bigint/struct.UInt.html\" title=\"struct crypto_bigint::UInt\">UInt</a>&lt;LIMBS&gt;"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"crypto_bigint/struct.Wrapping.html\" title=\"struct crypto_bigint::Wrapping\">Wrapping</a>&lt;T&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"crypto_bigint/struct.Limb.html\" title=\"struct crypto_bigint::Limb\">Limb</a>"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"crypto_bigint/struct.NonZero.html\" title=\"struct crypto_bigint::NonZero\">NonZero</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> + <a class=\"trait\" href=\"crypto_bigint/prelude/trait.Zero.html\" title=\"trait crypto_bigint::prelude::Zero\">Zero</a>,</span>"]],
"deranged":[["impl&lt;const MIN: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.73.0/std/primitive.i128.html\">i128</a>, const MAX: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.73.0/std/primitive.i128.html\">i128</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"deranged/struct.RangedI128.html\" title=\"struct deranged::RangedI128\">RangedI128</a>&lt;MIN, MAX&gt;"],["impl&lt;const MIN: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.73.0/std/primitive.usize.html\">usize</a>, const MAX: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.73.0/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"deranged/struct.RangedUsize.html\" title=\"struct deranged::RangedUsize\">RangedUsize</a>&lt;MIN, MAX&gt;"],["impl&lt;const MIN: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.73.0/std/primitive.u16.html\">u16</a>, const MAX: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.73.0/std/primitive.u16.html\">u16</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"deranged/struct.RangedU16.html\" title=\"struct deranged::RangedU16\">RangedU16</a>&lt;MIN, MAX&gt;"],["impl&lt;const MIN: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.73.0/std/primitive.u8.html\">u8</a>, const MAX: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.73.0/std/primitive.u8.html\">u8</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"deranged/struct.RangedU8.html\" title=\"struct deranged::RangedU8\">RangedU8</a>&lt;MIN, MAX&gt;"],["impl&lt;const MIN: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.73.0/std/primitive.i8.html\">i8</a>, const MAX: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.73.0/std/primitive.i8.html\">i8</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"deranged/struct.RangedI8.html\" title=\"struct deranged::RangedI8\">RangedI8</a>&lt;MIN, MAX&gt;"],["impl&lt;const MIN: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.73.0/std/primitive.i32.html\">i32</a>, const MAX: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.73.0/std/primitive.i32.html\">i32</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"deranged/struct.RangedI32.html\" title=\"struct deranged::RangedI32\">RangedI32</a>&lt;MIN, MAX&gt;"],["impl&lt;const MIN: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.73.0/std/primitive.u32.html\">u32</a>, const MAX: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.73.0/std/primitive.u32.html\">u32</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"deranged/struct.RangedU32.html\" title=\"struct deranged::RangedU32\">RangedU32</a>&lt;MIN, MAX&gt;"],["impl&lt;const MIN: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.73.0/std/primitive.i64.html\">i64</a>, const MAX: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.73.0/std/primitive.i64.html\">i64</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"deranged/struct.RangedI64.html\" title=\"struct deranged::RangedI64\">RangedI64</a>&lt;MIN, MAX&gt;"],["impl&lt;const MIN: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.73.0/std/primitive.u128.html\">u128</a>, const MAX: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.73.0/std/primitive.u128.html\">u128</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"deranged/struct.RangedU128.html\" title=\"struct deranged::RangedU128\">RangedU128</a>&lt;MIN, MAX&gt;"],["impl&lt;const MIN: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.73.0/std/primitive.isize.html\">isize</a>, const MAX: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.73.0/std/primitive.isize.html\">isize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"deranged/struct.RangedIsize.html\" title=\"struct deranged::RangedIsize\">RangedIsize</a>&lt;MIN, MAX&gt;"],["impl&lt;const MIN: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.73.0/std/primitive.i16.html\">i16</a>, const MAX: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.73.0/std/primitive.i16.html\">i16</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"deranged/struct.RangedI16.html\" title=\"struct deranged::RangedI16\">RangedI16</a>&lt;MIN, MAX&gt;"],["impl&lt;const MIN: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.73.0/std/primitive.u64.html\">u64</a>, const MAX: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.73.0/std/primitive.u64.html\">u64</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"deranged/struct.RangedU64.html\" title=\"struct deranged::RangedU64\">RangedU64</a>&lt;MIN, MAX&gt;"]],
"elliptic_curve":[["impl&lt;C&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"elliptic_curve/struct.ScalarCore.html\" title=\"struct elliptic_curve::ScalarCore\">ScalarCore</a>&lt;C&gt;<span class=\"where fmt-newline\">where\n    C: <a class=\"trait\" href=\"elliptic_curve/trait.Curve.html\" title=\"trait elliptic_curve::Curve\">Curve</a>,</span>"],["impl&lt;C&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"elliptic_curve/struct.NonZeroScalar.html\" title=\"struct elliptic_curve::NonZeroScalar\">NonZeroScalar</a>&lt;C&gt;<span class=\"where fmt-newline\">where\n    C: <a class=\"trait\" href=\"elliptic_curve/trait.Curve.html\" title=\"trait elliptic_curve::Curve\">Curve</a> + <a class=\"trait\" href=\"elliptic_curve/trait.ScalarArithmetic.html\" title=\"trait elliptic_curve::ScalarArithmetic\">ScalarArithmetic</a>,</span>"]],
"fixed":[["impl&lt;Frac: <a class=\"trait\" href=\"fixed/types/extra/trait.LeEqU8.html\" title=\"trait fixed::types::extra::LeEqU8\">LeEqU8</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"fixed/struct.FixedI8.html\" title=\"struct fixed::FixedI8\">FixedI8</a>&lt;Frac&gt;"],["impl&lt;F: <a class=\"trait\" href=\"fixed/traits/trait.Fixed.html\" title=\"trait fixed::traits::Fixed\">Fixed</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"fixed/struct.Wrapping.html\" title=\"struct fixed::Wrapping\">Wrapping</a>&lt;F&gt;"],["impl&lt;F: <a class=\"trait\" href=\"fixed/traits/trait.Fixed.html\" title=\"trait fixed::traits::Fixed\">Fixed</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"fixed/struct.Unwrapped.html\" title=\"struct fixed::Unwrapped\">Unwrapped</a>&lt;F&gt;"],["impl&lt;Frac: <a class=\"trait\" href=\"fixed/types/extra/trait.LeEqU16.html\" title=\"trait fixed::types::extra::LeEqU16\">LeEqU16</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"fixed/struct.FixedI16.html\" title=\"struct fixed::FixedI16\">FixedI16</a>&lt;Frac&gt;"],["impl&lt;Frac: <a class=\"trait\" href=\"fixed/types/extra/trait.LeEqU16.html\" title=\"trait fixed::types::extra::LeEqU16\">LeEqU16</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"fixed/struct.FixedU16.html\" title=\"struct fixed::FixedU16\">FixedU16</a>&lt;Frac&gt;"],["impl&lt;Frac: <a class=\"trait\" href=\"fixed/types/extra/trait.LeEqU128.html\" title=\"trait fixed::types::extra::LeEqU128\">LeEqU128</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"fixed/struct.FixedI128.html\" title=\"struct fixed::FixedI128\">FixedI128</a>&lt;Frac&gt;"],["impl&lt;Frac: <a class=\"trait\" href=\"fixed/types/extra/trait.LeEqU32.html\" title=\"trait fixed::types::extra::LeEqU32\">LeEqU32</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"fixed/struct.FixedI32.html\" title=\"struct fixed::FixedI32\">FixedI32</a>&lt;Frac&gt;"],["impl&lt;Frac: <a class=\"trait\" href=\"fixed/types/extra/trait.LeEqU64.html\" title=\"trait fixed::types::extra::LeEqU64\">LeEqU64</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"fixed/struct.FixedU64.html\" title=\"struct fixed::FixedU64\">FixedU64</a>&lt;Frac&gt;"],["impl&lt;Frac: <a class=\"trait\" href=\"fixed/types/extra/trait.LeEqU128.html\" title=\"trait fixed::types::extra::LeEqU128\">LeEqU128</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"fixed/struct.FixedU128.html\" title=\"struct fixed::FixedU128\">FixedU128</a>&lt;Frac&gt;"],["impl&lt;Frac: <a class=\"trait\" href=\"fixed/types/extra/trait.LeEqU32.html\" title=\"trait fixed::types::extra::LeEqU32\">LeEqU32</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"fixed/struct.FixedU32.html\" title=\"struct fixed::FixedU32\">FixedU32</a>&lt;Frac&gt;"],["impl&lt;Frac: <a class=\"trait\" href=\"fixed/types/extra/trait.LeEqU8.html\" title=\"trait fixed::types::extra::LeEqU8\">LeEqU8</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"fixed/struct.FixedU8.html\" title=\"struct fixed::FixedU8\">FixedU8</a>&lt;Frac&gt;"],["impl&lt;F: <a class=\"trait\" href=\"fixed/traits/trait.Fixed.html\" title=\"trait fixed::traits::Fixed\">Fixed</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"fixed/struct.Saturating.html\" title=\"struct fixed::Saturating\">Saturating</a>&lt;F&gt;"],["impl&lt;Frac: <a class=\"trait\" href=\"fixed/types/extra/trait.LeEqU64.html\" title=\"trait fixed::types::extra::LeEqU64\">LeEqU64</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"fixed/struct.FixedI64.html\" title=\"struct fixed::FixedI64\">FixedI64</a>&lt;Frac&gt;"]],
"generic_array":[["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"generic_array/struct.GenericArray.html\" title=\"struct generic_array::GenericArray\">GenericArray</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.73.0/core/primitive.u8.html\">u8</a>, T&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;T&gt; + <a class=\"trait\" href=\"generic_array/trait.ArrayLength.html\" title=\"trait generic_array::ArrayLength\">ArrayLength</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.73.0/core/primitive.u8.html\">u8</a>&gt;,\n    &lt;T as <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;T&gt;&gt;::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.73.0/core/ops/arith/trait.Add.html#associatedtype.Output\" title=\"type core::ops::arith::Add::Output\">Output</a>: <a class=\"trait\" href=\"generic_array/trait.ArrayLength.html\" title=\"trait generic_array::ArrayLength\">ArrayLength</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.73.0/core/primitive.u8.html\">u8</a>&gt;,</span>"]],
"half":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"half/struct.bf16.html\" title=\"struct half::bf16\">bf16</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"half/struct.f16.html\" title=\"struct half::f16\">f16</a>"]],
"itertools":[["impl&lt;'a, I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"itertools/structs/struct.Format.html\" title=\"struct itertools::structs::Format\">Format</a>&lt;'a, I&gt;<span class=\"where fmt-newline\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>,\n    I::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.73.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item\" title=\"type core::iter::traits::iterator::Iterator::Item\">Item</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a>,</span>"]],
"num_bigint":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"num_bigint/struct.BigUint.html\" title=\"struct num_bigint::BigUint\">BigUint</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"num_bigint/struct.BigInt.html\" title=\"struct num_bigint::BigInt\">BigInt</a>"]],
"num_rational":[["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"num_integer/trait.Integer.html\" title=\"trait num_integer::Integer\">Integer</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"num_rational/struct.Ratio.html\" title=\"struct num_rational::Ratio\">Ratio</a>&lt;T&gt;"]],
"sec1":[["impl&lt;Size&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"sec1/point/struct.EncodedPoint.html\" title=\"struct sec1::point::EncodedPoint\">EncodedPoint</a>&lt;Size&gt;<span class=\"where fmt-newline\">where\n    Size: <a class=\"trait\" href=\"sec1/point/trait.ModulusSize.html\" title=\"trait sec1::point::ModulusSize\">ModulusSize</a>,</span>"]],
"tinyvec":[["impl&lt;A: <a class=\"trait\" href=\"tinyvec/trait.Array.html\" title=\"trait tinyvec::Array\">Array</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"tinyvec/struct.ArrayVec.html\" title=\"struct tinyvec::ArrayVec\">ArrayVec</a>&lt;A&gt;<span class=\"where fmt-newline\">where\n    A::<a class=\"associatedtype\" href=\"tinyvec/trait.Array.html#associatedtype.Item\" title=\"type tinyvec::Array::Item\">Item</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a>,</span>"],["impl&lt;A: <a class=\"trait\" href=\"tinyvec/trait.Array.html\" title=\"trait tinyvec::Array\">Array</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"enum\" href=\"tinyvec/enum.TinyVec.html\" title=\"enum tinyvec::TinyVec\">TinyVec</a>&lt;A&gt;<span class=\"where fmt-newline\">where\n    A::<a class=\"associatedtype\" href=\"tinyvec/trait.Array.html#associatedtype.Item\" title=\"type tinyvec::Array::Item\">Item</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a>,</span>"],["impl&lt;'s, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"tinyvec/struct.SliceVec.html\" title=\"struct tinyvec::SliceVec\">SliceVec</a>&lt;'s, T&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a>,</span>"]],
"uuid":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"uuid/fmt/struct.Braced.html\" title=\"struct uuid::fmt::Braced\">Braced</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"uuid/fmt/struct.Simple.html\" title=\"struct uuid::fmt::Simple\">Simple</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"uuid/fmt/struct.Hyphenated.html\" title=\"struct uuid::fmt::Hyphenated\">Hyphenated</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"uuid/struct.Uuid.html\" title=\"struct uuid::Uuid\">Uuid</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"uuid/fmt/struct.Urn.html\" title=\"struct uuid::fmt::Urn\">Urn</a>"]],
"winnow":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"winnow/stream/struct.Bytes.html\" title=\"struct winnow::stream::Bytes\">Bytes</a>"]],
"wyz":[["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"wyz/fmt/struct.FmtDisplay.html\" title=\"struct wyz::fmt::FmtDisplay\">FmtDisplay</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.Octal.html\" title=\"trait core::fmt::Octal\">Octal</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"wyz/fmt/struct.FmtOctal.html\" title=\"struct wyz::fmt::FmtOctal\">FmtOctal</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.LowerHex.html\" title=\"trait core::fmt::LowerHex\">LowerHex</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"wyz/fmt/struct.FmtLowerHex.html\" title=\"struct wyz::fmt::FmtLowerHex\">FmtLowerHex</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"wyz/fmt/struct.FmtPointer.html\" title=\"struct wyz::fmt::FmtPointer\">FmtPointer</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"wyz/fmt/struct.FmtBinary.html\" title=\"struct wyz::fmt::FmtBinary\">FmtBinary</a>&lt;T&gt;"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"wyz/fmt/struct.FmtList.html\" title=\"struct wyz::fmt::FmtList\">FmtList</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    for&lt;'a&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.73.0/core/primitive.reference.html\">&amp;'a T</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>,\n    for&lt;'a&gt; &lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.73.0/core/primitive.reference.html\">&amp;'a T</a> as <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&gt;::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.73.0/core/iter/traits/collect/trait.IntoIterator.html#associatedtype.Item\" title=\"type core::iter::traits::collect::IntoIterator::Item\">Item</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a>,</span>"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperExp.html\" title=\"trait core::fmt::UpperExp\">UpperExp</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"wyz/fmt/struct.FmtUpperExp.html\" title=\"struct wyz::fmt::FmtUpperExp\">FmtUpperExp</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.LowerExp.html\" title=\"trait core::fmt::LowerExp\">LowerExp</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"wyz/fmt/struct.FmtLowerExp.html\" title=\"struct wyz::fmt::FmtLowerExp\">FmtLowerExp</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> for <a class=\"struct\" href=\"wyz/fmt/struct.FmtUpperHex.html\" title=\"struct wyz::fmt::FmtUpperHex\">FmtUpperHex</a>&lt;T&gt;"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()