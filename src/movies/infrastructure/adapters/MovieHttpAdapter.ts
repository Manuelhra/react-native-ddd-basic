import {AxiosHttpAdapter} from '../../../shared/infrastructure/adapters/AxiosHttpAdapter';

export class MovieHttpAdapter extends AxiosHttpAdapter {
  constructor() {
    super({options: {baseurl: 'https://ghibliapi.vercel.app'}});
  }
}
