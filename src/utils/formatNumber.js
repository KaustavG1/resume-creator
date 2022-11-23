export default function formatNumber(number = '+1239830221774', format) {
  // Remove all non-digit characters
  let cleaned = ('' + number).replace(/\D/g, '');

  // Create a substring with the 10 digits from the right
  cleaned = cleaned.substring(cleaned.length - 10, cleaned.length);

  if (format === "US") {
    // Add `+1 (` to the extreme left, `) ` after the digit at index 2 and `-` after the digit at index 5
    return `+1&nbsp;(${cleaned.substring(0, 3)})&nbsp;${cleaned.substring(3, 6)}-${cleaned.substring(6)}`
  }

  if (format === "IN") {
    // Add `+91 ` to the extreme left and `-` after the digit at index 5
    return `+91&nbsp;${cleaned.substring(0, 5)}-${cleaned.substring(5)}`
  }

  // Default
  return "Something went wrong";
}
