import {$host} from './index';

export const getItems = async () => {
    console.log('getItems called'); // Отладочный лог
    console.trace(); // Показывает цепочку вызовов

    const {data} = await $host.get('api/item');
    return data;
}
