export function loadHeader() {
  return `
  <header class="st-header">
    <div class="st-header-container">

      <div class="st-header-left">
        <a href="/" class="st-brand">

          <div class="st-brand-logo">
            <img
              src="/assets/images/logo.webp"
              alt="Sarkari Tools"
              width="34"
              height="34"
              loading="eager"
            >
          </div>

          <div>
            <div class="st-brand-main">Sarkari Tools</div>
            <div class="st-brand-sub">By Dozni</div>
          </div>

        </a>
      </div>

      <div class="st-header-center">
        <nav class="st-nav">

          <div class="st-nav-item">
            <a href="/tools/name-date-on-photo/" class="st-nav-link">
              Name Date Tool
            </a>
          </div>

          <div class="st-nav-item">
            <a href="/tools/image-resizer/" class="st-nav-link">
              Image Resizer
            </a>
          </div>

          <div class="st-nav-item">
            <a href="/tools/image-to-pdf/" class="st-nav-link">
              Image to PDF
            </a>
          </div>

        </nav>
      </div>

      <div class="st-header-right">
        <button
          type="button"
          class="st-theme-toggle"
          onclick="toggleSTTheme()"
        >
          Theme
        </button>
      </div>

    </div>
  </header>
  `;
}