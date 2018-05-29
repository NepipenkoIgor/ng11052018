import {Observable, Observer, of} from 'rxjs';
import {delay} from 'rxjs/operators';

export interface IUser {
  profileName: string;
  firstName: string;
  surname: string;
  photo?: string;
  country: string;
}


const data: IUser[] = [{
  'profileName': 'sergey-ivchenko',
  'firstName': 'Сергей',
  'surname': 'Ивченко',
  'photo': 'https://i.imgur.com/jWcXbhM.jpg',
  'country': 'ua'
}, {
  'profileName': 'timo-moss',
  'firstName': 'Timo',
  'surname': 'Moss',
  'photo': 'http://i.imgur.com/wyatlrw.jpg',
  'country': 'il'
}, {
  'profileName': 'alesya-kononovich8',
  'firstName': 'Алеся',
  'surname': 'Кононович',
  'photo': 'http://i.imgur.com/XAa6ykN.jpg',
  'country': 'by'
}, {
  'profileName': 'inkz',
  'firstName': 'Василий',
  'surname': 'Ермилов',
  'photo': 'https://i.imgur.com/CrqJsh9.jpg',
  'country': 'ru'
}, {
  'profileName': 'olek-der',
  'firstName': 'Oleksiy',
  'surname': 'Derkach',
  'photo': 'https://i.imgur.com/ATcSTgx.jpg',
  'country': 'ua'
}, {
  'profileName': 'vorobiev-vladimir',
  'firstName': 'Владимир',
  'surname': 'Ворробьев',
  'photo': 'https://i.imgur.com/9teqnAM.jpg',
  'country': 'ru'
}, {
  'profileName': 'greenda',
  'firstName': 'Александра',
  'surname': 'Гонтарева',
  'photo': 'https://i.imgur.com/PbGOwHW.jpg',
  'country': 'ru'
}, {
  'profileName': 'valeriy-pavlikov',
  'firstName': 'Валерий',
  'surname': 'Павликов',
  'photo': 'https://i.imgur.com/2ZrCBvw.jpg',
  'country': 'ru'
}, {'profileName': 'daredevilok', 'firstName': 'Илья', 'surname': 'Сычев', 'country': 'ru'}, {
  'profileName': 'nalien',
  'firstName': 'Наталия',
  'surname': 'Никифорова',
  'country': 'ru'
}, {
  'profileName': 'gennady-remzov',
  'firstName': 'Gennadiy',
  'surname': 'Remizov',
  'photo': 'https://i.imgur.com/3PBm3z8.png',
  'country': 'ua'
}, {'profileName': 'alekseikorobov', 'firstName': 'Алексей', 'surname': 'Коробов', 'country': 'ru'}, {
  'profileName': 'nik-pol',
  'firstName': 'Никита',
  'surname': 'Полевой',
  'country': 'ru'
}];

export const users$: Observable<IUser[]> = of(data)
  .pipe(
    delay(3000)
  );
