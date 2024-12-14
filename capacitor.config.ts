import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.tu.app',
  appName: 'proyecto',
  webDir: 'www', // Debe coincidir con el directorio generado por Angular
  bundledWebRuntime: false,
};
export default config;

