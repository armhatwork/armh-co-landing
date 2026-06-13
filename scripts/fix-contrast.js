const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, '..');

const replacements = [
  // Dark-surface hero subtitle (very common pattern)
  ['font-sans text-charcoal-300 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed', 'font-sans text-text-on-dark text-lg md:text-xl max-w-3xl mb-8 leading-relaxed'],
  ['font-sans text-charcoal-300 text-lg md:text-xl leading-relaxed', 'font-sans text-text-on-dark text-lg md:text-xl leading-relaxed'],
  ['font-sans text-charcoal-300 mb-8 leading-relaxed', 'font-sans text-text-on-dark mb-8 leading-relaxed'],
  ['font-sans text-charcoal-300 text-lg mb-8 leading-relaxed', 'font-sans text-text-on-dark text-lg mb-8 leading-relaxed'],
  ['text-charcoal-300 text-lg max-w-3xl mb-8', 'text-text-on-dark text-lg max-w-3xl mb-8'],
  ['text-charcoal-300 mb-8', 'text-text-on-dark mb-8'],
  ['text-charcoal-300 text-lg max-w-3xl', 'text-text-on-dark text-lg max-w-3xl'],
  // Blog emerald cleanup
  ['bg-gradient-to-br from-emerald-50 to-white p-8 rounded-xl border border-emerald-100', 'bg-gradient-to-br from-gold-faint to-white p-8 rounded-xl border border-gold-primary/20'],
  // Muted text on light surfaces - improve readability
  ['text-charcoal-500 text-xs', 'text-text-muted text-xs'],
  ['text-charcoal-500 text-sm', 'text-text-muted text-sm'],
  ['text-xs text-charcoal-500', 'text-xs text-text-muted'],
  ['text-sm text-charcoal-500', 'text-sm text-text-muted'],
  ['text-charcoal-500 mb-4', 'text-text-muted mb-4'],
  ['text-charcoal-500 mb-6', 'text-text-muted mb-6'],
  ['text-charcoal-500 font-sans', 'text-text-muted font-sans'],
  ['text-charcoal-500 text-sm font-sans', 'text-text-muted text-sm font-sans'],
  ['text-charcoal-500 text-sm mt-1', 'text-text-muted text-sm mt-1'],
  ['text-center text-charcoal-500 text-sm mt-6', 'text-center text-text-muted text-sm mt-6'],
  ['HelpCircle className="w-16 h-16 text-charcoal-300 mx-auto mb-4"', 'HelpCircle className="w-16 h-16 text-text-muted mx-auto mb-4"'],
  ['font-sans text-charcoal-300 text-sm', 'font-sans text-text-muted text-sm'],
];

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (/\.(tsx|ts)$/.test(entry.name)) files.push(full);
  }
  return files;
}

for (const file of walk(path.join(projectRoot, 'app'))) {
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
