// Utility function to remove HTML tags using a regular expression
export const stripHtmlWithRegex = (html: string) => {
  return html.replace(/<\/?[^>]+(>|$)/g, "");
};
