export function loadLayout() {

  const header = `
    <header class="st-header" data-open="false">
    <div class="st-header-inner">

      <!-- LEFT: Brand -->
      <div class="st-header-left">
        <a href="https://sarkari-tool.dozni.com/" class="st-brand">
          <div class="st-brand-logo">
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjgysjfitvPDhRycDZUoutSFdVTC_WuvOHKVIFakfcB5X_W5sjw5hNO60grrxcgZY4rhJp6fsAH3hPGHqaRQ01WlBmJb1SKv4k-KonAIfpIQ9kj_ZI-tY1dlqZD0e91MOnPpa6e8Cr9VnyaWdhsLCN7VUUVrkI3Sm6DwaEq7UqdJadQVwnwkB_uU_Jf7kc/s512/dozni.com.webp" alt="sarkari-tool-by-dozni.com-logo">
          </div>
          <div>
            <div class="st-brand-main">Sarkari Tools</div>
            <div class="st-brand-sub">By Dozni</div>
          </div>
        </a>
      </div>

      <!-- CENTER: Tools / Blog / Contact -->
      <div class="st-header-center">
        <nav class="st-nav">
          <div class="st-nav-item">
            <button type="button" class="st-nav-link st-dropdown-toggle">
              Tools
            </button>
            <div class="st-dropdown-menu">
              <a href="https://name-date-on-photo.dozni.com/" class="st-dropdown-link">
                <span>Name and Date on Photo</span>
                <small>Add text &amp; date on images</small>
              </a>
              <a href="https://photo-sign-merge.dozni.com/" class="st-dropdown-link">
                <span>Photo Sign Merge</span>
                <small>Join photo &amp; signature</small>
              </a>
              <a href="https://image-to-pdf.dozni.com/" class="st-dropdown-link">
                <span>Image to PDF</span>
                <small>Convert JPG / PNG to PDF</small>
              </a>
              <a href="https://image-resizer.dozni.com/" class="st-dropdown-link">
                <span>Image Resizer</span>
                <small>Resize for exam upload</small>
              </a>
              <a href="https://age-calculator.dozni.com/" class="st-dropdown-link">
                <span>Age Calculator</span>
                <small>Check age from DOB</small>
              </a>
            </div>
          </div>

          <div class="st-nav-item">
            <a href="https://blog.dozni.com/" class="st-nav-link">Blog</a>
          </div>

          <div class="st-nav-item">
            <a href="https://www.dozni.com/contact-us" class="st-nav-link">
              Contact
            </a>
          </div>
        </nav>
      </div>

      <!-- RIGHT: Theme + Mobile button -->
      <div class="st-header-right">
        <button type="button" class="st-theme-toggle" onclick="toggleSTTheme()">
          <span aria-hidden="true"></span>
          <span id="st-theme-label">Theme</span>
        </button>

        <button type="button" class="st-nav-toggle" onclick="toggleSTNav()">
          ☰
        </button>
      </div>

    </div>
  </header>
  `;

  const mobileNav = `
    YOUR MOBILE NAV HTML
  `;

  const footer = `
    YOUR FOOTER HTML
  `;

  document.getElementById("st-header").innerHTML =
    header;

  document.getElementById("st-mobile-nav").innerHTML =
    mobileNav;

  document.getElementById("st-footer").innerHTML =
    footer;
}
