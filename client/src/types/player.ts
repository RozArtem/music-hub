import { ITrack } from "./entity-interfaces"

export interface IPlayerState {
    active: null | ITrack;
    volume: number;
    duration: number;
    currentTime: number;
    pause: boolean
    audio: null | HTMLAudioElement
    isShowFucnBar: boolean

}

export enum PlayerActionTypes {
    PLAY = "PLAY",
    PAUSE = "PAUSE",
    SET_ACTIVE = "SET_ACTIVE",
    SET_AUDIO = "SET_AUDIO",
    SET_DURATION = "SET_DURATION",
    SET_CURRENT_TIME = "SET_CURRENT_TIME",
    SET_VOLUME = "SET_VOLUME",
    SHOW_FUNCK_BAR = "SHOW_FUNCK_BAR",
    HIDE_FUNCK_BAR = "HIDE_FUNCK_BAR",
}

interface ShowAction {
    type: PlayerActionTypes.SHOW_FUNCK_BAR
}
interface HideAction {
    type: PlayerActionTypes.HIDE_FUNCK_BAR
}
interface PlayAction {
    type: PlayerActionTypes.PLAY
}
interface PauseAction {
    type: PlayerActionTypes.PAUSE
}
interface SetActiveAction {
    type: PlayerActionTypes.SET_ACTIVE,
    payload: ITrack;
}
interface SetAudio {
    type: PlayerActionTypes.SET_AUDIO,
    payload: HTMLAudioElement;
}
interface SetDurationAction {
    type: PlayerActionTypes.SET_DURATION,
    payload: number;
}
interface SetVolumeAction {
    type: PlayerActionTypes.SET_VOLUME,
    payload: number;
}
interface SetCurrentTimeAction {
    type: PlayerActionTypes.SET_CURRENT_TIME,
    payload: number;
}

export type PlayerAction =
    PlayAction |
    PauseAction |
    SetActiveAction |
    SetDurationAction |
    SetVolumeAction |
    SetCurrentTimeAction |
    SetAudio |
    ShowAction |
    HideAction
