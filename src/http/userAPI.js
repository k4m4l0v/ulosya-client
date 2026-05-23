import {$host} from './index';

export const getItems = async () => {
    const {data} = await $host.get('api/item');
    return data;
}
