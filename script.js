function toggleDetails(id) {
    var detail = document.getElementById("detail-" + id);
    if (detail.style.display === "none" || detail.style.display === "") {
        detail.style.display = "table";
    } else {
        detail.style.display = "none";
    }
}