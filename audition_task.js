function triangleAnswer() {
    let side1 = Number(document.getElementById('side1').value);
    let side2 = Number(document.getElementById('side2').value);
    let side3 = Number(document.getElementById('side3').value);
    if (side1 != 0 && side2 != 0 && side3 != 0) {
        if (side1 < side2 + side3 && side2 < side1 + side3 && side3 < side1 + side2) {
            if (side1 == side2 && side2 == side3 && side1 == side3) {
                document.getElementById("image").src = "tr-3.jpg";
            } else if (side1 == side2 || side2 == side3 || side1 == side3) {
                document.getElementById("image").src = "tr-2.jpg";
            } else {
                document.getElementById("image").src = "tr-1.jpg";
            }
        }
        else {
            document.getElementById("image").src = "tr-4.jpg";
        }
    } else {
        document.getElementById("image").src = "tr-4.jpg";
    }
}