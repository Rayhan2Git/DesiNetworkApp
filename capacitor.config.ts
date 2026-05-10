import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.desinetwork.app',
  appName: 'DesiNetwork',
  webDir: 'www',
  android: {
    allowMixedContent: true,
    captureInput: true,
    webContentsDebuggingEnabled: false
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#0a0a0a',
      showSpinner: false
    },
    StatusBar: {
      style: 'dark',
      backgroundColor: '#0a0a0a'
    }
  },
  server: {
    // Allows loading external URLs inside the app
    allowNavigation: [
      'raw.githubusercontent.com',
      'rayhan2git.github.io',
      'feedscroll.rayhandox.workers.dev',
      'cdn.desitales2.com',
      'cdn.desikahani2.net',
      'cdn.xahani.com',
      'cdn.indianbfvideos.com',
      'www.desitales2.com',
      'www.desikahani2.net',
      'www.xahani.com',
      'www.indianbfvideos.com'
    ]
  }
};

export default config;
