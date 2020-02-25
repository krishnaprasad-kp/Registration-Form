employees=[]
emp={
	"FirstName": "Abc",
	"LastName": "Xyz",
	"Email": "abc@gmail.com",
	"Password": "asdfgh",
	"Dob": "20-01-1999",
	"gender": "male",
	"hobbies": ["Playing Cricket", "Painting"],
	"country": "India",
	"state": "Andhra Pradesh",
	"address": "fintech Valley 530048"
}
function tabulate(Employees)
{
    s='<tr>'
    for(let field in Employees[0]){
        s+='<th>'+field+'</th>'
    }
    s+='</tr>'
    for(let i=0;i<Employees.length;i++){
            s+='<tr>' 
       for(let field in Employees[i])
       s+='<td>'+Employees[i][field]+'</td>'
       s+='</tr>' 
       document.getElementById('employeelist').innerHTML=s
}
}
function DisplayEmployeeDetails(){
var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     
        employees = JSON.parse(this.responseText);
        tabulate(employees)
    }
  };
  xhttp.open("GET", "employee.json", true);
  xhttp.send();
}
function AddEmployee(){
        new_employee=Object.create(emp)
        for(let field in emp){
            console.log(field)
           new_employee[field]=document.getElementsByName(field)[0].value; 
       }
       employees.push(new_employee)
        s=document.getElementById('employeelist').innerHTML
        s+='<tr>'
        for(let field in new_employee)
        s+='<td>'+new_employee[field]+'</td>'
        s+='</tr>'
        document.getElementById('employeelist').innerHTML=s
}
function selectstate() {

    var country = document.getElementById("country").value;
    country_state = { "selectcountry": ["selectstate"], "India": ["Andhra Pradesh", "Telangana", "Tamil Nadu", "Karnataka"], "Australia": ["New South Wales (NSW)", "Queensland (Qld)", "South Australia (SA)", "Tasmania (Tas)", "Victoria (Vic)", "Western Australia (WA)"] }
    state = "";
    states = country_state[country]
    for (i = 0; i < states.length; i++) {
        state += "<option>" + states[i] + "</option>";
    }
    document.getElementById("state").innerHTML = state;

}