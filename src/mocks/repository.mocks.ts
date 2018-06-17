import { Repository } from '../models/repository';
import { USER_LIST } from './user.mocks';

const repositoryList: Repository[] = [
  {
    name: 'Ionic 3 Github info',
    description:
      'A sample app to show github information within ionic 3 application',
    owner: USER_LIST[0]
  },
  {
    name: 'Ionic 3 Camera',
    description:
      'A sample app to show camera features within ionic 3 application',
    owner: USER_LIST[0]
  },
  {
    name: 'Ionic 3 Flashlight',
    description:
      'A sample app to show flashlight feature within ionic 3 application',
    owner: USER_LIST[1]
  },
  {
    name: 'Electron app',
    description:
      'A sample desktop app to filter image files within electron application',
    owner: USER_LIST[1]
  }
];

export const REPOSITORY_LIST = repositoryList;
