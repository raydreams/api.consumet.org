let fs;
if (typeof window === 'undefined') {
  // Node.js environment
  fs = require('fs');
} else {
  // Browser environment
  // Use browser-compatible alternatives
}
