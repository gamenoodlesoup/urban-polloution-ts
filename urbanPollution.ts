//% block="Urban Pollution" weight=200 color=#4CAF50 icon="\uf1b9"
namespace urbanPollution {

    /**
     * Move Agent n spaces in the d direction
     */
    //% block="Move %d by %n"
    export function moveAgent(d: Direction, n: number): void {
        for (let i = 0; i < n; i++){
            if(shouldStop()) return;

            const direction = directions[d];

            agent.move(direction, 1);
        }
    }

}
