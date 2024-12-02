module.exports = {
  endpoint: 'https://self-hosted.gitlab/api/v4/',
  token: '{{secrets.GIT_TOKEN}}}',
  platform: 'github',
  onboardingConfig: {
    extends: ['config:recommended'],
  },
  repositories: ['OptimusPrimuser/test-renovate-bot-repo'],
};
