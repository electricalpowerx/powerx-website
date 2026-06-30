# ⚡ Loop Quest

A tiny, self-contained browser game for **understanding loops and workflows**.
You program a robot to reach a goal by writing a *workflow* (a sequence of
commands) and wrapping parts of it in *loops*. Each level is designed so that
the obvious brute-force solution runs out of budget — pushing you to discover
why a single loop can replace dozens of steps.

## Run it

It's one HTML file with **no dependencies** — just open it:

```
open game/index.html        # or double-click the file
```

It's also picked up automatically by the site's Vite build (`npm run dev`)
at `/game/`.

## What it teaches

| Concept | Where you meet it | The "aha" |
| --- | --- | --- |
| **Workflow / sequence** | Level 1 | Commands run top-to-bottom, in order. |
| **Repeat loop** (fixed count) | Level 2 | 7 steps, budget of 5 → `repeat 7 { forward }` does more with less. |
| **Loop + action** | Level 3 | Combine `repeat` with a turn to navigate a corner. |
| **While loop** (condition) | Level 4 | `while cells remain { … }` repeats until a condition changes. |
| **While loop** (unknown length) | Level 5 | `while path ahead clear { forward }` handles an unknown distance. |

## 🛡️ The Loop Guard (max 10 repeats)

Every loop automatically **pauses and asks for confirmation after 10
repeats** — the `MAX_LOOP_BEFORE_ASK` constant at the top of the script.
This is the safety net against runaway / infinite loops: a `while` loop that
never becomes false would otherwise spin forever, so the game stops it, shows
you how many times it ran, and lets you choose **Keep looping** (allows another
10) or **Stop this loop**. Level 5's corridor is longer than 10 cells on
purpose, so you see the guard fire in normal play.

To change the limit, edit one line in `game/index.html`:

```js
const MAX_LOOP_BEFORE_ASK = 10;
```

## Controls

- **Commands:** Forward, Turn Left, Turn Right, Collect ⚡
- **Loops:** `Repeat N`, `While <condition>`, `End Loop`
- **Run** animates the whole program; **Step** advances one command at a time
  so you can watch the loop counter and instruction pointer move.
- **Reset / Undo / Clear** and a **Speed** slider.

Solve all five levels to "graduate" from sequences to nested, conditional,
guarded loops.
