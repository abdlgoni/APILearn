---
name: Neo-Brutalist API Learning
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1b1b1b'
  on-surface-variant: '#4b4731'
  inverse-surface: '#303030'
  inverse-on-surface: '#f1f1f1'
  outline: '#7c775f'
  outline-variant: '#cdc7aa'
  surface-tint: '#6a5f00'
  primary: '#6a5f00'
  on-primary: '#ffffff'
  primary-container: '#ffe600'
  on-primary-container: '#726600'
  inverse-primary: '#dec800'
  secondary: '#7531d3'
  on-secondary: '#ffffff'
  secondary-container: '#8f4fed'
  on-secondary-container: '#fffbff'
  tertiary: '#006e27'
  on-tertiary: '#ffffff'
  tertiary-container: '#7dff8e'
  on-tertiary-container: '#00762b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#fde400'
  primary-fixed-dim: '#dec800'
  on-primary-fixed: '#201c00'
  on-primary-fixed-variant: '#504700'
  secondary-fixed: '#ecdcff'
  secondary-fixed-dim: '#d6baff'
  on-secondary-fixed: '#280057'
  on-secondary-fixed-variant: '#5f07bc'
  tertiary-fixed: '#6bff83'
  tertiary-fixed-dim: '#00e55b'
  on-tertiary-fixed: '#002107'
  on-tertiary-fixed-variant: '#00531b'
  background: '#f9f9f9'
  on-background: '#1b1b1b'
  surface-variant: '#e2e2e2'
typography:
  headline-xl:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '900'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 28px
    fontWeight: '800'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '800'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '500'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '500'
    lineHeight: '1.5'
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.5'
  label-bold:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1.2'
spacing:
  unit: 4px
  container-margin: 24px
  gutter: 16px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style
This design system embraces **Neobrutalism**, moving away from standard SaaS aesthetics toward a high-energy, raw, and high-contrast visual language. The brand personality is energetic, unapologetic, and intellectually stimulating. It is designed for developers and students who want an educational experience that feels like a modern creative tool rather than a traditional textbook.

The style is defined by "loud" visual signals: thick black strokes, un-blurred drop shadows, and a saturated color palette. This creates a "Pop Art" digital environment where every interaction is tactile and clearly defined. Despite the aggressive visual style, the information architecture remains rigorous to ensure that technical API concepts are communicated with absolute clarity.

## Colors
The palette utilizes maximum saturation to drive engagement and highlight critical educational paths.
- **Primary (Vibrant Yellow):** Used for main action surfaces and hero highlights.
- **Secondary (Bright Purple):** Used for secondary features and categorical distinction.
- **Tertiary (Neon Green):** Reserved for success states and "Run API" triggers.
- **Accent (Hot Pink):** Used for interactive hover states and destructive warnings.
- **Base:** A pure white (`#FFFFFF`) background provides the necessary "breathing room" to prevent the high-contrast elements from becoming overwhelming. All strokes and shadows use pure black (`#000000`).

## Typography
Typography is structural and heavy. **Hanken Grotesk** is used for its sharp, contemporary terminals and exceptional readability at heavy weights. For technical API content, **JetBrains Mono** is introduced to provide a developer-centric feel that complements the brutalist aesthetic.

Headlines should always use `ExtraBold` or `Black` weights to anchor the page. Body text maintains a `Medium` weight to ensure legibility against the stark white background. Labels and buttons use uppercase styling with tight tracking to mimic poster design.

## Layout & Spacing
The layout follows a **Fixed Grid** model on desktop (12 columns) and a fluid model on mobile. Neobrutalism thrives on "crowdedness" that is strictly organized. 

- **Grid:** Use a 12-column grid for desktop with 24px margins. Gutters are kept at a strict 16px.
- **Rhythm:** Spacing follows a 4px base unit. 
- **Reflow:** On mobile, components stack vertically. Because of the heavy borders and hard shadows, increase the vertical margin between cards to 24px to prevent visual "collision."

## Elevation & Depth
Depth is not simulated through physics or light; it is represented through **Hard Shadows**. 
- **Surface Elevation:** Every interactive container (Cards, Buttons, Inputs) must have a `3px` or `4px` black border.
- **Shadows:** Use `4px 4px 0px 0px #000000`. These are hard-edged, non-blurred offsets.
- **Active State:** When an element is pressed, the shadow should disappear (`0px 0px 0px 0px`), and the element should translate 2px down and 2px right to simulate a physical button being pushed into the page.

## Shapes
The shape language is **Sharp (0px)**. All corners are 90-degree angles. This reinforces the "raw" and "unrefined" brutalist concept. If a specific component requires a softer touch for accessibility (like a circular avatar), use a 2px radius as an absolute maximum, but 0px is the system default for all structural elements.

## Components
- **Buttons:** Fill with `primary` or `secondary` colors. Always feature a 3px black border and the 4px hard shadow. Text is `label-bold` in black.
- **Inputs:** White background with a 2px black border. On focus, change the border to 3px and add the hard shadow.
- **Cards:** White or very light grey background. 3px black border. Hard shadow is mandatory. Use the `headline-md` for titles.
- **Chips/Badges:** Use the `tertiary` (green) for "GET" methods and `accent` (pink) for "POST" methods. These do not require shadows but must have a 2px black border.
- **Lists:** Items are separated by thick 2px black horizontal lines. No rounded corners between list items.
- **Code Blocks:** Use a dark grey background (`#1A1A1A`) with a neon green (`tertiary`) text color for code, wrapped in the standard 3px black bordered container.