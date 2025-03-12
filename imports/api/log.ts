import { Mongo } from 'meteor/mongo';

export interface Log {
    _id?: string;
    backendVersion: string //"1.38.0-rc.2",
    bufferSize: number//6.270560999999999,
    codecs:  string //"avc1.640028,mp4a.40.2",
    displayResolution:  string //"800x450",
    fps: number//32,
    hlsLatencyBroadcaster:number// 6.407,
    latencyMode:  string //"Low Latency",
    playbackRate: number//2491,
    skippedFrames: number// 0,
    videoResolution: string //"1728x1080",
    createdAt: Date // 1643080707,
}

export const LogCollection = new Mongo.Collection<Log>('logs');
