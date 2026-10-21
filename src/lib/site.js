export const SITE_URL = 'https://dip-lab-icp.github.io/diplab'
export const GITHUB_ORG = 'https://github.com/dip-lab-icp'
export const HUGGINGFACE_ORG = 'https://huggingface.co/dip-lab-icp'
export const GITHUB_REPO = 'https://github.com/dip-lab-icp/diplab'
export const SCHOLAR_URL =
  'https://scholar.google.com/citations?user=E4-dElIAAAAJ&hl=en&oi=ao'
export const PI_WEBSITE = 'https://qazimsajjad.github.io/'
export const ICP_URL = 'https://icp.edu.pk/icp/index.php'
export const MAPS_URL =
  'https://www.google.com/maps/place/Academic+Block,+Islamia+College+Peshawar/@33.9996942,71.4734493,17z'
export const MAPS_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d292.3618177254085!2d71.47450203827478!3d34.0003316207537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d911371d17fd6d%3A0x30ea1849152c699e!2sAcademic%20Block%2C%20Islamia%20College%20Peshawar!5e0!3m2!1sen!2s!4v1773642199323!5m2!1sen!2s'

export function asset(path) {
  return `${import.meta.env.BASE_URL}${String(path).replace(/^\//, '')}`
}
