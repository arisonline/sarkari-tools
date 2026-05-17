export function loadLayout() {

  const header = `
    <header class="st-header" data-open="false">
    <div class="st-header-inner">

      <!-- LEFT: Brand -->
      <div class="st-header-left">
        <a href="/" class="st-brand">
          <div class="st-brand-logo">
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjgysjfitvPDhRycDZUoutSFdVTC_WuvOHKVIFakfcB5X_W5sjw5hNO60grrxcgZY4rhJp6fsAH3hPGHqaRQ01WlBmJb1SKv4k-KonAIfpIQ9kj_ZI-tY1dlqZD0e91MOnPpa6e8Cr9VnyaWdhsLCN7VUUVrkI3Sm6DwaEq7UqdJadQVwnwkB_uU_Jf7kc/s96/dozni.com.webp" alt="sarkari-tool-by-dozni.com-logo">
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
              <a href="/tools/name-date-on-photo/" class="st-dropdown-link">
                <span>Name and Date on Photo</span>
                <small>Add text &amp; date on images</small>
              </a>
              <a href="/tools/photo-sign-merger/" class="st-dropdown-link">
                <span>Photo Sign Merge</span>
                <small>Join photo &amp; signature</small>
              </a>
              <a href="/tools/image-to-pdf/" class="st-dropdown-link">
                <span>Image to PDF</span>
                <small>Convert JPG / PNG to PDF</small>
              </a>
              <a href="/tools/image-resizer/" class="st-dropdown-link">
                <span>Image Resizer</span>
                <small>Resize for exam upload</small>
              </a>
              <a href="/tools/age-calculator/" class="st-dropdown-link">
                <span>Age Calculator</span>
                <small>Check age from DOB</small>
              </a>
            </div>
          </div>

          <div class="st-nav-item">
            <a href="https://blog.dozni.com/" class="st-nav-link">Blog</a>
          </div>

          <div class="st-nav-item">
            <a href="/contact-us" class="st-nav-link">
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
      <a href="/tools/name-date-on-photo/" class="st-nav-link">
        Name and Date on Photo
      </a>
      <a href="/tools/photo-sign-merger/" class="st-nav-link">
        Photo Sign Merge
      </a>
      <a href="/tools/image-to-pdf/" class="st-nav-link">
        Image to PDF
      </a>
      <a href="/tools/image-resizer/" class="st-nav-link">
        Image Resizer
      </a>
      <a href="/tools/age-calculator/" class="st-nav-link">
        Age Calculator
      </a>

      <div class="st-nav-mobile-group-title">More</div>
      <a href="https://blog.dozni.com/" class="st-nav-link">Blog</a>
      <a href="/contact-us" class="st-nav-link">Contact</a>

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
            <a href="/about-us">About Us</a>
            <a href="/contact-us">Contact Us</a>
            <a href="/privacy-policy">Privacy policy</a>
            <a href="/cookie-policy">Cookies Policy</a>
            <a href="/terms-and-conditions">Term and Conditions</a>
            <a href="/dmca">DMCA</a>
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
            <a href="/">Sarkari tools</a>
          </div>
        </div>

        <div>
          <div class="st-footer-title">Sarkari Tools</div>
          <div class="st-footer-links">
            <a href="/tools/name-date-on-photo/">Name and Date on Photo</a>
            <a href="/tools/photo-sign-merger/">Photo Sign Merge</a>
            <a href="/tools/image-to-pdf/">Image to PDF</a>
            <a href="/tools/image-resizer/">Image Resizer</a>
            <a href="/tools/age-calculator/">Age Calculator</a>
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







  const currentPath =
    window.location.pathname;
  
  const currentSlug =
    currentPath
      .split("/")
      .filter(Boolean)
      .pop();
  
  const toolsData = [
  
    {
      slug: "name-date-on-photo",
      url: "/tools/name-date-on-photo/",
      title: "Name and date on photo",
      icon: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjQ5S2tBz_q3H-6slg5ggkvlccfXMGPlAxodHL7EQSN9vWVSQq0rzmyVsD8ifkzv9qC1Djlv2YHK1HGzABIYqFBUA8ZW_4AkSwA0EduzIJGoUqI3hWLb8bKIdVSRSOXnStsHbDOZ-pbYgNhs6femaTqXAWVSKB9g_-aL4sm0917nDwJpp1n4MKDMhNJ/s128/photo-name-and-date.png"
    },
  
    {
      slug: "photo-sign-merger",
      url: "/tools/photo-sign-merger/",
      title: "Photo and Signature Merger",
      icon: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgQGLdqMPy6mHH2_n-MPUTM8iYyEScE-azPmgKtDOpvU3amNgVIMmMhpNeCh4AmIGABd_dQCjNyzSQOBJfd9fHHOYPHmS9sf4DjmIZG4vIYqJ_sGpt7vfDijCYOLG0AQlKp-Q6sk6zfGf6kfeNMXAd1JLTurtjPPt9QiGiVhSIQfTo9mIxKqbFKr97C/w128-h200/photo_signature.jpg"
    },
  
    {
      slug: "age-calculator",
      url: "/tools/age-calculator/",
      title: "Age Calculator",
      icon: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhzXpDz1vBqZlz6q9aLUesvh4oCPaQdxwHHabjE3OvfWXb6ezXPGi58Z54cT-4Si4pOwGBA5afFkfo3d4DHjHnfsbCoitVRo5CDCKHn-B7HG6RirgxAiBbr4G0UJFCtODJoLKjBtGmtfnRGRiyiuqmQ5xr7EWykwK_Tg5bBmiLr96LJengfJjM3Oshz/s128/age-calculator.png"
    },
  
    {
      slug: "image-to-pdf",
      url: "/tools/image-to-pdf/",
      title: "Image To PDF File Converter",
      icon: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgI8YwwEAeHM0xrWIxsWOOM3BELsCaEYF9S5dDYLg0P28i1fUXUeO01S0z-nOHH4gazqYbNDzLkUuLloRGABN6wwKTy7cP_iboB1LjUPVoWaA3awPjTDeyC5sbJryaq3pRrDHvgmXJYAPxu07ndNSRi3jah4Ky85C8QT9xiWfiYKQJdO88l6840IvBh/s128/image-to-pdf.png"
    },
  
    {
      slug: "image-resizer",
      url: "/tools/image-resizer/",
      title: "Image Resizer",
      icon: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgI8YwwEAeHM0xrWIxsWOOM3BELsCaEYF9S5dDYLg0P28i1fUXUeO01S0z-nOHH4gazqYbNDzLkUuLloRGABN6wwKTy7cP_iboB1LjUPVoWaA3awPjTDeyC5sbJryaq3pRrDHvgmXJYAPxu07ndNSRi3jah4Ky85C8QT9xiWfiYKQJdO88l6840IvBh/s128/image-to-pdf.png"
    }
  
  ];
  
  const otherTools =
    toolsData.filter(
      tool => tool.slug !== currentSlug
  );
  
  const otherToolsHTML = `
  <section class="stc-section">
  
    <h2 class="stc-title">
      Other Sarkari Tools
    </h2>
  
    <p class="stc-subtitle">
      Use more free tools that help you complete government and competitive exam forms quickly.
    </p>
  
    <div class="stc-card">
  
      <div class="stc-tools-grid">
  
        ${otherTools.map(tool => `
  
          <a
            class="stc-tool-item"
            href="${tool.url}"
          >
  
            <span class="stc-chip-icon">
  
              <img
                src="${tool.icon}"
                alt="${tool.title}"
              >
  
            </span>
  
            <span>
              ${tool.title}
            </span>
  
          </a>
  
        `).join("")}
  
      </div>
  
    </div>
  
  </section>
  `;

  



  const sharedSections = `
    <!-- 6. Why like Dozni -->
    <section class="stc-section">
      <h2 class="stc-title">Why like sarkari.dozni.com?</h2>
  
      <div class="stc-card" style="text-align:center;">
        <p style="font-size:18px;color:#3f3f3f;margin:0 0 10px;">
          People like Dozni's sarkari tools for some simple reasons:
        </p>
        <div class="stc-why-pills">
          <span class="stc-why-pill"><span>💸</span><span>Free</span></span>
          <span class="stc-why-pill"><span>⚡</span><span>Fast</span></span>
          <span class="stc-why-pill"><span>♾️</span><span>Unlimited</span></span>
          <span class="stc-why-pill"><span>🙂</span><span>User Friendly</span></span>
          <span class="stc-why-pill"><span>🔒</span><span>Secure</span></span>
        </div>
      </div>
    </section>
  
    <!-- 7. Features -->
    <section class="stc-section">
      <h2 class="stc-title">Our Features</h2>
  
      <div class="stc-card">
        <div class="stc-features-grid">
          <div class="stc-feature-card">
            <div class="stc-feature-icon">
              <!-- clock icon -->
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="8"></circle>
                <path d="M12 8v4l2 2"></path>
              </svg>
            </div>
            <div>
              <div class="stc-feature-title">Fast</div>
              <p>Our tools processing is powerful. It takes less time to perform any task on any tool.</p>
            </div>
          </div>
  
          <div class="stc-feature-card">
            <div class="stc-feature-icon">
              <!-- infinity icon -->
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12c1.7-2 3.7-3 6-3s4.3 1 6 3-3.7 3-6 3-4.3-1-6-3z"></path>
              </svg>
            </div>
            <div>
              <div class="stc-feature-title">Unlimited</div>
              <p>All the my-services are free and provide you to use them unlimited times without any Restrictions.</p>
            </div>
          </div>
  
          <div class="stc-feature-card">
            <div class="stc-feature-icon">
              <!-- user icon -->
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="9" r="3.5"></circle>
                <path d="M6 18c1.8-2.1 3.8-3 6-3s4.2 0.9 6 3"></path>
              </svg>
            </div>
            <div>
              <div class="stc-feature-title">User Friendly</div>
              <p>All the tools are designed for all users, advanced knowledge is not required.</p>
            </div>
          </div>
  
          <div class="stc-feature-card">
            <div class="stc-feature-icon">
              <!-- shield icon -->
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 4 6 6v6c0 3.5 2.5 5.8 6 8 3.5-2.2 6-4.5 6-8V6z"></path>
              </svg>
            </div>
            <div>
              <div class="stc-feature-title">Security</div>
              <p>We do not upload any type of files anywhere on the Server. Your PDF, Image, etc. files are very secure.</p>
            </div>
          </div>
        </div>
      </div>
    </section>  

  
  
  
    <!-- INFO SECTION -->
    <section class="st-info-wrapper">
      <div class="st-info-card">
        <div class="st-info-title">sarkari.dozni.com</div>
        <p class="st-info-text">
          Sarkari Tool is an online product created to provide the latest and most useful
          utilities. Like: image resizer, typing test, JPG to PDF converter, photo and
          signature joiner, photo name and date joiner and more.
        </p>

        <p class="st-info-text">This website is a private tool platform and is not affiliated with any government organization.</p>
      </div>
    </section>
  `;

  document.getElementById("st-header").innerHTML =
    header;

  document.getElementById("st-mobile-nav").innerHTML =
    mobileNav;


  const toolsSection =
    document.getElementById("stc-other-tools");
  
  if (toolsSection) {
    toolsSection.innerHTML =
      otherToolsHTML;
  }

  const shared =
    document.getElementById("stc-shareds");
  
  if (shared) {
    shared.innerHTML = sharedSections;
  }

  document.getElementById("st-footer").innerHTML =
    footer;

}








// =========================
// THEME + MOBILE NAV
// =========================

(function () {

  var root =
    document.documentElement;

  // THEME INIT
  var saved =
    localStorage.getItem("st-theme");

  if (saved === "light" || saved === "dark") {

    root.setAttribute(
      "data-theme",
      saved
    );

  } else {

    root.setAttribute(
      "data-theme",
      "light"
    );

  }

  function updateThemeLabels() {

    var current =
      root.getAttribute("data-theme") || "light";

    var text =
      current === "light"
        ? "Light Mode"
        : "Dark Mode";

    var desktop =
      document.getElementById("st-theme-label");

    var mobile =
      document.getElementById("st-theme-label-mobile");

    if (desktop)
      desktop.textContent = text;

    if (mobile)
      mobile.textContent = text;

  }

  window.toggleSTTheme =
    function () {

      var current =
        root.getAttribute("data-theme") || "light";

      var next =
        current === "light"
          ? "dark"
          : "light";

      root.setAttribute(
        "data-theme",
        next
      );

      localStorage.setItem(
        "st-theme",
        next
      );

      updateThemeLabels();

    };

  // MOBILE MENU

  function setNavOpen(open) {

    var header =
      document.querySelector(".st-header");

    var btn =
      document.querySelector(".st-nav-toggle");

    if (!header || !btn)
      return;

    header.setAttribute(
      "data-open",
      open ? "true" : "false"
    );

    btn.textContent =
      open ? "✕" : "☰";

    document.body.classList.toggle(
      "st-no-scroll",
      open
    );

  }

  window.toggleSTNav =
    function () {

      var header =
        document.querySelector(".st-header");

      if (!header)
        return;

      var isOpen =
        header.getAttribute("data-open") === "true";

      setNavOpen(!isOpen);

    };

  function initMobileNavLinkClose() {

    var links =
      document.querySelectorAll(
        ".st-nav-mobile a, .st-nav-mobile button.st-theme-toggle"
      );

    links.forEach(function (el) {

      el.addEventListener(
        "click",
        function () {

          setNavOpen(false);

        }
      );

    });

  }

  document.addEventListener(
    "DOMContentLoaded",
    function () {

      updateThemeLabels();

      initMobileNavLinkClose();

      var yearSpan =
        document.getElementById("st-year");

      if (yearSpan) {

        yearSpan.textContent =
          new Date().getFullYear();

      }

    }
  );

})();


// =========================
// FAQ ACCORDION
// =========================

(function () {

  document.addEventListener(
    "click",
    function (e) {

      var btn =
        e.target.closest(".stc-faq-btn");

      if (!btn)
        return;

      var item =
        btn.closest(".stc-faq-item");

      var box =
        btn.closest("#stc-faq-box");

      if (!item || !box)
        return;

      var items =
        box.querySelectorAll(".stc-faq-item");

      var icon =
        item.querySelector(".stc-faq-icon");

      var answer =
        item.querySelector(".stc-faq-answer");

      var isActive =
        item.classList.contains("stc-active");

      // CLOSE ALL
      items.forEach(function (it) {

        it.classList.remove("stc-active");

        var ic =
          it.querySelector(".stc-faq-icon");

        var ans =
          it.querySelector(".stc-faq-answer");

        if (ic)
          ic.textContent = "+";

        if (ans)
          ans.style.maxHeight = "0";

      });

      // OPEN CURRENT
      if (!isActive) {

        item.classList.add("stc-active");

        if (icon)
          icon.textContent = "×";

        if (answer) {

          answer.style.maxHeight =
            answer.scrollHeight + "px";

        }

      }

    }
  );

})();
