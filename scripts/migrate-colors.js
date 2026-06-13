const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, '..');
const root = path.join(projectRoot, 'app');

const replacements = [
  ['hover:bg-emerald-600 hover:text-white', 'hover:bg-gold-primary hover:text-charcoal-950'],
  ['prose-blockquote:border-emerald-500 prose-blockquote:bg-emerald-50', 'prose-blockquote:border-gold-primary prose-blockquote:bg-gold-faint'],
  ['prose-emerald', 'prose-neutral'],
  ['bg-emerald-600/10', 'bg-gold-subtle'],
  ['border-emerald-500/30', 'border-gold-primary/30'],
  ['border-emerald-200', 'border-gold-primary/20'],
  ['focus:ring-emerald-600/20', 'focus:ring-gold-primary/20'],
  ['focus:border-emerald-600', 'focus:border-gold-primary'],
  ['hover:text-emerald-700', 'hover:text-gold-secondary'],
  ['hover:text-emerald-500', 'hover:text-gold-secondary'],
  ['hover:text-emerald-400', 'hover:text-gold-primary'],
  ['hover:bg-emerald-100', 'hover:bg-gold-subtle'],
  ['prose-a:text-emerald-600', 'prose-a:text-gold-primary'],
  ['prose-code:text-emerald-600', 'prose-code:text-gold-primary'],
  ['prose-code:bg-emerald-50', 'prose-code:bg-gold-faint'],
  ['text-emerald-700', 'text-gold-secondary'],
  ['text-emerald-400', 'text-gold-primary'],
  ['text-emerald-600', 'text-gold-primary'],
  ['text-emerald-500', 'text-gold-secondary'],
  ['bg-emerald-600', 'bg-gold-primary'],
  ['bg-emerald-500', 'bg-gold-secondary'],
  ['hover:bg-emerald-500', 'hover:bg-gold-secondary'],
  ['hover:bg-emerald-600', 'hover:bg-gold-primary'],
  ['border-emerald-600', 'border-gold-primary'],
  ['border-emerald-500', 'border-gold-primary'],
  ['bg-emerald-100', 'bg-gold-subtle'],
  ['bg-emerald-50', 'bg-gold-faint'],
  ['fill-emerald-500 text-emerald-500', 'fill-gold-primary text-gold-primary'],
  ['hover:border-emerald-500/20', 'hover:border-gold-primary/20'],
];

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (/\.(tsx|ts)$/.test(entry.name)) files.push(full);
  }
  return files;
}

for (const file of walk(root)) {
  let content = fs.readFileSync(file, 'utf8');
  const original = content;
  for (const [from, to] of replacements) {
    content = content.split(from).join(to);
  }
  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log('updated:', path.relative(projectRoot, file));
  }
}

// components
const compRoot = path.join(projectRoot, 'components');
for (const file of walk(compRoot)) {
  let content = fs.readFileSync(file, 'utf8');
  const original = content;
  for (const [from, to] of replacements) {
    content = content.split(from).join(to);
  }
  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log('updated:', path.relative(projectRoot, file));
  }
}
