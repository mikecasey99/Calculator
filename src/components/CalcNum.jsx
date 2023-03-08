import React from 'react'

export default function CalcNum(props){
    let btn = '';
    switch(props.keys){
        case 'C':
            btn = 'clear';
            break;
        case '±':
            btn = 'inverse';
            break;
        case '%':
            btn = 'modulo';
            break;
        case '÷':
            btn = 'divide';
            break;
        case 7:
            btn = 'seven';
            break;
        case 8:
            btn = 'eight';
            break;
        case 9:
            btn = 'nine';
            break;
        case 'X':
            btn = 'multiply';
            break;
        case 4:
            btn = 'four';
            break;
        case 5:
            btn = 'five';
            break;
        case 6:
            btn = 'six';
            break;
        case '-':
            btn = 'subtract';
            break;
        case 1:
            btn = 'one';
            break;
        case 2:
            btn = 'two';
            break;
        case 3:
            btn = 'three';
            break;
        case '+':
            btn = 'add';
            break;
        case 0:
            btn = 'zero';
            break;
        case '.':
            btn = 'dot';
            break;
        case '=':
            btn = 'equals';
            break;
    }
    return(
        <div className='number' id={btn}>
            <button>{props.number}</button>
        </div>
    )
}
