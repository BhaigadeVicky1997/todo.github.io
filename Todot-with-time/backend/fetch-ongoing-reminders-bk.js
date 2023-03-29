$('.btnClearAll').click(function(){
    localStorage.removeItem("reminders");
    window.location.reload();
})

function simpleNotFound(message){
    return `<div class="col-lg-12 col-md-12 col-sm-12" id="jumboMessage">
    <div class="jumbotron text-center" style="max-width: 400px;margin: 0 auto;">${message}</div>
</div>`
}

function simpleNotFoundButton(message,btnText,url){
    return `<div class="col-lg-12 col-md-12 col-sm-12" id="jumboMessage">
    <div class="jumbotron text-center" style="max-width: 400px;margin: 0 auto;">${message}</div>
    <div class="text-center mt-4"><a href="${url}" class="btn btn-danger">${btnText}</a></div>
</div>`
}

// expired reminders
const expiredynamicReminders = (remName,indexPos,expireIn) => {
    document.getElementById('remidersList').innerHTML += `<div class="col-lg-3 col-md-4 col-sm-6 mb-4">
    <div class="reminderBox">
        <strong>${remName}</strong>
        <span class="expireSoon enable"></span>
        <label class="expiredIn">Expired in ${expireIn} days</label>
        <span class="actions">
            <button type="button" class="btn btn-link p-0" onclick="editRem(${indexPos})"><i class="fa fa-pencil"></i></button>
            <button type="button" class="btn btn-link p-0" onclick="deleteRem(${indexPos})"><i class="fa fa-trash"></i></button>
        </span>
        <button type="button" class="btn btn-info btn-view mt-3" onclick="viewRem(${indexPos})">View</button>
    </div>
</div>`
}

// normal reminders

const dynamicReminders = (remName,indexPos,remainingDays) => {
    document.getElementById('remidersList').innerHTML += `<div class="col-lg-3 col-md-4 col-sm-6 mb-4">
    <div class="reminderBox">
        <strong>${remName}</strong>
        <label class="expiredIn">Expired in ${remainingDays} days</label>
        <span class="actions">
            <button type="button" class="btn btn-link p-0" onclick="editRem(${indexPos})"><i class="fa fa-pencil"></i></button>
            <button type="button" class="btn btn-link p-0" onclick="deleteRem(${indexPos})"><i class="fa fa-trash"></i></button>
        </span>
        <button type="button" class="btn btn-info btn-view mt-3" onclick="viewRem(${indexPos})">View</button>
    </div>
</div>`
}


// Fetch
if (localStorage.length != 0) {
    let data = JSON.parse(localStorage.getItem('reminders'))
    console.log(`records found ${data.length}`)
    if (data.length != 0){
        for (i in data){
            current_reminder = data[i]
            console.log(current_reminder)
            

            // remaining days calculate
            ending_date = new Date(current_reminder.endDate)
            today_date = new Date()
            timediffernce = ending_date.getTime() - today_date.getTime();
            let remainingDays = Math.ceil(timediffernce / (1000 * 3600 * 24));
            console.log(`Remaining days in expire :- ${remainingDays}`)

            if (remainingDays < 0){
                $('#expiredBtn').hide();
                $('#remidersList').html(
                    simpleNotFoundButton("Reminders expired now","View Expired","expired.html")
                );
            }
            else{
                
                if (remainingDays <= 5){
                    $("#jumboMessage").remove();
                    $('#expiredBtn').show();
                    expiredynamicReminders(current_reminder.name,i,remainingDays);           
                }
                else{
                    $("#jumboMessage").remove();
                    $('#expiredBtn').show();
                    dynamicReminders(current_reminder.name,i,remainingDays);
                }
            }

            console.log('---------------------------------------------------------------')
        }
    }
    else{
        $('#expiredBtn').hide();
        $('#remidersList').html(
            simpleNotFoundButton("All Reminders Deleted","View Expired","expired.html")
        );
    }
}
else {
    $("#expiredBtn").hide();
    $('#remidersList').html(
        simpleNotFound("Reminders Not Create Yet")
    );
}