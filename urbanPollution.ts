//% block="Urban Pollution" weight=200 color=#FF0000 icon="\uf1b9"
namespace urbanPollution {
  /**
   * Move Agent n spaces in the d direction
   */
  //% block="Move %d by %n"
  export function moveAgent(d: SixDirection, n: number): void {
    agent.move(d, n);
  }

  /**
   * Turn Agent in the t direction
   */
  //% block="Turn %t"
  export function turnAgent(t: TurnDirection): void {
    agent.turn(t);
  }
}
