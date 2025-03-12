import { Mongo } from 'meteor/mongo';

export interface Text {
    _id?: string;
    content: string;
}

export const TextCollection = new Mongo.Collection<Text>('text');
