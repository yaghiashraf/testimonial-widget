# Logo Files

## Available Logos

1. **logo.svg** - Horizontal logo for website header
2. **logo-stripe.svg** - Square logo for Stripe integration (400x400)
3. **convert-logo.html** - Tool to convert SVG to PNG

## Converting to PNG

### Method 1: Use the HTML Converter
1. Open `convert-logo.html` in your browser
2. Click "Convert to PNG & Download"
3. Save the generated PNG file

### Method 2: Online Converter
1. Go to https://convertio.co/svg-png/
2. Upload `public/logo-stripe.svg`
3. Download the converted PNG

### Method 3: Command Line (if you have tools installed)
```bash
# Using Inkscape
inkscape --export-filename="logo-stripe.png" --export-width=400 --export-height=400 public/logo-stripe.svg

# Using ImageMagick
convert public/logo-stripe.svg -resize 400x400 public/logo-stripe.png
```

## Usage

- **Website Header**: Use `logo.svg`
- **Stripe Dashboard**: Use the PNG version of `logo-stripe.svg`
- **Social Media**: Use PNG in various sizes (400x400, 800x800)
- **Favicon**: Already handled by existing favicon files

## Recommended Sizes for PNG

- **Standard**: 400x400px (for most use cases)
- **High-DPI**: 800x800px (for retina displays)
- **Stripe**: 400x400px minimum
- **Social Media**: 1200x1200px for best results