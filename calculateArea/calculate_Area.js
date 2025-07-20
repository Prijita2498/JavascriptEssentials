let length;
let breadth;

function calculateArea() {
    length = parseFloat(document.getElementById("length").value);
    breadth = parseFloat(document.getElementById("breadth").value);

    let area = length * breadth;

    document.getElementById("result").innerText = `The rea of rectangle is : ${area}`;

}