const digit = 100

let num1 = Math.floor(Math.random() * digit)
let num2 = Math.floor(Math.random() * digit)
let num3 = Math.floor(Math.random() * digit)

console.log(num1, num2, num3);

let h1_a = Math.floor(Math.random() * digit)
let h1_b = Math.floor(Math.random() * digit)
let h1_c = num3

let h2_a = Math.floor(Math.random() * digit)
let h2_b = Math.floor(Math.random() * digit)
let h2_c = num2

let h3_a = num2
let h3_b = num1
let h3_c = Math.floor(Math.random() * digit)

let h4_a = Math.floor(Math.random() * digit)
let h4_b = num3
let h4_c = Math.floor(Math.random() * digit)

let h5_a = Math.floor(Math.random() * digit)
let h5_b = Math.floor(Math.random() * digit)
let h5_c = num1

let h6_a = num1 * 2
let h6_b = Math.floor(Math.random() * digit)
let h6_c = Math.floor(Math.random() * digit)

document.getElementById(
  'h1'
).innerHTML = `<input type="text" id="b1" value="${h1_a}
	" readonly> <input type="text" id="b1"
	value="${h1_b}" readonly> <input type="text"
	id="b1" value="${h1_c}" readonly> `

document.getElementById(
  'h2'
).innerHTML = `<input type="text" id="b1" value="${h2_a}
	" readonly> <input type="text" id="b1"
	value="${h2_b}" readonly> <input type="text"
	id="b1" value="${h2_c}" readonly> `

document.getElementById(
  'h3'
).innerHTML = `<input type="text" id="b1" value="${h3_a}
	" readonly> <input type="text" id="b1"
	value="${h3_b}" readonly> <input type="text"
	id="b1" value="${h3_c}" readonly> `

document.getElementById(
  'h4'
).innerHTML = `<input type="text" id="b1" value="${h4_a}
	" readonly> <input type="text" id="b1"
	value="${h4_b}" readonly> <input type="text"
	id="b1" value="${h4_c}" readonly> `

document.getElementById(
  'h5'
).innerHTML = `<input type="text" id="b1" value="${h5_a}
	" readonly> <input type="text" id="b1"
	value="${h5_b}" readonly> <input type="text"
	id="b1" value="${h5_c}" readonly> `

document.getElementById(
  'h6'
).innerHTML = `<input type="text" id="b1" value="${h6_a}
	" readonly> <input type="text" id="b1"
	value="${h6_b}" readonly> <input type="text"
	id="b1" value="${h6_c}" readonly> `

function myfunc() {
  let a = document.getElementById('b1').value
  let b = document.getElementById('b2').value
  let c = document.getElementById('b3').value

  if (a != '' && b != '' && c != '') {
    if (a == num1 && b == num2 && c == num3) {
      $('#result').html('You Crack it.!!!!')

      $('#popup').modal('toggle')
    } else {
      $('#result').html('Try once again.????')

      $('#popup').modal('toggle')
    }
  } else {
    $('#result').html('Fill all fields.????')

    $('#popup').modal('toggle')
  }
}
