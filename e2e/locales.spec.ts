import { test, expect } from '@playwright/test';

const routes = ['/', '/services', '/clients', '/about', '/contact'];
const arPath = (r: string) => (r === '/' ? '/ar' : `/ar${r}`);

test.describe('Languages', () => {
  for (const route of routes) {
    test(`English ${route} keeps its URL, lang=en and is indexable`, async ({ page }) => {
      const res = await page.goto(route);
      expect(res?.status()).toBe(200);
      await expect(page.locator('html')).toHaveAttribute('lang', 'en');
      await expect(page.locator('html')).toHaveAttribute('dir', 'ltr');
      await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /^index/);
    });

    test(`Arabic ${arPath(route)} is rtl and indexable`, async ({ page }) => {
      const res = await page.goto(arPath(route));
      expect(res?.status()).toBe(200);
      await expect(page.locator('html')).toHaveAttribute('lang', 'ar');
      await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');
      await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /^index/);
    });
  }

  test('Arabic header uses Arabic labels and /ar links', async ({ page }) => {
    await page.goto('/ar');
    const nav = page.locator('header nav');
    await expect(nav.getByRole('link', { name: 'الرئيسية' }).first()).toHaveAttribute(
      'href',
      '/ar'
    );
    await expect(nav.getByRole('link', { name: 'تواصل معنا' }).first()).toHaveAttribute(
      'href',
      '/ar/contact'
    );
  });

  test('Arabic footer is fully Arabic, English footer unchanged', async ({ page }) => {
    await page.goto('/ar');
    const footer = page.locator('footer');
    for (const text of ['استكشف', 'المقر الرئيسي', 'الاستفسارات', 'الخصوصية']) {
      await expect(footer).toContainText(text);
    }
    await expect(footer).not.toContainText('Main Office');
    await page.goto('/');
    await expect(page.locator('footer')).toContainText('Main Office');
  });

  test('Footer has no fake newsletter form', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('footer form')).toHaveCount(0);
  });

  test('Error pages are bilingual', async ({ page }) => {
    for (const code of ['404', '500', '403']) {
      await page.goto(`/${code}.html`);
      await expect(page.locator('[lang="ar"][dir="rtl"]').first()).toBeVisible();
    }
  });

  test('Arabic home is fully translated and stays inside /ar', async ({ page }) => {
    await page.goto('/ar');
    await expect(page.locator('h1')).toHaveText('فريق واحد لكل برمجياتك.');
    const main = page.locator('main');
    for (const english of [
      'One team for every',
      'Book a free consultation',
      'Explore services',
      'How we work',
    ]) {
      await expect(main).not.toContainText(english);
    }
    const hrefs = await main
      .locator('a[href^="/"]')
      .evaluateAll((els) => els.map((e) => e.getAttribute('href') ?? ''));
    expect(hrefs.length).toBeGreaterThan(5);
    expect(hrefs.filter((h) => !h.startsWith('/ar'))).toEqual([]);
  });

  test('Home stats say 15+ years of experience in both languages', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('15+', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('Years Experience')).toBeVisible();
    await expect(page.getByText('5+', { exact: true })).toHaveCount(0);
    await page.goto('/ar');
    await expect(page.locator('bdi[dir="ltr"]', { hasText: '15+' })).toBeVisible();
    await expect(page.getByText('5+', { exact: true })).toHaveCount(0);
  });

  test('The small label words above the headings are gone, in both languages', async ({ page }) => {
    const gone: Record<string, string[]> = {
      '/about': ['About Rowad', 'Our story', 'Expertise', 'How we work'],
      '/contact': ['FAQ'],
      '/services': ['Services'],
      '/clients': ['Clients'],
      '/ar/about': ['عن رواد', 'قصتنا', 'خبراتنا', 'طريقة عملنا'],
      '/ar/contact': ['الأسئلة الشائعة'],
      '/ar/services': ['خدماتنا'],
      '/ar/clients': ['عملاؤنا'],
    };
    for (const [path, labels] of Object.entries(gone)) {
      await page.goto(path);
      const lines = (await page.locator('main').innerText()).split('\n').map((l) => l.trim());
      for (const label of labels)
        expect(lines, `${path} still has "${label}"`).not.toContain(label);
      expect(lines.filter((l) => /^\d\d \/ \d\d$/.test(l))).toEqual([]);
    }
  });

  test('English home keeps its text and links', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toHaveText('One team for every piece of your software.');
    await expect(page.getByRole('link', { name: 'Explore services' })).toHaveAttribute(
      'href',
      '/services'
    );
  });

  test('Arabic services page is fully translated and stays inside /ar', async ({ page }) => {
    await page.goto('/ar/services');
    await expect(page.locator('h1')).toHaveText('ويب وموبايل وERP وذكاء اصطناعي من فريق واحد.');
    await expect(page.locator('section[id]')).toHaveCount(6);
    const main = page.locator('main');
    for (const english of [
      'What we build',
      'How we deliver',
      'Ways to work with us',
      'Start a project',
    ]) {
      await expect(main).not.toContainText(english);
    }
    const hrefs = await main
      .locator('a[href^="/"]')
      .evaluateAll((els) => els.map((e) => e.getAttribute('href') ?? ''));
    expect(hrefs.length).toBeGreaterThan(5);
    expect(hrefs.filter((h) => !h.startsWith('/ar'))).toEqual([]);
  });

  test('English services page keeps its text and names no unconfirmed tools', async ({ page }) => {
    await page.goto('/services');
    await expect(page.locator('h1')).toHaveText('Web, mobile, ERP and AI from one team.');
    await expect(page.getByText('What we build').first()).toBeVisible();
    for (const tool of ['Odoo', 'Flutter', 'React Native', 'LangChain']) {
      await expect(page.locator('main')).not.toContainText(tool);
    }
  });

  test('Arabic contact page is fully translated and keeps phone and email left-to-right', async ({
    page,
  }) => {
    await page.goto('/ar/contact');
    await expect(page.locator('h1')).toHaveText('أخبرنا بما تريد أن تبنيه.');
    await expect(page.locator('dt')).toHaveCount(4);
    const main = page.locator('main');
    for (const english of [
      'Message us directly',
      'Working Hours',
      'Frequently Asked Questions',
      'Open in Google Maps',
    ]) {
      await expect(main).not.toContainText(english);
    }
    await expect(main.locator('bdi[dir="ltr"]', { hasText: '+20 109 1539 396' })).toBeVisible();
    await expect(main.locator('a[href="mailto:info@rowad.com"]').first()).toBeVisible();
    const hrefs = await main
      .locator('a[href^="/"]')
      .evaluateAll((els) => els.map((e) => e.getAttribute('href') ?? ''));
    expect(hrefs.filter((h) => !h.startsWith('/ar'))).toEqual([]);
  });

  test('Working hours are Sunday to Thursday 9 to 5 in both languages and in the structured data', async ({
    page,
    request,
  }) => {
    await page.goto('/ar/contact');
    await expect(page.getByText('من الأحد إلى الخميس: 9:00 ص - 5:00 م').first()).toBeVisible();
    await expect(page.getByText('الجمعة والسبت: مغلق')).toBeVisible();
    await page.goto('/contact');
    await expect(page.getByText('Fri - Sat: Closed')).toBeVisible();
    const html = await (await request.get('/')).text();
    const ld = JSON.parse(html.match(/ld\+json"[^>]*>([\s\S]*?)<\/script>/)![1]);
    const hours = JSON.stringify(ld);
    expect(hours).toContain('"dayOfWeek":["Sunday","Monday","Tuesday","Wednesday","Thursday"]');
    expect(hours).toContain('"opens":"09:00","closes":"17:00"');
  });

  test('English contact page keeps its text, FAQ and confirmed timelines', async ({ page }) => {
    await page.goto('/contact');
    await expect(page.locator('h1')).toHaveText('Tell us what you want to build.');
    await expect(page.locator('dt')).toHaveCount(4);
    await expect(page.getByText('2–6 weeks')).toBeVisible();
    await expect(page.getByText('Sun - Thu: 9:00 AM - 5:00 PM').first()).toBeVisible();
  });

  test('Arabic logo: orange و with a shadda, footer subtitle translated, R mark kept', async ({
    page,
  }) => {
    await page.goto('/ar');
    const header = page.locator('header');
    // رواد with a shadda (U+0651) and a fatha (U+064E) on the و
    await expect(header.getByText('رو\u0651\u064eاد')).toBeVisible();
    await expect(header.locator('span.text-orange-500')).toHaveText('و\u0651\u064e');
    await expect(header.locator('img[src*="icon-96"]')).toBeVisible();
    await expect(page.locator('footer')).toContainText('لتطوير البرمجيات');
    await expect(page.locator('footer')).not.toContainText('Software Development');
  });

  test('English logo is unchanged', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('header').getByText('ROWAD')).toBeVisible();
    await expect(page.locator('header span.text-orange-500')).toHaveText('O');
    await expect(page.locator('footer')).toContainText('Software Development');
  });

  for (const path of ['/ar', '/ar/services']) {
    test(`Arabic diagrams on ${path} have no untranslated English labels`, async ({ page }) => {
      await page.goto(path);
      const texts = await page
        .locator('svg[viewBox="0 0 480 320"] text')
        .evaluateAll((els) => els.map((e) => e.textContent ?? ''));
      expect(texts.length).toBeGreaterThan(10);
      // Code, URLs and store or tool names are meant to stay as written.
      const allowed = [
        'rowad.com/shop',
        'next build',
        'iOS',
        'App Store',
        'Android',
        'Google Play',
        'ERP',
        'SSL',
        'SEO',
        'PWA',
      ];
      const english = texts.filter((t) => {
        let rest = t;
        for (const a of allowed) rest = rest.split(a).join('');
        return /[A-Za-z]{3,}/.test(rest);
      });
      expect(english).toEqual([]);
    });
  }

  test('Arabic diagrams are mirrored so flows start at the right', async ({ page }) => {
    await page.goto('/ar/services');
    const svg = page.locator('svg[viewBox="0 0 480 320"]').first();
    const transform = await svg.evaluate((el) => getComputedStyle(el).transform);
    expect(transform).toMatch(/^matrix\(-1,/);
    await page.goto('/services');
    const en = await page
      .locator('svg[viewBox="0 0 480 320"]')
      .first()
      .evaluate((el) => getComputedStyle(el).transform);
    expect(en).toBe('none');
  });

  for (const [path, label] of [
    ['/', 'Trusted by our clients and partners'],
    ['/ar', 'يثق بنا شركاؤنا'],
  ] as const) {
    test(`Trust strip on ${path}: wording, moves ${path === '/' ? 'left to right' : 'right to left'}, never leaves a gap`, async ({
      page,
    }) => {
      await page.goto(path);
      await expect(page.locator('section[aria-label] p').first()).toHaveText(label);
      const sample = () =>
        page.evaluate(() => {
          const track = document.querySelector('section[aria-label] .animate-marquee')!;
          const box = track.parentElement!.getBoundingClientRect();
          const r = track.getBoundingClientRect();
          return {
            x: track.querySelector('a')!.getBoundingClientRect().left,
            covers: r.left <= box.left + 1 && r.right >= box.right - 1,
          };
        });
      const a = await sample();
      await page.waitForTimeout(1200);
      const b = await sample();
      // English slides left to right (x grows), Arabic slides right to left (x shrinks)
      if (path === '/') expect(b.x).toBeGreaterThan(a.x);
      else expect(b.x).toBeLessThan(a.x);
      expect(a.covers && b.covers).toBe(true);
    });
  }

  test('Arabic about page is fully translated and stays inside /ar', async ({ page }) => {
    await page.goto('/ar/about');
    await expect(page.locator('h1')).toHaveText('فريق برمجة يبقى معك على المدى الطويل.');
    const main = page.locator('main');
    for (const english of ['Our story', 'Expertise', 'Everything in one place', 'How we work']) {
      await expect(main).not.toContainText(english);
    }
    await expect(main.locator('ul li').filter({ hasText: 'ضمان الجودة' })).toHaveCount(1);
    await expect(main.locator('bdi[dir="ltr"]', { hasText: '50+' })).toBeVisible();
    const hrefs = await main
      .locator('a[href^="/"]')
      .evaluateAll((els) => els.map((e) => e.getAttribute('href') ?? ''));
    expect(hrefs.length).toBeGreaterThanOrEqual(2);
    expect(hrefs.filter((h) => !h.startsWith('/ar'))).toEqual([]);
  });

  test('English about page keeps its text', async ({ page }) => {
    await page.goto('/about');
    await expect(page.locator('h1')).toHaveText('A software team that stays for the long run.');
    await expect(page.getByText('Everything in one place')).toBeVisible();
    await expect(page.getByText('QA and test automation')).toBeVisible();
  });

  test('Arabic clients page: translated text, Arabic search and the home-strip deep link', async ({
    page,
  }) => {
    await page.goto('/ar/clients');
    await expect(page.locator('h1')).toHaveText('شركات تعمل ببرمجياتنا.');
    const cards = page.locator('main li[id^="client-"]');
    await expect(cards).toHaveCount(6);
    await expect(cards.first()).toContainText('الخدمات اللوجستية');
    await expect(page.getByRole('searchbox')).toHaveAttribute(
      'placeholder',
      'ابحث بالاسم أو المجال'
    );
    await page.getByRole('searchbox').fill('الخليج');
    await expect(cards).toHaveCount(1);
    await expect(cards.first()).toContainText('Malak Al Reem Properties Development');
    await page.getByRole('searchbox').fill('zzzz');
    await expect(page.getByText('لا يوجد عملاء مطابقون لبحثك.')).toBeVisible();
    // link from the logo strip on the Arabic home page
    await page.goto('/ar/clients#client-11');
    await expect(page.locator('#client-11')).toBeVisible();
    await expect(page.locator('#client-11')).toHaveClass(/ring-orange-500/);
  });

  test('English clients page keeps its text and search', async ({ page }) => {
    await page.goto('/clients');
    await expect(page.locator('h1')).toHaveText('Companies that run on our software.');
    await page.getByRole('searchbox').fill('maritime');
    const names = await page.locator('main li[id^="client-"] h3').allInnerTexts();
    expect(names).toEqual(
      expect.arrayContaining(['BC Marine Electronics (BCME)', 'International Maritime Group (IMG)'])
    );
    await page.getByRole('searchbox').fill('zzzz');
    await expect(page.getByText('No clients match your search.')).toBeVisible();
  });

  test('Language button sits next to the dark-mode button and goes to the same page', async ({
    page,
  }) => {
    for (const [en, ar] of [
      ['/', '/ar'],
      ['/services', '/ar/services'],
      ['/clients', '/ar/clients'],
      ['/about', '/ar/about'],
      ['/contact', '/ar/contact'],
    ]) {
      await page.goto(en);
      const toArabic = page.locator('header a[hreflang="ar"]:visible');
      await expect(toArabic).toHaveText('العربية');
      await expect(toArabic).toHaveAttribute('href', ar);
      await toArabic.click();
      await expect(page).toHaveURL(new RegExp(`${ar}$`));
      await expect(page.locator('html')).toHaveAttribute('lang', 'ar');
      const toEnglish = page.locator('header a[hreflang="en"]:visible');
      await expect(toEnglish).toHaveText('English');
      await expect(toEnglish).toHaveAttribute('href', en);
      await toEnglish.click();
      await expect(page).toHaveURL(new RegExp(`${en === '/' ? '/' : en}$`));
      await expect(page.locator('html')).toHaveAttribute('lang', 'en');
    }
  });

  test('Language button is visible on a phone without opening the menu', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');
    await expect(page.locator('header a[hreflang="ar"]:visible')).toBeVisible();
    await page.goto('/ar');
    await expect(page.locator('header a[hreflang="en"]:visible')).toBeVisible();
  });
});
