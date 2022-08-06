/** selecting elements */
var siteNameInput = document.getElementById("siteName");
var siteUrlInput = document.getElementById("siteUrl");
var tableData = document.getElementById("data");
var btndelete = document.getElementById("btndelete");

//varables
var siteInfo;
var sites = [];

//functions
//submit

window.addEventListener("load", function () {
  if (localStorage.getItem("bookmarks") != null) {
    sites = JSON.parse(localStorage.getItem("bookmarks"));
  } else {
    sites = [];
  }
  display();
});
function submit() {
  if (valitionSiteURL() && valitionSiteName()) {
    siteInfo = {
      siteName: siteNameInput.value,
      siteUrl: siteUrlInput.value,
    };
    console.log(siteInfo);
    sites.push(siteInfo);
    localStorage.setItem("bookmarks", JSON.stringify(sites));
    display();
  } else {
  }
}
// 4.display
function display() {
  var container = "";
  for (var i = 0; i < sites.length; i++) {
    container += `<tr class=bgRow> <td class=w-50 ps-2> ${sites[i].siteName}</td>
         <td> <button id=btnVist class=" btn btn-primary"> <a target=_blank  href="https://${sites[i].siteUrl}"> Visit </a></button></td>
         <td> <button   Onclick="deleteSite(${i})" class=" btn btn-danger">Delete</button></td>
         </tr>`;
  }

  tableData.innerHTML = container;
}
//3clear
function clearForm() {
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
}

//4.validation
function valitionSiteURL() {
  var regex = /^www\.[a-z0-9]{1,}\.[a-z]{2,}/;
  if (regex.test(siteUrl.value)) {
    siteUrl.classList.replace("is-invalid", "is-valid");
    return true;
  } else {
    siteUrl.classList.add("is-invalid");
    return false;
  }
}
function valitionSiteName() {
  var regex = /[a-z]{3,}/;
  if (regex.test(siteName.value)) {
    siteName.classList.replace("is-invalid", "is-valid");
    return true;
  } else {
    siteName.classList.add("is-invalid");
    return false;
  }
}

//5

function deleteSite(i) {
  sites.splice(i, 1);
  localStorage.setItem("bookmarks", JSON.stringify(sites));
  display();
}
