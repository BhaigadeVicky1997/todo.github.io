// delete
function deleteRem(index) {
    //alert(index)
    let data = JSON.parse(localStorage.getItem('reminders'))
    data.splice(index, 1)
    console.log(data)
    localStorage.setItem("reminders", JSON.stringify(data))
    window.location.reload();
}