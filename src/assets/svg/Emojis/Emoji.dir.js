import React, { Component } from 'react';
import Emoji1 from './Emoji_1'
import Emoji2 from './Emoji_2'
import Emoji3 from './Emoji_3'
import Emoji4 from './Emoji_4'
import Emoji5 from './Emoji_5'
import Emoji6 from './Emoji_6'
import Emoji7 from './Emoji_7'
import Emoji8 from './Emoji_8'
import Emoji9 from './Emoji_9'
import Emoji10 from './Emoji_10'
import Emoji11 from './Emoji_11'
import Emoji12 from './Emoji_12'
import Emoji13 from './Emoji_13'
import Emoji14 from './Emoji_14'
import Emoji15 from './Emoji_15'
import Emoji16 from './Emoji_16'
import Emoji17 from './Emoji_17'
import Emoji18 from './Emoji_18'
import Emoji19 from './Emoji_19'
import Emoji20 from './Emoji_20'


export const Emoji = {
    EMOJI_1: 'Emoji_1',
    EMOJI_2: 'Emoji_2',
    EMOJI_3: 'Emoji_3',
    EMOJI_4: 'Emoji_4',
    EMOJI_5: 'Emoji_5',
    EMOJI_6: 'Emoji_6',
    EMOJI_7: 'Emoji_7',
    EMOJI_8: 'Emoji_8',
    EMOJI_9: 'Emoji_9',
    EMOJI_10: 'Emoji_10',
    EMOJI_11: 'Emoji_11',
    EMOJI_12: 'Emoji_12',
    EMOJI_13: 'Emoji_13',
    EMOJI_14: 'Emoji_14',
    EMOJI_15: 'Emoji_15',
    EMOJI_16: 'Emoji_16',
    EMOJI_17: 'Emoji_17',
    EMOJI_18: 'Emoji_18',
    EMOJI_19: 'Emoji_19',
    EMOJI_20: 'Emoji_20',
}

export function AppEmoji({ name, size = 50 }) {
    if (name === Emoji.EMOJI_1)
        return (<Emoji1 width={size} height={size} />)
    else if (name === Emoji.EMOJI_2)
        return (<Emoji2 width={size} height={size} />)
    else if (name === Emoji.EMOJI_3)
        return (<Emoji3 width={size} height={size} />)
    else if (name === Emoji.EMOJI_4)
        return (<Emoji4 width={size} height={size} />)
    else if (name === Emoji.EMOJI_5)
        return (<Emoji5 width={size} height={size} />)
    else if (name === Emoji.EMOJI_6)
        return (<Emoji6 width={size} height={size} />)
    else if (name === Emoji.EMOJI_7)
        return (<Emoji7 width={size} height={size} />)
    else if (name === Emoji.EMOJI_8)
        return (<Emoji8 width={size} height={size} />)
    else if (name === Emoji.EMOJI_9)
        return (<Emoji9 width={size} height={size} />)
    else if (name === Emoji.EMOJI_10)
        return (<Emoji10 width={size} height={size} />)
    else if (name === Emoji.EMOJI_11)
        return (<Emoji11 width={size} height={size} />)
    else if (name === Emoji.EMOJI_12)
        return (<Emoji12 width={size} height={size} />)
    else if (name === Emoji.EMOJI_13)
        return (<Emoji13 width={size} height={size} />)
    else if (name === Emoji.EMOJI_14)
        return (<Emoji14 width={size} height={size} />)
    else if (name === Emoji.EMOJI_15)
        return (<Emoji15 width={size} height={size} />)
    else if (name === Emoji.EMOJI_16)
        return (<Emoji16 width={size} height={size} />)
    else if (name === Emoji.EMOJI_17)
        return (<Emoji17 width={size} height={size} />)
    else if (name === Emoji.EMOJI_18)
        return (<Emoji18 width={size} height={size} />)
    else if (name === Emoji.EMOJI_19)
        return (<Emoji19 width={size} height={size} />)
    else
        return (<Emoji20 width={size} height={size} />)

}