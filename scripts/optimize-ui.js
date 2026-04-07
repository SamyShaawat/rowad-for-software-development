const fs = require('fs');
const path = require('path');

const walkSync = function(dir, filelist) {
  let files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      filelist = walkSync(path.join(dir, file), filelist);
    }
    else {
      filelist.push(path.join(dir, file));
    }
  });
  return filelist;
};

const componentsDir = path.join(__dirname, '../src/app');
const files = walkSync(componentsDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  
  content = content.replace(/duration:\s*0\.[6-9]/g, 'duration: 0.15');
  content = content.replace(/duration:\s*0\.[3-5]/g, 'duration: 0.1');
  content = content.replace(/duration:\s*1(\.0)?/g, 'duration: 0.2');
  
  content = content.replace(/staggerChildren:\s*0\.[1-9]/g, 'staggerChildren: 0.02');
  
  content = content.replace(/delay:\s*i\s*\*\s*0\.[1-9]+/g, 'delay: i * 0.02');
  content = content.replace(/delay:\s*0\.[1-9]+/g, 'delay: 0.02');

  content = content.replace(/<Image([^>]*?)(?<!priority[^>]*?)>/g, (match, p1) => {
    if (match.includes('priority')) return match;
    return `<Image priority${p1}>`;
  });

  fs.writeFileSync(file, content);
}

console.log('Successfully optimized all animations and images for speed.');
