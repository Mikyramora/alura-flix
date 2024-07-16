/**
 *  This function converts a youtube video URL to an embedded URL
 *  @param {string} url - The youtube video URL in the format https://www.youtube.com/watch?v=videoId and  https://youtu.be/videoId?si=any
 *  @returns {string} - The embedded URL
 */
export const convertToEmbeddedURL = (url) => {
  const videoId = extractVideoId(url)
  return `https://www.youtube.com/embed/${videoId}`
}

/**
 * Extracts the thumbnail from a youtube video URL
 * @param url - The youtube video URL in the format https://www.youtube.com/watch?v=videoId and  https://youtu.be/videoId?si=any
 * @returns {string} - The thumbnail URL
 */
export const extractThumbnail = (url) => {
  const videoId = extractVideoId(url)
  return `https://img.youtube.com/vi/${videoId}/sddefault.jpg`
}

/**
 * Extracts the videoId from a youtube video URL
 * @param {string} url - The youtube video URL in the format https://www.youtube.com/watch?v=videoId and  https://youtu.be/videoId?si=any
 * @returns {string} - The videoId
 */
const extractVideoId = (url) => {
  if (!url) {
    console.error("url is required")
    return ''
  }
  return url.split('v=')[1] || url.split('be/')[1].split('?')[0]
}

export const constraints = {
  isEmptyValue: (value) => !value || value.trim().length === 0
}