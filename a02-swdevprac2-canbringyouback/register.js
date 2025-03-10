const myFunction=()=> {

    var checkBox = document.getElementById("air-ticket");
    // Get the output text
    var contactPerson = document.getElementById("contact-person").value;
    var contactNumber = document.getElementById("contact-number").value;
    var groupNumber = document.getElementById("group-number").value;
    var alertString="";
    var alertString2="";
    if(contactPerson===""){alertString+="ช่องผู้ติดต่อห้ามเว้นว่าง \n"}
    if(contactNumber===""){alertString+="ช่องเบอร์ผู้ติดต่อห้ามเว้นว่าง \n"}
    if(groupNumber===""||!Number.isInteger(Number(groupNumber))||Number(groupNumber)<1){alertString+="จำนวนผู้ร่วมเดินทางห้ามเว้นว่างและต้องเป็นตัวเลขจำนวนเต็มบวก \n"}
    if(Number(groupNumber)>15){alertString+="จำนวนผู้ร่วมเดินทางต้องมีจำนวน 1-15คน \n"}
  
    if(alertString!==""){alert(alertString);
    }
    else{
        if (checkBox.checked == true){
            if(confirm("ต้องการซื้อบัตรโดยสารเครื่องบินเองใช่หรือไม่")){
                 alertString2+="คุณเลือกซื้อบัตรโดยสารเครื่องบินเอง \n"
            }
        }
        alert(alertString2+"คุณจองสำเร็จ");
        return true;
    }
}