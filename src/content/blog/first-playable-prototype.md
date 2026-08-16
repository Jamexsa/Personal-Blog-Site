---
title: 'Devlog #1 — First playable prototype'
description: 'Getting a character moving on screen was supposed to take a weekend. It took two weeks, and it was worth it.'
pubDate: 2026-03-14
draft: false
---

The prototype is alive. After two weeks of fighting input handling, there is
finally a little capsule running and jumping around a grey box world. It is
ugly, it is temporary, and it is the most motivating thing I've built in years.

## What works

Movement is a fairly standard setup: acceleration-based horizontal movement,
coyote time, and a jump buffer. I resisted tuning those for too long — the
lesson from every jam game I've ever ruined is that feel comes first, content
comes second. So this time, `coyoteTime` got a dedicated constant and a comment
saying **do not touch until art exists**.

- Run, jump, land on platforms
- A single test level made of rectangles
- Debug overlay with frame times

## What doesn't

Everything else. There is no game yet, just locomotion. But watching the
capsule clear a gap *exactly* the way I imagined it already tells me the core
is worth building on.

> Ship the ugly version. The polished version is a lie you tell yourself to
> avoid finishing the ugly version.

Next up: a placeholder enemy to bump into.
