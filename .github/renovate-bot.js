module.exports = {
  endpoint: 'https://self-hosted.gitlab/api/v4/',
  platform: 'github',
  onboardingConfig: {
    extends: ['config:recommended'],
  },
  repositories: ['OptimusPrimuser/test-renovate-bot-repo'],
};
