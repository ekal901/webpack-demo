//named export : 여러개 사용 가능
//named export의 경우 named import를 사용해야한다.
export var area = function(r) {
    return Math.PI * r * r;
}

export var circumference = function(r) {
    return 2 * Math.PI * r;
}