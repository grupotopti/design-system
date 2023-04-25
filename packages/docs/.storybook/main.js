/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  addons: [
    "@storybook/addon-links", 
    "@storybook/addon-essentials",
    "storybook-dark-mode", 
    "@storybook/addon-interactions", 
    "@storybook/addon-a11y"
  ],
  stories: [
    "../src/pages/**/*.stories.mdx", 
    "../src/stories/**/*.stories.tsx"
],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  docs: {
    autodocs: "tag"
  },
  core: {},
  features: {
    storyStoreV7: false,
    legacyMdx1: true, // 👈 Enables MDX v1 support
  },
  viteFinal: (config, {
    configType
  }) => {
    if (configType === 'PRODUCTION') {
      config.base = '/grupotop-design-system/';
    }
    return config;
  }
};
export default config;