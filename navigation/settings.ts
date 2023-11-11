import {Navigation} from 'react-native-navigation';
import Settings from '../ui/App/Settings';

Navigation.registerComponent('Settings', () => Settings);

function settings(componentId: string) {
  Navigation.push(componentId, {
    component: {
      name: 'Settings',
      options: {
        topBar: {
          title: {
            text: 'Settings',
          },
        },
      },
    },
  });
}

export default settings;
