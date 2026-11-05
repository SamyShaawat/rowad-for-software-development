import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { dirOf, type Locale } from '@/i18n';

interface RootDocumentProps {
  locale: Locale;
  /** next/font class names for this language. */
  fontClass: string;
  /** Structured data for this language (omit to emit none). */
  jsonLd?: object;
  children: React.ReactNode;
}

/** The <html> shell shared by every language: sets lang/dir, theme, header and footer. */
export function RootDocument({ locale, fontClass, jsonLd, children }: RootDocumentProps) {
  return (
    <html lang={locale} dir={dirOf(locale)} className={fontClass} suppressHydrationWarning>
      <head>
        {jsonLd && (
          // Plain tag in the HTML, so crawlers and validators that do not run JavaScript still see it.
          <script
            id="json-ld-organization"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        )}
      </head>
      <body
        className="font-sans antialiased bg-slate-50 text-slate-900 dark:bg-dark-400 dark:text-slate-200 transition-colors duration-300"
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Header locale={locale} />
          <main className="min-h-screen">{children}</main>
          <Footer locale={locale} />
        </ThemeProvider>
      </body>
    </html>
  );
}
