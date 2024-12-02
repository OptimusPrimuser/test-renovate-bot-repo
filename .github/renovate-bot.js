module.exports = {
  endpoint: 'https://api.github.com/',
  token: '{{secrets.GIT_TOKEN}}}',
  platform: 'github',
  onboardingConfig: {
    extends: ['config:recommended'],
  },
  repositories: ['OptimusPrimuser/test-renovate-bot-repo'],
};
