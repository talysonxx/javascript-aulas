/*function mult(n1 = 0, n2 = 0) {
    return n1 * n2
}

console.log(mult(10, 9))*/

/*function par_impar(x) {
    if (x % 2 == 0) {
        return 'par'
    } else {
        return 'ímpar'
    }
}

console.log(par_impar(2), typeof(par_impar(3)))*/

/*var x = function soma(n1 = 0, n2 = 0) {
    return n1 + n2
}

console.log(x(2, 2))*/

function fatorial(x) {
    fat = 1
    for (var cont = x; cont > 1; cont--) {
        fat *= cont
    }

    return fat
}

console.log(fatorial(5))