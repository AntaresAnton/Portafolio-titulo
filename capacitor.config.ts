import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'recetas.del.mundo.base',
  appName: 'Recetas del Mundo',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
