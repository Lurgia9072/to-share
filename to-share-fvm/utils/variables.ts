export enum IDropReason {
  Left = "left",
  Timeout = "timeout",
  Kicked = "kicked",
  Unhandled = "unhandled",
  NotJoined = "not-joined",
  Denied = "denied",
  ClosedByHost = "closedByHost"
}

export type MeState = {
  peerId: string;
  displayName: string;
  avatarUrl: string;
  isSharePaused: boolean;
  isCamPaused: boolean;
  isMicPaused: boolean;
  reaction: string;
}

export type IRoomState = {
  roomId: string;
  joined: boolean;
  droppedState: {
    type: IDropReason; // left, timeout, kicked, unhandled, not-joined, denied, closedByHost
    isDropped: boolean;
  };
  createdAt: number;
  isRoomLocked: boolean;
};
export type IPeersState = {
  peers: {
      [peerId: string]: IPeerStoreState
  }
}

export type IPeerStoreState = {
  peerId: string;
  displayName: string;
  avatarUrl: string;
  isMicPaused: boolean;
  isCamPaused: boolean;
  isSharePaused: boolean;
  isHandRaised: boolean;
}

