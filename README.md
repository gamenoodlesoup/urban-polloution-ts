# urban-polloution-ts
Minecraft Education MakeCode Extension

## Overview
This is a custom MakeCode extension for Minecraft Education Edition that provides simple agent movement controls.

## Installation

### Using MakeCode Tutorial Tool
1. Go to https://makecode.com/tutorial-tool
2. Select **Minecraft Education** as the target
3. Paste the GitHub repository URL to import this extension
4. Test and preview your extension blocks

### In MakeCode Editor
1. Open MakeCode for Minecraft Education Edition
2. Create a new project or open an existing one
3. Click on **Extensions** in the toolbox
4. Paste the GitHub repository URL to import this extension

## Available Blocks

### Movement Blocks
| Block | Description |
|-------|-------------|
| `Move forward by [n]` | Moves the agent forward by n steps |
| `Move back by [n]` | Moves the agent backward by n steps |
| `Move left by [n]` | Moves the agent left by n steps |
| `Move right by [n]` | Moves the agent right by n steps |
| `Move up by [n]` | Moves the agent up by n steps |
| `Move down by [n]` | Moves the agent down by n steps |

### Turn Blocks
| Block | Description |
|-------|-------------|
| `Turn left` | Turns the agent 90° to the left |
| `Turn right` | Turns the agent 90° to the right |

## TypeScript Usage

```typescript
// Move the agent forward 5 steps
urbanPollution.moveAgent(Direction.Forward, 5)

// Move the agent back 3 steps
urbanPollution.moveAgent(Direction.Back, 3)

// Move the agent left 2 steps
urbanPollution.moveAgent(Direction.Left, 2)

// Move the agent right 4 steps
urbanPollution.moveAgent(Direction.Right, 4)

// Move the agent up 1 step
urbanPollution.moveAgent(Direction.Up, 1)

// Move the agent down 2 steps
urbanPollution.moveAgent(Direction.Down, 2)

// Turn the agent left
urbanPollution.turnAgent(TurnDirection.Left)

// Turn the agent right
urbanPollution.turnAgent(TurnDirection.Right)
```

## License
MIT 
