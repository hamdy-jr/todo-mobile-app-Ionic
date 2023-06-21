import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.todo.app',
  appName: 'todo',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
