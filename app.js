function year_save (value) // แปลงปีเป็นเดือน
{
    let yeartomonth = (value * 12)
    return yeartomonth.toFixed(2) + " ปี"
}
function rateperyear (money , yeartomonth , rate) //ดอกเบี้ยทั้งหมด
{
    let rateperyear = money * yeartomonth * rate /100
    return rateperyear.toFixed(2) + " บาท"
}
function result (money, yeartomonth ,rate ) // รวมเงินทั้งหมด
{
    let resultall = parseInt(money) * parseInt(yeartomonth) + parseInt(rate)
    return resultall.toFixed(2) + " บาท"
}
function display (element_id , value)
{
    document.getElementById(element_id).innerHTML = value
}
function final (money , year , rate)
{
    let yeartomonth = year_save(year)
    let rateall = rateperyear(money , parseInt(yeartomonth) , rate)
    let result_all = result(money , yeartomonth , rateall)
    display("rateperyear" , result_all )
    display("rateall" , rateall )
}

function iphone (result_all)
{
 if(result_all >= 46900)
 {
  display("result_iphone","คุณสามารถซื้อได้แล้ว!!!")   
 }
 else
 {
    let resultiphone = 46900 - result_all
    display ("result_iphone","คุณต้องเก็บเงินอีก " + resultiphone + " บาท !!!")
 }
}

function macbook (result_all)
{
 if(result_all >= 208900)
 {
  display("result_macbook","คุณสามารถซื้อได้แล้ว!!!")   
 }
 else
 {
    let resultimacbook = 208900 - result_all
    display ("result_macbook","คุณต้องเก็บเงินอีก " + resultimacbook + " บาท !!!")
 }
}