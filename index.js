/**
 * Bài 1
 * INPUT: nhập ngày, tháng, năm
 * PROCESS:
 *         - Lấy được input(hard code)
 *         - Tìm ngày tháng tiếp theo:
 *          + Cộng thêm 1 cho ngày, giũ nguyên tháng năm
 *          + Nếu đó là ngày cuối của tháng (trừ tháng 12)=> chuyển ngày thành 1 và cộng thêm cho tháng lên thêm 1, giữ nguyên năm
 *          + Nếu đó là ngày cuối của tháng 12 thì chuyển ngày và tháng về 1, tăng giá trị năm lên thêm 1
 *         - log ra giá trị ngày tháng năm tiếp theo
 *         - Tìm ngày tháng trước đó:
 *          + Trừ đi 1 cho giá trị ngày, giữ nguyên tháng và năm
 *          + Nếu đó là ngày 1 thì chuyển giá trị ngày về ngày cuối tháng(28,29,30,31 tùy tháng) sau đó trừ giá trị của tháng đi 1, giữ nguyên năm
 *          + Nếu đó là ngày 1 tháng 1 thì chuyển giá trị của ngày thàng 31, tháng thành 12 và giá trị của năm trừ đi 1
 *         - log ra giá trị ngày tháng năm trước đó
 * OUTPUT: - ngày tháng năm tiếp theo
 *         - ngày tháng năm trước đó
 * 
 *          
 *      
 * 
 */
 var day = 29;
 var month = 2;
 var year = 2000;
 
 var dayAfter = 0;
 var monthAfter = 0;
 var yearAfter = 0;
 
 var dayBefore = 0;
 var monthBefore = 0;
 var yearBefore = 0;
 if(day >= 32){
     console.log("Không hợp lệ")
 }
 if(month >= 13){
     console.log("Không hợp lệ")
 }
 if(day >= 29 && month === 2 && year%4 !== 0){
     console.log("Không hợp lệ")
 }
 if(day >= 30 && month === 2 && year%4 === 0){
     console.log("Không hợp lệ")
 }
 if(day === 29 && month === 2 && year%4 === 0 ){
     dayAfter = 1;
     monthAfter = month + 1;
     yearAfter = year;   
     console.log("Ngày tháng năm tiếp theo:", dayAfter, "/", monthAfter, "/", yearAfter);
 } else if( day === 28 && month === 2 && year%4 !== 0){
     dayAfter = 1;
     monthAfter = month +1;
     yearAfter = year;
     console.log("Ngày tháng năm tiếp theo:", dayAfter, "/", monthAfter, "/", yearAfter);
 } else if(day === 31 && month === 1){
     dayAfter = 1;
     monthAfter = month +1;
     yearAfter = year;
     console.log("Ngày tháng năm tiếp theo:", dayAfter, "/", monthAfter, "/", yearAfter);
 } else if(day === 31 && month === 3){
     dayAfter = 1;
     monthAfter = month +1;
     yearAfter = year;
     console.log("Ngày tháng năm tiếp theo:", dayAfter, "/", monthAfter, "/", yearAfter);
 } else if(day === 31 && month === 5){
     dayAfter = 1;
     monthAfter = month + 1;
     yearAfter = year;
     console.log("Ngày tháng năm tiếp theo:", dayAfter, "/", monthAfter, "/", yearAfter);
 } else if(day === 31 && month === 7){
     dayAfter = 1;
     monthAfter = month +1;
     yearAfter = year;
     console.log("Ngày tháng năm tiếp theo:", dayAfter, "/", monthAfter, "/", yearAfter);
 } else if(day === 31 && month === 8){
     dayAfter = 1;
     monthAfter = month + 1;
     yearAfter = year;
     console.log("Ngày tháng năm tiếp theo:", dayAfter, "/", monthAfter, "/", yearAfter);
 } else if(day === 31 && month === 10){
     dayAfter = 1;
     monthAfter = month + 1;
     yearAfter = year;
     console.log("Ngày tháng năm tiếp theo:", dayAfter, "/", monthAfter, "/", yearAfter);
 } else if(day === 31 && month === 12){
     dayAfter = 1;
     monthAfter = 1;
     yearAfter = year + 1;
     console.log("Ngày tháng năm tiếp theo:", dayAfter, "/", monthAfter, "/", yearAfter);
 } else if(day === 30 && month === 2){
     dayAfter = 1;
     monthAfter = month +1;
     yearAfter = year;
     console.log("Ngày tháng năm tiếp theo:", dayAfter, "/", monthAfter, "/", yearAfter);
 } else if(day === 30 && month === 4){
     dayAfter = 1;
     monthAfter = month +1;
     yearAfter = year;
     console.log("Ngày tháng năm tiếp theo:", dayAfter, "/", monthAfter, "/", yearAfter);
 } else if(day === 30 && month === 6){
     dayAfter = 1;
     monthAfter = month + 1;
     yearAfter = year;
     console.log("Ngày tháng năm tiếp theo:", dayAfter, "/", monthAfter, "/", yearAfter);
 } else if(day === 30 && month === 9){
     dayAfter = 1;
     monthAfter = month + 1;
     yearAfter = year;
     console.log("Ngày tháng năm tiếp theo:", dayAfter, "/", monthAfter, "/", yearAfter);
 } else if(day === 30 && month === 11){
     dayAfter = 1;
     monthAfter = month + 1;
     yearAfter = year;
     console.log("Ngày tháng năm tiếp theo:", dayAfter, "/", monthAfter, "/", yearAfter);
 } else{
     dayAfter = day + 1;
     monthAfter = month;
     yearAfter = year;
     console.log("Ngày tháng năm tiếp theo:", dayAfter, "/", monthAfter, "/", yearAfter);
 }
 
 
 
 
 if(day === 1 && month === 1 ){
     dayBefore = 31;
     monthBefore = 12;
     yearBefore =year -1;
     console.log("Ngày tháng năm trước đó:", dayBefore, "/", monthBefore, "/", yearBefore);
 } else if(
     day === 1 && month === 3 && year%4 === 0
 ){
     dayBefore = 29;
     monthBefore = month - 1;
     yearBefore = year;
     console.log("Ngày tháng năm trước đó:", dayBefore, "/", monthBefore, "/", yearBefore);
 } else if(
     day === 1 && month === 3 && year%4 !== 0
 ){
     dayBefore = 28;
     monthBefore = month - 1;
     yearBefore = year;
     console.log("Ngày tháng năm trước đó:", dayBefore, "/", monthBefore, "/", yearBefore);
 } else if(
     day === 1 && month === 5
 ){
     dayBefore = 30;
     monthBefore = month - 1;
     yearBefore = year;
     console.log("Ngày tháng năm trước đó:", dayBefore, "/", monthBefore, "/", yearBefore);
 } else if(
     day === 1 && month === 7
 ){
     dayBefore = 30;
     monthBefore = month - 1;
     yearBefore = year;
     console.log("Ngày tháng năm trước đó:", dayBefore, "/", monthBefore, "/", yearBefore);
 } else if(
     day === 1 && month === 8
 ){
     dayBefore = 30;
     monthBefore = month - 1;
     yearBefore = year;
     console.log("Ngày tháng năm trước đó:", dayBefore, "/", monthBefore, "/", yearBefore);
 } else if(
     day === 1 && month === 10
 ){
     dayBefore = 30;
     monthBefore = month - 1;
     yearBefore = year;
     console.log("Ngày tháng năm trước đó:", dayBefore, "/", monthBefore, "/", yearBefore);
 } else if(
     day === 1 && month === 12
 ){
     dayBefore = 30;
     monthBefore = month - 1;
     yearBefore = year;
     console.log("Ngày tháng năm trước đó:", dayBefore, "/", monthBefore, "/", yearBefore);
 }  else if(
     day === 1 && month === 2
 ){
     dayBefore = 31;
     monthBefore = month - 1;
     yearBefore = year;
     console.log("Ngày tháng năm trước đó:", dayBefore, "/", monthBefore, "/", yearBefore);
 } else if(
     day === 1 && month === 4
 ){
     dayBefore = 31;
     monthBefore = month - 1;
     yearBefore = year;
     console.log("Ngày tháng năm trước đó:", dayBefore, "/", monthBefore, "/", yearBefore);
 } else if(
     day === 1 && month === 6
 ){
     dayBefore = 31;
     monthBefore = month - 1;
     yearBefore = year;
     console.log("Ngày tháng năm trước đó:", dayBefore, "/", monthBefore, "/", yearBefore);
 } else if(
     day === 1 && month === 9
 ){
     dayBefore = 31;
     monthBefore = month - 1;
     yearBefore = year;
     console.log("Ngày tháng năm trước đó:", dayBefore, "/", monthBefore, "/", yearBefore);
 } else if(
     day === 1 && month === 11
 ){
     dayBefore = 31;
     monthBefore = month - 1;
     yearBefore = year;
     console.log("Ngày tháng năm trước đó:", dayBefore, "/", monthBefore, "/", yearBefore);
 } else{
     dayBefore = day - 1;
     monthBefore = month;
     yearBefore = year;
     console.log("Ngày tháng năm trước đó:", dayBefore, "/", monthBefore, "/", yearBefore);
 }
 
 






/**
 * Bài 2
 * INPUT: Nhập tháng và năm
 *  FROCESS:
 *          - Lấy giá trị của tháng và năm(hardcode)
 *          - Nếu giá trị của tháng là 2 thì tháng đó có 28 ngày, 29 ngày đối với năm nhuận(năm%4=0)
 *          - Tháng có 31 ngày nếu giá trị của tháng là 1, 3, 5, 7, 8, 10, 12
 *          - Tháng có 30 ngày nếu giá trị của tháng là 4, 6, 9, 11
 *          - Log ra giá trị tháng có bao nhiêu ngày
 * OUTPUT: Tháng "" có "" ngày
 */

var months = 5;
var years = 2022;
if(months >= 13){
    console.log("Không hợp lệ")
}

if(months === 1){
    console.log("tháng", months, "có 31 ngày")
} else if(months === 3){
    console.log("tháng", months, "có 31 ngày")
}
else if(months === 5){
    console.log("tháng", months, "có 31 ngày")
}
else if(months === 7){
    console.log("tháng", months, "có 31 ngày")
}
else if(months === 8){
    console.log("tháng", months, "có 31 ngày")
}
else if(months === 10){
    console.log("tháng", months, "có 31 ngày")
}
else if(months === 12){
    console.log("tháng", months, "có 31 ngày")
} else if(months === 4){
    console.log("tháng", months, "có 30 ngày")
}
else if(months === 6){
    console.log("tháng", months, "có 30 ngày")
} else if(months === 9){
    console.log("tháng", months, "có 30 ngày")
} else if(months === 11){
    console.log("tháng", months, "có 30 ngày")
} else if(months === 2 && years%4 === 0){
    console.log("tháng", months, "có 29 ngày")
} else if(months === 2 && years%4 !== 0){
    console.log("tháng", months, "có 28 ngày")
}





/**
 * Bài 3
 * INPUT: Nhập số nguyên có 3 chữ số
 * FROCESS:
 *          - Lấy gia trị số nguyên(hardcode)
 *          - Nếu số nguyên < 100 và số nguyên > 999 thì thông báo không hợp lệ
 *          - Tách riềng giá trị hàng trăm, hàng chục, hàng đơn vị ra với nhau:
 *              + hàng trăm = Math.floor(số nguyên/100);
 *              + Hàng chục = (Math.floor(số nguyên/10))%10;
 *              + Hàng đơn vị = số nguyên - (hàng trăm*100 + hàng đơn vị*10);
 *          - Nêu ra các đọc của hàng trăm, hàng chục, hàng đơn vị rồi ghép chúng lại với nhau
 *          - Log ra các đọc
 * OUTPUT: Cách đọc số
 * 
 */
var realNumber = 211;
var hundreds = Math.floor(realNumber/100);
var dozens = (Math.floor(realNumber/10))%10;
var units = realNumber - (hundreds*100 + dozens*10);
var hundred;
var dozen;
var unit;

// console.log(hundreds, dozens, units);
 
if(realNumber >= 1000 && realNumber <= 99){
    console.log("không hợp lệ");
}

if(hundreds === 1 ){
    hundred = "một trăm"
} else if(hundreds === 2 ){
    hundred = "hai trăm"
} else if(hundreds === 3 ){
    hundred = "ba trăm"
} else if(hundreds === 4 ){
    hundred = "bốn trăm"
} else if(hundreds === 5 ){
    hundred = "năm trăm"
} else if(hundreds === 6 ){
    hundred = "sáu trăm"
} else if(hundreds === 7 ){
    hundred = "bảy trăm"
} else if(hundreds === 8 ){
    hundred = "tám trăm"
} else if(hundreds === 9 ){
    hundred = "chín trăm"
};


if(dozens === 0 && units === 0){
    dozen = "";
    unit = "";
} else if( dozens === 0){
    dozen = "lẻ"
} else if( dozens === 1){
    dozen = "mười"
} else if( dozens === 2){
    dozen = "hai mươi"
} else if( dozens === 3){
    dozen = "ba mươi"
} else if( dozens === 4){
    dozen = "bốn mươi"
} else if( dozens === 5){
    dozen = "năm mươi"
} else if( dozens === 6){
    dozen = "sáu mươi"
} else if( dozens === 7){
    dozen = "bảy mươi"
} else if( dozens === 8){
    dozen = "tám mươi"
} else if( dozens === 9){
    dozen = "chín mươi"
};

if(dozens === 1 && units === 1){
    unit = "một"
} else if( units === 1){
    unit = "mốt"
} else if( units === 2){
    unit = "hai"
} else if( units === 3){
    unit = "ba"
} else if( units === 4){
    unit = "bốn"
} else if( units === 5){
    unit = "năm"
} else if( units === 6){
    unit = "sáu"
} else if( units === 7){
    unit = "bảy"
} else if( units === 8){
    unit = "tám"
} else if( units === 9){
    unit = "chín"
};

console.log(hundred,dozen,unit);







/**
 * Bài 4
 * INPUT: Nhập giá trị tọa độ  nhà x,y của 3 sinh viên; giá trị tọa x,y độ của trường
 * FROCESS: 
 *          - lấy giá trị tọa độ x,y của 3 sinh viên; giá trị tọa x,y độ của trường(hardcode)
 *          - tính khoảng cách giữa các giá trị x của sinh viên và trường học xS = xs -x
 *          - tính khoảng cách giữa các giá trị y của sinh viên và trường học yS = ys -xy
 *          - Tính khoảng cách từ nhà của sinh viên tới trường range = Math.sqrt(xS*xS +yS*yS)
 *          - so sánh 3 khoảng cách từ nhà đến trường của mỗi sinh viên, lấy giá trị lơn nhất
 *          - Log ra tên sinh viên có khoảng cách từ nhà đến trường xa nhất
 * OUTPUT: Nhà bạn "" ở xa nhất
 */     
var name1 = "A";
var name2 = "B";
var name3 = "C";
var school = "s";
var xS1 = 0;
var yS1 = 0;
var rangeS1= 0;
var xS2 = 0;
var yS2 = 0;
var rangeS2 = 0;
var xS3 = 0;
var yS3 = 0;
var rangeS3 = 0;

var xs = 3; var ys = -3;
var x1 = 4; var y1 = -1;
var x2 = 1; var y2 =2;
var x3 = -3; var y3 = 4;

xS1 = xs - x1; yS1 = ys - y1;
xS2 = xs - x2; yS2 = ys - y2;
xS3 = xs - x3; yS3 = ys - y3;

rangeS1 = Math.sqrt(xS1*xS1 +yS1*yS1);
rangeS2 = Math.sqrt(xS2*xS2 +yS2*yS2);
rangeS3 = Math.sqrt(xS3*xS3 +yS3*yS3);

// console.log(xS2,yS2);

console.log(rangeS1,rangeS2,rangeS3);



if(rangeS1 > rangeS2 && rangeS1 > rangeS3){
    console.log("nhà bạn", name1, "xa trường nhất")
} else if(rangeS2 > rangeS1 && rangeS2 > rangeS3){
    console.log("nhà bạn", name2, "xa trường nhất")
} else if(rangeS3 > rangeS2 && rangeS3 > rangeS1){
    console.log("nhà bạn", name3, "xa trường nhất")
}







// var oiu = Math.sqrt(16);
// console.log(oiu)