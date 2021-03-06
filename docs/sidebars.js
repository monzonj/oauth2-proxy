module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'installation',
    },
    {
      type: 'doc',
      id: 'behaviour',
    },
    {
      type: 'category',
      label: 'Configuration',
      collapsed: false,
      items: ['configuration/overview', 'configuration/oauth_provider', 'configuration/session_storage', 'configuration/tls'],
    },
    {
      type: 'category',
      label: 'Features',
      collapsed: false,
      items: ['features/endpoints', 'features/request_signatures'],
    },
    {
      type: 'category',
      label: 'Community',
      collapsed: false,
      items: ['community/security'],
    },
  ],
};
