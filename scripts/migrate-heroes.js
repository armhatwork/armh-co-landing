const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, '..');

const servicePages = [
  'app/uk/bookkeeping/page.tsx',
  'app/uk/vat-returns/page.tsx',
  'app/uk/self-assessment/page.tsx',
  'app/uk/rd-tax-credits/page.tsx',
  'app/uk/payroll/page.tsx',
  'app/uk/international-tax/page.tsx',
  'app/uk/hmrc-claims/page.tsx',
  'app/uk/corporation-tax/page.tsx',
  'app/uk/companies-house/page.tsx',
  'app/uae/bookkeeping/page.tsx',
  'app/uae/vat-compliance/page.tsx',
  'app/uae/payroll-wps/page.tsx',
  'app/uae/free-zone/page.tsx',
  'app/uae/financial-reporting/page.tsx',
  'app/uae/esr-ubo/page.tsx',
  'app/uae/corporate-tax/page.tsx',
  'app/uae/cfo-advisory/page.tsx',
];

const heroPattern =
  /\{\/\* Hero Section \*\/\}\s*<section className="bg-charcoal-950 pt-32 pb-20 px-4 relative overflow-hidden">[\s\S]*?<\/section>/;

function extractHero(content) {
  const videoMatch = content.match(/<source src="([^"]+)" type="video\/mp4"/);
  const eyebrowMatch = content.match(
    /<p className="(?:font-sans )?text-gold-primary text-sm font-semibold uppercase tracking-\[[^\]]+\] mb-4">\s*([\s\S]*?)\s*<\/p>/
  );
  const titleMatch = content.match(
    /<h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-\[1\.15\]">\s*([\s\S]*?)\s*<\/h1>/
  );
  const descMatch = content.match(
    /<p className="(?:font-sans )?text-charcoal-300 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">\s*([\s\S]*?)\s*<\/p>/
  );
  const contactMatch = content.match(/<Link href="(\/u(?:k|ae)\/contact)"/);

  if (!eyebrowMatch || !titleMatch || !descMatch || !contactMatch) return null;

  return {
    videoSrc: videoMatch ? videoMatch[1] : undefined,
    eyebrow: eyebrowMatch[1].trim(),
    title: titleMatch[1].trim(),
    description: descMatch[1].replace(/\s+/g, ' ').trim(),
    contactHref: contactMatch[1],
  };
}

function buildHeroComponent(data) {
  const lines = [
    '      <ServiceHero',
    `        eyebrow="${data.eyebrow.replace(/"/g, '\\"')}"`,
    `        title="${data.title.replace(/"/g, '\\"')}"`,
    `        description="${data.description.replace(/"/g, '\\"')}"`,
  ];
  if (data.videoSrc) lines.push(`        videoSrc="${data.videoSrc}"`);
  lines.push(
    `        primaryCta={{ label: 'Get a Quote', href: '${data.contactHref}' }}`,
    `        secondaryCta={{ label: 'Book Consultation', href: '${data.contactHref}' }}`,
    '      />'
  );
  return lines.join('\n');
}

for (const relPath of servicePages) {
  const filePath = path.join(projectRoot, relPath);
  let content = fs.readFileSync(filePath, 'utf8');

  if (content.includes('ServiceHero')) {
    console.log('skip (already migrated):', relPath);
    continue;
  }

  const heroData = extractHero(content);
  if (!heroData) {
    console.log('skip (could not parse hero):', relPath);
    continue;
  }

  if (!heroPattern.test(content)) {
    console.log('skip (no hero block):', relPath);
    continue;
  }

  content = content.replace(heroPattern, buildHeroComponent(heroData));

  if (!content.includes("import ServiceHero from '@/components/shared/ServiceHero'")) {
    content = content.replace(
      /^('use client';\s*\n)/,
      "$1\nimport ServiceHero from '@/components/shared/ServiceHero';\n"
    );
  }

  fs.writeFileSync(filePath, content);
  console.log('migrated hero:', relPath);
}
