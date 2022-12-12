// The await operator can only be used within an async method is probably an error you have encountered frequently.
// In ES13 we will be able to use it outside of the context of an async method.

// Uses case 1 : Loading modules dynamically
const strings = await import(`./example.mjs`);

// Uses case 2 : Using a fallback if module loading fails
let jQuery;
try {
  jQuery = await import("https://cdn-a.com/jQuery");
} catch {
  jQuery = await import("https://cdn-b.com/jQuery");
}

// Uses case 3 : Using whichever resource loads fastest
const resource = await Promise.any([
  fetch("http://example1.com"),
  fetch("http://example2.com"),
]);