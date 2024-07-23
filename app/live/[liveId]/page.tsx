'use client';
import { createUUID } from '@/utils/uuid';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import styles from './live.module.css';
import { cn } from '@/lib/utils';

const LiveDetail = ({ params }: any) => {
  const myMeeting = async(element: any) => {
    const appID = Number(process.env.NEXT_PUBLIC_APP_ID);
    const serverSecret = process.env.NEXT_PUBLIC_SERVER_SECRET || '';
    const roomId = params.liveId;
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      createUUID(),
      'User Name',
    );
    const zp =  ZegoUIKitPrebuilt.create(kitToken);
    if (zp) {
      zp.joinRoom({
        container: element,
        sharedLinks: [{
          name: 'Personal link',
          url: window.location.protocol + '//' + window.location.host + window.location.pathname + '?liveID=' + roomId,
        }],
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall, // GroupCall
        }
      });
    }
  }
  return (
    <main className="flex h-[100vh] flex-col items-center justify-center p-24 pb-4">
     <div ref={myMeeting as any} className={cn(
      styles.liveConfirmation,
      'w-[100vw] h-full'
     )}></div>
    </main>
  );
};
export default LiveDetail;