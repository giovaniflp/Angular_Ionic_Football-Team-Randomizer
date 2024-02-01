import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.FTR',
  appName: 'Football Team Randomizer',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
