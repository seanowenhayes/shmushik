import {Navigation} from 'react-native-navigation';
import App from './ui/App';

Navigation.registerComponent('sh.mushik.WelcomeScreen', () => App);


Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'sh.mushik.WelcomeScreen',
            },
          },
        ],
      },
    },
  });
});
