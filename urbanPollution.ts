// enums
enum Direction {
  //% block="forward"
  FORWARD,
  //% block="back"
  BACK,
  //% block="left"
  LEFT,
  //% block="right"
  RIGHT,
  //% block="up"
  UP,
  //% block="down"
  DOWN,
}

enum TurnDirection {
  //% block="left"
  LEFT_TURN,
  //% block="right"
  RIGHT_TURN,
}
// global variables
const directions = [FORWARD, BACK, LEFT, RIGHT, UP, DOWN];

const turns = [LEFT_TURN, RIGHT_TURN];

//% block="Urban Pollution" weight=200 color=#FF0000 icon="\uf1b9"
namespace urbanPollution {
  /**
   * Move Agent n spaces in the d direction
   */
  //% block="Move %d by %n"
  export function moveAgent(d: Direction, n: number): void {
    const direction = directions[d];
    agent.move(direction[d], n);
  }

  /**
   * Turn Agent in the t direction
   */
  //% block="Turn %t"
  export function turnAgent(t: TurnDirection): void {
    const turn = turns[t];
    agent.turn(turn[t]);
  }
}
