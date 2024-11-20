const div_footer = document.getElementById("footer-content")
const footer_template = document.createElement("template")
function getQueryParam(name) {
  var search = window.location.search
  //   console.log(search);
  var params = new URLSearchParams(search)
  return params.get(name)
}
var contentType = getQueryParam("content")
// console.log(contentType);

if (contentType == "offices") {
  footer_template.innerHTML = `
    <h1>Our Business Address</h1>
    <p>160 Robinson Road, #14-04 Singapore Business Federation Center, Singapore (068914)</p>
    `
} else if (contentType == "global") {
  footer_template.innerHTML = `
    <h1>Countries of Operation</h1>
    <p>Currently operating out of Singapore</p>
    `
} else if (contentType == "terms") {
  footer_template.innerHTML = `
    <h1>Terms & Conditions</h1>
    <p>Terms</p>
    `
} else if (contentType == "policy") {
  footer_template.innerHTML = `
    <h1>Privay & Refund Policy</h1>
    <p>Policy</p>
    `
} else {
  footer_template.innerHTML = `
    <h1>404 Error</h1>
    `
}
// console.log(contentType);
div_footer.appendChild(footer_template.content)
