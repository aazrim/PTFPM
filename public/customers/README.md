# Customer logos

Drop customer logo image files in this folder (`public/customers/`) to have them
appear automatically in the "Our Customers" moving logo strip on the homepage.

## How it works

Each customer entry is defined in `src/components/site/CustomerLogos.tsx` with a
`name` and a `file`. The component loads the image from
`/customers/<file>` (i.e. directly from this folder). If the file is missing,
the customer's name is shown as text instead — so adding the real logo file
later is a drop-in replacement, no code changes needed for the image itself.

## Adding / replacing a logo

1. Export the logo as PNG (transparent background preferred) or SVG.
2. Keep it roughly landscape, ~400x150px is a good size — it will be scaled
   down to fit a 48px-tall slot.
3. Name the file in kebab-case, e.g. `sinar-baja.png`.
4. Copy it into this folder.
5. If it's a brand-new customer (not already listed), add an entry to the
   `clients` array in `src/components/site/CustomerLogos.tsx`:

   ```ts
   { name: "NEW CUSTOMER", file: "new-customer.png" },
   ```

## Current expected filenames

- sinar-baja.png
- nusa-cement.png
- garuda-agro.png
- prima-chemical.png
- mega-steel.png
- tirta-pack.png
- aneka-mining.png
- bintang-food.png
