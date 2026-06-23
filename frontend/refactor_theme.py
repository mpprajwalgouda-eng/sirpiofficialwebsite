import os
import re

def process_file(filepath):
    # Skip Footer and Navbar (already handled or intentionally dark)
    if os.path.basename(filepath) in ['Footer.tsx', 'Navbar.tsx']:
        return

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content

    # Replace Slate Text
    content = re.sub(r'\btext-slate-900\b', 'text-sirpi-text', content)
    content = re.sub(r'\btext-slate-800\b', 'text-sirpi-text', content)
    content = re.sub(r'\btext-slate-200\b', 'text-sirpi-text', content)
    content = re.sub(r'\btext-slate-100\b', 'text-sirpi-text', content)
    content = re.sub(r'\btext-slate-50\b', 'text-sirpi-text', content)
    
    content = re.sub(r'\btext-slate-700\b', 'text-sirpi-muted', content)
    content = re.sub(r'\btext-slate-600\b', 'text-sirpi-muted', content)
    content = re.sub(r'\btext-slate-500\b', 'text-sirpi-muted', content)
    content = re.sub(r'\btext-slate-400\b', 'text-sirpi-muted', content)
    content = re.sub(r'\btext-slate-300\b', 'text-sirpi-muted', content)
    content = re.sub(r'\btext-gray-300\b', 'text-sirpi-muted', content)
    content = re.sub(r'\btext-gray-400\b', 'text-sirpi-muted', content)
    content = re.sub(r'\btext-gray-500\b', 'text-sirpi-muted', content)

    # Replace Backgrounds
    content = re.sub(r'\bbg-slate-50\b', 'bg-sirpi-surface', content)
    content = re.sub(r'\bbg-slate-100\b', 'bg-sirpi-surface', content)
    content = re.sub(r'\bbg-slate-800\b', 'bg-sirpi-surface', content)
    content = re.sub(r'\bbg-slate-900\b', 'bg-sirpi-bg', content)
    
    # Semi-transparent backgrounds that assumed a dark theme
    content = re.sub(r'\bbg-white/5\b', 'bg-sirpi-text/5', content)
    content = re.sub(r'\bbg-white/10\b', 'bg-sirpi-text/10', content)

    # Borders
    content = re.sub(r'\bborder-slate-200\b', 'border-sirpi-muted/20', content)
    content = re.sub(r'\bborder-slate-300\b', 'border-sirpi-muted/20', content)
    content = re.sub(r'\bborder-white/5\b', 'border-sirpi-muted/20', content)
    content = re.sub(r'\bborder-white/10\b', 'border-sirpi-muted/20', content)

    # Carefully replace text-white only if the line doesn't seem to be a primary button
    # or explicitly dark section
    lines = content.split('\n')
    for i, line in enumerate(lines):
        if 'text-white' in line:
            # Check if line has primary/accent backgrounds
            if not re.search(r'bg-sirpi-primary|bg-sirpi-accent|bg-gradient|bg-\[#', line):
                lines[i] = re.sub(r'\btext-white\b', 'text-sirpi-text', line)
                # If there's text-white/60 or similar, change it to muted
                lines[i] = re.sub(r'\btext-white/60\b', 'text-sirpi-muted', lines[i])
                lines[i] = re.sub(r'\btext-white/80\b', 'text-sirpi-muted', lines[i])
    
    content = '\n'.join(lines)

    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {filepath}")

def main():
    src_dir = r"c:\Users\mppra\OneDrive\Desktop\Sirpiii\frontend\src"
    for root, dirs, files in os.walk(src_dir):
        for file in files:
            if file.endswith('.tsx') or file.endswith('.ts'):
                process_file(os.path.join(root, file))

if __name__ == '__main__':
    main()
