// API Configuration for SkillConnect Frontend
// Change this URL based on environment

const CONFIG = {
    // Production Backend URL (same domain - DigitalOcean routing handles it)
    API_BASE_URL: 'https://skillconnect.dev/api',
    
    // Local Development (uncomment for local testing)
    // API_BASE_URL: 'http://127.0.0.1:8000/api',
};

// Export for use in other scripts
if (typeof window !== 'undefined') {
    window.API_BASE_URL = CONFIG.API_BASE_URL;
}
