/**
 * Return date string in format dd/mm/yyy
 * @param date - date to format, default to today
 * @returns  {string} date in dd/mm/yyyy format
 */
export const formatDMY = date => {
  // Default to today
  date = new Date(date) || new Date();
  return (
    ('0' + date.getDate()).slice(-2) +
    '/' +
    ('0' + (date.getMonth() + 1)).slice(-2) +
    '/' +
    ('000' + date.getFullYear()).slice(-4)
  );
};

/**
 *  Return date string in format MM/DD/YYYY
 *  @param date
 *  @returns  {string} date in MM/DD/YYYY format
 */
export const formatDate = date => new Date(date).toLocaleDateString();

/**
 *  Return date string in format MM/DD/YYYY
 *  @param date
 *  @returns  {string} date in MM/DD/YYYY format
 */
export const convertUTCtoTimestamp = date =>
  Math.floor(new Date(date).getTime());
