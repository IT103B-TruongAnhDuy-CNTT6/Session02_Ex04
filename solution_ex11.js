let vehicleType = prompt(
  "Nhập loại phương tiện (BIKE, CAR_4, CAR_7, DELIVERY): ",
);
let distance = parseFloat(prompt("Nhập quãng đường (km): "));
let hour = parseInt(prompt("Nhập thời gian đặt xe: "));

let baseFee = 0;
let bonusFee = 0;
let flag = true;

switch (vehicleType) {
  case "BIKE":
    baseFee = 12000;
    bonusFee = 4500;
    break;

  case "CAR_4":
    baseFee = 20000;
    bonusFee = 9000;
    break;

  case "CAR_7":
    baseFee = 25000;
    bonusFee = 11000;
    break;

  case "DELIVERY":
    baseFee = 15000;
    if (distance > 3) {
      bonusFee = 5000;
    }
    break;

  default:
    console.log("Loại xe không tồn tại!");
    flag = false;
}

if (flag === true) {
  let total = baseFee + bonusFee * (distance - 1);

  console.log("HÓA ĐƠN");
  console.log("Phương tiện:", vehicleType);
  console.log("Quãng đường:", distance, "km");
  console.log("Thời gian đặt xe: Khoảng ", hour, "giờ");
  console.log("Phí cơ bản:", baseFee, "VNĐ");
  if (bonusFee > 0) {
    console.log("Phí phụ thu:", bonusFee * (distance - 1), "VNĐ");
  }
  if ((hour >= 7 && hour < 9) || (hour >= 17 && hour < 19)) {
    total *= 1.2;
    console.log("Giờ cao điểm thu thêm phí");
  }
  console.log("Tổng tiền:", total, "VNĐ");
}
