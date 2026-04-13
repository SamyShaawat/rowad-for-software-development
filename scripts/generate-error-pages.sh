#!/bin/bash
# Generate static error pages (404, 500, etc.) for cPanel deployment
# This script should run AFTER `pnpm build`

set -e

BUILD_DIR="build"

if [ ! -d "$BUILD_DIR" ]; then
  echo "❌ Build directory not found. Run 'pnpm build' first!"
  exit 1
fi

echo "📝 Generating static error pages..."

# ── 404.html ──
cat > "$BUILD_DIR/404.html" << 'HTML'
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>404 - Page Not Found | Rowad</title>
  <meta name="description" content="The page you're looking for could not be found.">
  <style>
    *{margin:0;padding:0;box-sizing:border-box}body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;min-height:100vh;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#f8fafc 0%,#e0e7ff 50%,#dbeafe 100%);padding:1rem}.container{max-width:800px;text-align:center}.error-code{font-size:8rem;font-weight:900;background:linear-gradient(135deg,#f97316,#ef4444,#ec4899);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:1rem;animation:pulse 2s ease-in-out infinite}@keyframes pulse{0%,to{opacity:1}50%{opacity:.7}}h2{font-size:1.875rem;color:#1e293b;margin-bottom:.5rem}p{font-size:1.125rem;color:#64748b;margin-bottom:2rem;max-width:600px;margin-left:auto;margin-right:auto}.buttons{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;margin-bottom:3rem}.btn-primary,.btn-secondary{display:inline-flex;align-items:center;gap:.5rem;padding:.75rem 1.5rem;border-radius:.5rem;font-weight:600;text-decoration:none;transition:all .2s}.btn-primary{background:#f97316;color:#fff;border:2px solid #f97316}.btn-primary:hover{background:#ea580c;border-color:#ea580c}.btn-secondary{background:#fff;color:#1e293b;border:2px solid #e2e8f0}.btn-secondary:hover{border-color:#f97316;color:#f97316}.quick-links{display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:1rem;max-width:500px;margin:0 auto}.quick-link{padding:1rem;background:#fff;border-radius:.5rem;box-shadow:0 1px 2px rgba(0,0,0,.05);border:1px solid #e2e8f0;text-decoration:none;transition:all .2s}.quick-link:hover{border-color:#f97316;box-shadow:0 4px 6px rgba(249,115,22,.1)}.quick-link span{font-size:1.5rem;display:block;margin-bottom:.25rem}.quick-link small{color:#64748b;font-weight:500}@media(prefers-color-scheme:dark){body{background:linear-gradient(135deg,#0f172a 0%,#1e293b 50%,#0f172a 100%)}h2{color:#f8fafc}p{color:#94a3b8}.btn-secondary{background:#1e293b;color:#f8fafc;border-color:#334155}.quick-link{background:#1e293b;border-color:#334155}.quick-link small{color:#94a3b8}}
  </style>
</head>
<body>
  <div class="container">
    <div class="error-code">404</div>
    <h2>Oops! Page Not Found</h2>
    <p>The page you're looking for seems to have been moved, renamed, or never existed. Don't worry, we'll help you find your way back!</p>
    <div class="buttons">
      <a href="/" class="btn-primary">🏠 Go to Homepage</a>
      <a href="/contact" class="btn-secondary">📧 Contact Support</a>
    </div>
    <div class="quick-links">
      <a href="/" class="quick-link"><span>🏠</span><small>Home</small></a>
      <a href="/services" class="quick-link"><span>⚡</span><small>Services</small></a>
      <a href="/about" class="quick-link"><span>👥</span><small>About Us</small></a>
      <a href="/contact" class="quick-link"><span>📧</span><small>Contact</small></a>
    </div>
  </div>
</body>
</html>
HTML

# ── 500.html ──
cat > "$BUILD_DIR/500.html" << 'HTML'
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>500 - Server Error | Rowad</title>
  <meta name="description" content="An unexpected error occurred. Please try again later.">
  <style>
    *{margin:0;padding:0;box-sizing:border-box}body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;min-height:100vh;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#fef2f2 0%,#fee2e2 50%,#fecaca 100%);padding:1rem}.container{max-width:800px;text-align:center}.error-code{font-size:8rem;font-weight:900;background:linear-gradient(135deg,#ef4444,#dc2626,#b91c1c);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:1rem}h2{font-size:1.875rem;color:#1e293b;margin-bottom:.5rem}p{font-size:1.125rem;color:#64748b;margin-bottom:2rem;max-width:600px;margin-left:auto;margin-right:auto}.buttons{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;margin-bottom:2rem}.btn-primary,.btn-secondary{display:inline-flex;align-items:center;gap:.5rem;padding:.75rem 1.5rem;border-radius:.5rem;font-weight:600;text-decoration:none;transition:all .2s}.btn-primary{background:#ef4444;color:#fff;border:2px solid #ef4444}.btn-primary:hover{background:#dc2626;border-color:#dc2626}.btn-secondary{background:#fff;color:#1e293b;border:2px solid #e2e8f0}.btn-secondary:hover{border-color:#ef4444;color:#ef4444}@media(prefers-color-scheme:dark){body{background:linear-gradient(135deg,#1c1917 0%,#292524 50%,#1c1917 100%)}h2{color:#f8fafc}p{color:#94a3b8}.btn-secondary{background:#1e293b;color:#f8fafc;border-color:#334155}}
  </style>
</head>
<body>
  <div class="container">
    <div class="error-code">500</div>
    <h2>Server Error</h2>
    <p>Something went wrong on our end. Please try again later or contact support if the problem persists.</p>
    <div class="buttons">
      <a href="/" class="btn-primary">🏠 Go to Homepage</a>
      <a href="javascript:location.reload()" class="btn-secondary">🔄 Retry</a>
    </div>
  </div>
</body>
</html>
HTML

# ── 403.html ──
cat > "$BUILD_DIR/403.html" << 'HTML'
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>403 - Access Denied | Rowad</title>
  <meta name="description" content="You don't have permission to access this resource.">
  <style>
    *{margin:0;padding:0;box-sizing:border-box}body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;min-height:100vh;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#fef3c7 0%,#fde68a 50%,#fcd34d 100%);padding:1rem}.container{max-width:800px;text-align:center}.error-code{font-size:8rem;font-weight:900;background:linear-gradient(135deg,#f59e0b,#d97706,#b45309);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:1rem}h2{font-size:1.875rem;color:#1e293b;margin-bottom:.5rem}p{font-size:1.125rem;color:#64748b;margin-bottom:2rem;max-width:600px;margin-left:auto;margin-right:auto}.btn-primary{display:inline-flex;align-items:center;gap:.5rem;padding:.75rem 1.5rem;border-radius:.5rem;font-weight:600;text-decoration:none;background:#f59e0b;color:#fff;border:2px solid #f59e0b;transition:all .2s}.btn-primary:hover{background:#d97706;border-color:#d97706}@media(prefers-color-scheme:dark){body{background:linear-gradient(135deg,#1c1917 0%,#292524 50%,#1c1917 100%)}h2{color:#f8fafc}p{color:#94a3b8}}
  </style>
</head>
<body>
  <div class="container">
    <div class="error-code">403</div>
    <h2>Access Denied</h2>
    <p>You don't have permission to access this resource. Please check your credentials or contact the administrator.</p>
    <a href="/" class="btn-primary">🏠 Go to Homepage</a>
  </div>
</body>
</html>
HTML

echo "✅ Error pages generated successfully!"
echo "   - $BUILD_DIR/404.html"
echo "   - $BUILD_DIR/500.html"
echo "   - $BUILD_DIR/403.html"
