# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A personal portfolio website styled as an interactive terminal interface. Users type commands to navigate and discover content about the site owner (ridze), a music producer. Built with React + TypeScript + Vite.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## Architecture

### Directory Structure
```
src/
├── components/     # React components
├── hooks/          # Custom React hooks
├── data/           # Static data (commands, config)
└── utils/          # Utility functions
```

### Core Components
- `Terminal.tsx` - Main terminal container, renders output and command line
- `CommandLine.tsx` - Input line with hidden textarea and visible cursor
- `OutputLine.tsx` - Single output line with typing animation (uses dangerouslySetInnerHTML)
- `Cursor.tsx` - Blinking cursor block

### Hooks
- `useTerminal.ts` - Terminal state management (output, history, command execution)
  - Contains `preserveSpaces()` function that converts consecutive spaces to `&nbsp;&nbsp;` for ASCII art
- `useTitleGlitch.ts` - Title bar effects (random title cycling, corruption, favicon switching)
- `useGlitchEffects.ts` - 12 visual glitch effects that run on intervals

### Data Files
- `commands.ts` - Command content arrays (help, banner, social links, etc.)
- `config.ts` - URLs, password, effect timing configurations

### Banner ASCII Art Structure
The banner in `commands.ts` combines:
- **Left side**: Braille character face art (40 characters wide)
- **Right side**: Block letter text "HELLO, I AM" (lines 16-21) and "RIDZE :(" (lines 24-29)
- Block text uses Unicode box-drawing characters: `█`, `╗`, `╔`, `╝`, `╚`, `║`, `═`
- The `:( ` emoticon: `:` is two dots (lines 25-26 and 27-28), `(` curves left then right

When editing banner ASCII art:
- Keep 3 spaces between face art and block text
- Ensure all block text lines start at the same column for horizontal alignment
- The face art and block text must stay vertically aligned across all lines

### How Commands Work
1. User types in hidden textarea in CommandLine
2. Input is mirrored to visible span
3. On Enter, `useTerminal.handleSubmit()` adds command to output and calls `executeCommand()`
4. `executeCommand()` switch statement matches command and queues output lines with delays

### Available Commands
`help`, `whoisridze`, `discography`, `social`, `contactme`, `history`, `banner`, `clear`, `secret` (password-protected), and social shortcuts (`youtube`, `instagram`, `spotify`, etc.)

### Easter Eggs
- `secret` command prompts for password (stored in `config.ts`)
- `sudo` command triggers glitch sequence with hidden Telegram link
- Console contains cryptic debug messages with password hint
- `useGlitchEffects` periodically corrupts terminal text with 12 different effects

### Styling Notes
- Main color: `#d72323` (red)
- Background: `#000000f6` (near-black)
- Text color classes: `.text-index`, `.text-color2`, `.text-command`, `.text-error`
- Animations defined in `index.css`: cursor blink, typing, glitch, flicker effects

## Deployment

Deployed on Vercel. Push to master triggers automatic deployment.
