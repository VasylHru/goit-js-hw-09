import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */document.addEventListener("DOMContentLoaded",function(){const m=document.querySelector(".feedback-form"),e={email:"",message:""},a=JSON.parse(localStorage.getItem("feedback-form-state"));a&&(e.email=a.email,e.message=a.message,o()),m.addEventListener("input",function(t){t.target.matches('input[type="email"]')?e.email=t.target.value:t.target.matches("textarea")&&(e.message=t.target.value),r()}),m.addEventListener("submit",function(t){if(t.preventDefault(),e.email.trim()===""||e.message.trim()===""){alert("Fill please all fields");return}console.log(e),localStorage.removeItem("feedback-form-state"),e.email="",e.message="",o()});function r(){localStorage.setItem("feedback-form-state",JSON.stringify(e))}function o(){document.querySelector('input[type="email"]').value=e.email,document.querySelector("textarea").value=e.message}});
//# sourceMappingURL=commonHelpers2.js.map
