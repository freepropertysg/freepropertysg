document.addEventListener("DOMContentLoaded", () => {

  const footerHTML = `
<div style="text-align:center; font-size:0.9rem;">
  <p style="margin:0.2rem 0;">
    © <span id="copyYear"></span> FreePropertySG — Singapore’s Free Property Portal 
  </p>

  <p style="margin:0.2rem 0;">
    <em id="lastUpdated"></em>
  </p>
</div>
  `;

  // Insert footer into page
  document.getElementById("site-footer").innerHTML = footerHTML;

  /* AUTO YEAR + LAST UPDATED SCRIPT */
  (function () {
    const now = new Date();
    const year = now.getFullYear();

    // update copyright year
    const copyEl = document.getElementById("copyYear");
    if (copyEl) copyEl.textContent = year;

    // Full date format: Day Month Year
    const day = now.getDate();
    const months = [
      "January","February","March","April","May","June","July",
      "August","September","October","November","December"
    ];
    const formattedDate = `${day} ${months[now.getMonth()]} ${year}`;

    const updatedEl = document.getElementById("lastUpdated");
    if (updatedEl) updatedEl.textContent = `Last updated: ${formattedDate}`;
  })();

});