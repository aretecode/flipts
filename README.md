- changes a glob of `.js` to the same structure in another folder (`ts`) with `.ts`
- when building, converts the whole `ts` folder into a `temp` folder, with modifiers removed (`public`, `private`, `protected`)
- then babel can build it
- problems all solved