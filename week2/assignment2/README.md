# Portfolio Responsive Design – Comparison

## Version 1: Manual Responsive
- **Techniques Used:** Media queries for 3 breakpoints, CSS Grid + Flexbox, `vw/vh` units for headings, `max-width` images.
- **Pros:**
  - Full control over design and breakpoints.
  - Lightweight (no external libraries).
  - Good for learning core CSS.
- **Cons:**
  - More CSS code to maintain.
  - Requires testing across devices manually.
  - Harder to scale for larger projects.

## Version 2: Bootstrap Responsive
- **Techniques Used:** Bootstrap 5 grid system, responsive classes (`col-md`, `container`, `row`), built-in components (navbar, cards).
- **Pros:**
  - Faster development (grid and responsiveness handled automatically).
  - Consistent design across breakpoints.
  - Huge ecosystem of components/utilities.
- **Cons:**
  - Less creative freedom (designs can look “Bootstrap default”).
  - Extra dependency (Bootstrap library).
  - Customization requires overriding CSS.

## Code Complexity
- Manual CSS version: ~150 lines of custom CSS.
- Bootstrap version: ~30 lines custom CSS + Bootstrap CDN.

## Development Time
- Manual version took longer due to writing and testing breakpoints.
- Bootstrap version was faster because of pre-built grid and components.

## Personal Preference
I prefer the **Manual Responsive version** for small personal projects because it feels lighter and gives me more creative freedom. For **bigger or team projects**, Bootstrap is more efficient since it reduces development time and ensures consistency.
