const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, '..');

const servicePages = [
  'app/uk/self-assessment/page.tsx',
  'app/uk/international-tax/page.tsx',
  'app/uk/hmrc-claims/page.tsx',
  'app/uk/companies-house/page.tsx',
  'app/uae/free-zone/page.tsx',
  'app/uae/cfo-advisory/page.tsx',
];

const heroPattern =
  /\{\/\* Hero Section \*\/\}\s*<section className="bg-charcoal-950 pt-32 pb-20 px-4 relative overflow-hidden">[\s\S]*?<\/section>/;

function extractHero(content) {
  const videoMatch = content.match(/<source src="([^"]+)" type="video\/mp4"/);
  const eyebrowMatch = content.match(
    /<p className="[^"]*text-gold-primary[^"]*">\s*([\s\S]*?)\s*<\/p>\s*<h1/
  );
  const titleMatch = content.match(/<h1 className="[^"]*">\s*([\s\S]*?)\s*<\/h1>/);
  const descMatch = content.match(
    /<p className="[^"]*text-charcoal-300[^"]*">\s*([\s\S]*?)\s*<\/p>\s*<div className="flex/
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

  if (content.includes('ServiceHero')) continue;

  const heroData = extractHero(content);
  if (!heroData || !heroPattern.test(content)) {
    console.log('failed:', relPath);
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
