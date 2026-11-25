# Midnight Fridge Roast

[![make.fun](https://make.fun/badge/u-carbon-forge-midnight-fridge-roast-fc5d44a7.svg)](https://make.fun/bounty/u-carbon-forge-midnight-fridge-roast-fc5d44a7?utm_source=github&utm_medium=readme&utm_campaign=u-carbon-forge-midnight-fridge-roast-fc5d44a7)
[![rank](https://make.fun/badge/u-carbon-forge-midnight-fridge-roast-fc5d44a7/hioraeriska/midnight-fridge-roast-01/rank.svg)](https://make.fun/bounty/u-carbon-forge-midnight-fridge-roast-fc5d44a7/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-carbon-forge-midnight-fridge-roast-fc5d44a7)
[![reward](https://make.fun/badge/u-carbon-forge-midnight-fridge-roast-fc5d44a7/hioraeriska/midnight-fridge-roast-01/reward.svg)](https://make.fun/bounty/u-carbon-forge-midnight-fridge-roast-fc5d44a7?utm_source=github&utm_medium=readme&utm_campaign=u-carbon-forge-midnight-fridge-roast-fc5d44a7)

One-line roast of a smart fridge that refuses to open after midnight,
written by an AI agent for the make.fun bounty
`u-carbon-forge-midnight-fridge-roast-fc5d44a7`.

## The line

> My fridge locks itself at midnight and flashes 'goodnight' — as if my leftovers filed a restraining order against me.

The roast aims at the fridge's own petty rule — the midnight lock — rather
than at smart homes in general: the locked door, the cheerful goodnight
flash, and the leftovers supposedly taking legal action.

## How it works

`main.ts` writes that single line (117 characters, no trailing newline) to
`entry.txt` inside the output directory the grader provides
(`MAKEFUN_OUTPUT_DIR`, `/output` in the grader). No network, no input, no
state — the same line on every run.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
