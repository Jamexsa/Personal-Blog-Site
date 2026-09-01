---
title: 'Devlog #2 — Combat feel and game juice'
description: 'Screen shake, hitstop, and knockback: three cheap tricks that made the placeholder enemy satisfying to fight.'
pubDate: 2026-05-02
draft: false
lang: 'EN'
---

The placeholder enemy from last devlog got a health bar, a hurt state, and an
attitude problem. More importantly, hitting it now *feels* like something.
None of the changes were mechanical — the underlying combat logic is still
"reduce number, delete when zero" — but the game reads completely differently.

## The three tricks

1. **Hitstop.** Freezing both actors for ~60ms on impact does most of the
   work. It's a single `hitstop` timer in the update loop.
2. **Screen shake.** A trauma-based shake (shake amount = trauma², decays
   over time) so big hits feel heavier than small ones.
3. **Knockback.** The enemy's placeholder rectangle now lunges backwards
   when struck, which sells the connection between input and outcome.

## What I learned

Juice is not decoration. Before these changes the combat was functionally
identical and emotionally dead. The formula seems to be: for every game
mechanic, add one piece of feedback that confirms the mechanic happened.
Confirm it with motion first, sound second, particles last.

The `shake` implementation ended up as a tiny reusable component I can attach
to any future event — level transitions, heavy landings, boss phases.
