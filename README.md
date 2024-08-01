# solana-starter
This repository is a fork of the original Web3-Builders-Alliance project, intended to be a bootstrap project for the 2024 Q3 Cohort sessions.

## Sessions
I will be adding notes from each session as a reference.

### Session 1 - 2024-07-31

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

### Session 3 - 2024-08-01

#### Classwork
- Complete the `spl_transfer` 
```bash
➜  ts git:(master) ✗ yarn spl_transfer       
yarn run v1.22.21
$ ts-node ./cluster1/spl_transfer.ts
Transaction signature: 5M7g7isjjEhUuUA5W1mzh3q5X2WAFAgHyrmECZUXebpZtwjR4ZwS2osqoYyWv9NBAbXZj7m7xQ78YDJP8MydQgUN
✨  Done in 2.81s.
``` 

- Complete the `sql_metadata`

```bash
➜  ts git:(master) ✗ yarn nft_metadata
yarn run v1.22.21
$ ts-node ./cluster1/nft_metadata.ts
Your image URI:  https://arweave.net/IgUpys1136O9Uf-A08Rc20_eP6_FWIAqx4TA3D2_DYI
```

- We will create rugs
[https://deanmlittle.github.io/generug/](https://deanmlittle.github.io/generug/)


- We create an initialized NFT
```bash
➜  ts git:(master) ✗ yarn nft_mint
yarn run v1.22.21
$ ts-node ./cluster1/nft_mint.ts
Succesfully Minted! Check out your TX here:
https://explorer.solana.com/tx/3taVExh9j3W3LMCWQwmQPH5dzftGZTVjSyodUSgSv8NTSin5vMjWNZob5M1oaX7oj1EcYqCcBwe4erozdnksBMG8?cluster=devnet
Mint Address:  89x1VbCpo4xBb1HXBXxqzVQf4btiNxLrW1Aw7DaZKDWY
✨  Done in 16.12s.
```

This was the final [RUG NFT address](https://explorer.solana.com/address/GfLQaygHNhsKDh6wjx6uvWXzKBatGzEAMzqgfnGPWF8K/attributes?cluster=devnet)
