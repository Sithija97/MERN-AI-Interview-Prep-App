export const truncateText = (text: string, maxChars: number): string => {
  if (!text) return "";
  return text.length > maxChars ? text.slice(0, maxChars) + "..." : text;
};
