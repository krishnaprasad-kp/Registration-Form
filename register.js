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