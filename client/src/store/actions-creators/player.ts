import { ITrack } from "../../types/entity-interfaces"
import { PlayerAction, PlayerActionTypes } from "../../types/player"





export const ShowFucnBar = (): PlayerAction => {
    return {type: PlayerActionTypes.SHOW_FUNCK_BAR}
}
export const HideFucnBar = (): PlayerAction => {
    return {type: PlayerActionTypes.HIDE_FUNCK_BAR}
}
export const playTrack = (): PlayerAction => {
    return {type: PlayerActionTypes.PLAY}
}
export const pauseTrack = (): PlayerAction => {
    return {type: PlayerActionTypes.PAUSE}
}
export const setDuration = (payload: number): PlayerAction => {
    return {type: PlayerActionTypes.SET_DURATION, payload}
}
export const setVolume = (payload: number): PlayerAction => {
    return {type: PlayerActionTypes.SET_VOLUME, payload}
}
export const setCurrentTime = (payload: number): PlayerAction => {
    return {type: PlayerActionTypes.SET_CURRENT_TIME, payload}
}
export const setActiveTrack = (track: ITrack): PlayerAction => {
    return {type: PlayerActionTypes.SET_ACTIVE, payload: track }
}
export const setAudio = (audio: HTMLAudioElement): PlayerAction => {
    return {type: PlayerActionTypes.SET_AUDIO, payload: audio }
}