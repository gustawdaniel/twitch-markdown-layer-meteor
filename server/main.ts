import { Meteor } from 'meteor/meteor'
import {TextCollection} from "../imports/api/text";
import {Log, LogCollection} from "../imports/api/log";


Meteor.startup(async () => {
  Meteor.publish("text", function () {
    return TextCollection.find();
  });

  if ((await TextCollection.find().countAsync()) === 0) {
    await TextCollection.insertAsync({
      content: "Hello World!",
    });
  }

  Meteor.methods({
    saveText: async (content: string) => {
      console.log("content", content)

      const text = await TextCollection.findOneAsync();
      console.log(text);
      if (!text) {
        throw new Error('No text');
      }

      return TextCollection.updateAsync(String(text._id), {$set: {content}})
    },
    saveLog: async (log: Omit<Log, '_id' | 'createdAt'>) => {
      console.log("log", log)
      return LogCollection.insertAsync({
        ...log,
        createdAt: new Date(),
      })
    }
  });
})
