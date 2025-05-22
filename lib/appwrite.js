import { Client, Account, Avatars } from 'react-native-appwrite';

export const client = new Client()
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('682f563d002ec5d7b91b')
    .setPlatform('com.mbro.ab');

export const account = new Account(client);
export const avatars = new Avatars(client);