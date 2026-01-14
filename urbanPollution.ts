// enums
enum Direction {
    //% block="forward"
    Forward,
    //% block="back"
    Back,
    //% block="left"
    Left,
    //% block="right"
    Right,
    //% block="up"
    Up,
    //% block="down"
    Down
}
// global variables
const directions = [
    FORWARD,
    BACK,
    LEFT,
    RIGHT,
    UP,
    DOWN
];

const turns = [
    LEFT_TURN,
    RIGHT_TURN
]


//% block="Urban Pollution" weight=200 color=#4CAF50 icon="\uf1b9"
namespace urbanPollution {

    /**
     * Move Agent n spaces in the d direction
     */
    //% block="Move %d by %n"
    export function moveAgent(d: Direction, n: number): void {
            const direction = directions[d];
            agent.move(direction, 1);
    }

    /**
     * Turn Agent in the t direction
     */
    //% block="Turn %t"
    export function turnAgent(t: TurnDirection): void {
        const turn = turns[t];
        agent.turn(turn);
    }  

}
