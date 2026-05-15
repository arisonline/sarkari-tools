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
    <div class="st-nav-mobile">
    <div class="st-nav-mobile-inner">
      <div class="st-nav-mobile-group-title">Sarkari Tools</div>
      <a href="https://name-date-on-photo.dozni.com/" class="st-nav-link">
        Name and Date on Photo
      </a>
      <a href="https://photo-sign-merge.dozni.com/" class="st-nav-link">
        Photo Sign Merge
      </a>
      <a href="https://image-to-pdf.dozni.com/" class="st-nav-link">
        Image to PDF
      </a>
      <a href="https://image-resizer.dozni.com/" class="st-nav-link">
        Image Resizer
      </a>
      <a href="https://age-calculator.dozni.com/" class="st-nav-link">
        Age Calculator
      </a>

      <div class="st-nav-mobile-group-title">More</div>
      <a href="https://blog.dozni.com/" class="st-nav-link">Blog</a>
      <a href="https://www.dozni.com/contact-us" class="st-nav-link">Contact</a>

      <button type="button" class="st-theme-toggle" onclick="toggleSTTheme()">
        🌗 <span id="st-theme-label-mobile">Theme</span>
      </button>
    </div>
  </div>
  `;

  const footer = `
    <div class="st-footer-wrapper">
    <footer class="st-footer">
      <div class="st-footer-grid">
        <div>
          <div class="st-footer-title">Dozni</div>
          <div class="st-footer-links">
            <a href="https://www.dozni.com/about-us">About Us</a>
            <a href="https://www.dozni.com/contact-us">Contact Us</a>
            <a href="https://www.dozni.com/privacy-policy">Privacy policy</a>
            <a href="https://www.dozni.com/cookie-policy">Cookies Policy</a>
            <a href="https://www.dozni.com/terms-and-conditions">Term and Conditions</a>
            <a href="https://www.dozni.com/our-services">Our Tools and Services</a>
          </div>
        </div>

        <div>
          <div class="st-footer-title">Products</div>
          <div class="st-footer-links">
            <a href="https://blog.dozni.com/">Blog</a>
            <a href="https://event.dozni.com/">Event</a>
            <a href="https://game.dozni.com/">Gaming</a>
            <a href="https://bengali.dozni.com/">Bengali Blog</a>
            <a href="https://digital-tool.dozni.com/">Digital Tools</a>
            <a href="https://sarkari-tool.dozni.com/">Sarkari tools</a>
          </div>
        </div>

        <div>
          <div class="st-footer-title">Sarkari Tools</div>
          <div class="st-footer-links">
            <a href="https://name-date-on-photo.dozni.com/">Name and Date on Photo</a>
            <a href="https://photo-sign-merge.dozni.com/">Photo Sign Merge</a>
            <a href="https://image-to-pdf.dozni.com/">Image to PDF</a>
            <a href="https://image-resizer.dozni.com/">Image Resizer</a>
            <a href="https://age-calculator.dozni.com/">Age Calculator</a>
          </div>
        </div>

        <div>
          <div class="st-footer-title">Digital Tools</div>
          <div class="st-footer-links">
            <a href="https://browser-resolution.dozni.com/">Browser Resolution Tester</a>
            <a href="https://screen-resolution.dozni.com/">Screen Resolution Detector</a>
            <a href="https://percentage-calculator.dozni.com/">Percentage Calculator</a>
            <a href="https://random-color.dozni.com/">Random Color Generator</a>
            <a href="https://json-viewer.dozni.com/">JSON Viewer</a>
          </div>
        </div>

        <div>
          <div class="st-footer-title">Get in touch</div>
          <div class="st-footer-links">
            <a href="mailto:contact@dozni.com">
              <span class="st-footer-icon">
                <i class="ri-mail-line"></i>
              </span>Contact@dozni.com
            </a>
            <a href="https://www.facebook.com/idozni">
              <span class="st-footer-icon">
                <i class="ri-facebook-fill"></i>
              </span>Facebook
            </a>
            <a href="https://x.com/idozni">
              <span class="st-footer-icon">
                <i class="ri-twitter-x-fill"></i>
              </span>X (Formerly Twitter)
            </a>
            <a href="https://www.linkedin.com/in/arisonline/">
              <span class="st-footer-icon">
                <i class="ri-linkedin-box-fill"></i>
              </span>LinkedIn
            </a>
            <a href="https://www.instagram.com/idozni/">
              <span class="st-footer-icon">
                <i class="ri-instagram-line"></i>
              </span>Instagram
            </a>
          </div>
        </div>
      </div>

      <div class="st-footer-bottom">
        <hr>
        © <span id="st-year"></span> Dozni &amp; Sarkari Tools. All rights reserved.
      </div>
    </footer>
  </div>
  `;

  document.getElementById("st-header").innerHTML =
    header;

  document.getElementById("st-mobile-nav").innerHTML =
    mobileNav;

  document.getElementById("st-footer").innerHTML =
    footer;
}
