# solana-starter
This repository is a fork of the original Web3-Builders-Alliance project, intended to be a bootstrap project for the 2024 Q3 Cohort sessions.

## Sessions
I will be adding notes from each session as a reference.

### Session 1 - 2024-07-30

This is the largest class ever for the afternoon session. There are harder prerequisites and half the time, making it a big group with more expectations.

Good practices:
- Ask questions in the chat, even though there is a Q&A time.
- Some questions might be addressed during office hours.
- Most Discord activity usually happens after the session itself.

Effort outside classes is necessary. Attend workshops and take advantage of every opportunity to go the extra mile.

#### Classwork
I completed the class homework during the session:

Create a mint account:
```bash
$ ts-node ./cluster1/spl_init.ts
Success! Your mint address is: GNGEwqYFimVjndDMtL8vKne2ygyEAoqHHG2w125BGzVY
✨  Done in 2.47s.
```

Create a token account:
```bash
$ ts-node ./cluster1/spl_mint.ts
Your ata is: J6QnY56smBTyGSGvvpvdBxaL3ShjLdvBbJniQ2DiyyfW
✨  Done in 2.76s.
```

Mint some tokens:
```bash
$ ts-node ./cluster1/spl_mint.ts
Your ata is: J6QnY56smBTyGSGvvpvdBxaL3ShjLdvBbJniQ2DiyyfW
Success! Your mint transaction is: 4NXbMZtR2vxm28qBZ3YtQiSScGhGhnssb1qZqRgCqAQQF6sojs2JAapLqs5dGLLPebGtxdva9rQS3rSjka4XWqhi
✨  Done in 2.47s.
```

#### Personal Homework
- [ ] Gain a full understanding of Program Derived Accounts - [link](https://solana.com/docs/core/pda#canonical-bump)
- [ ] Gain a full understanding of SPL Tokens - [link](https://spl.solana.com/token)

Next session targets:
- SPL metadata
- SPL transfer
---

### Session 2 - 2024-07-31
We had Nick Frostbutter doing a presentation (recorded from the morning session) about Blinks.

Blinks are a cool tool, with nice uses cases, they do have some limitations for security and integration reasons that might not be appealing (Ex: There is a registry you need to apply controlled by Dialect), but it's fine.

#### Homework
- [x] Create Token Metadata
