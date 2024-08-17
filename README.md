# Q3T_Sol_jcleira
This repository is my personal fork of the original Web3-Builders-Alliance project, intended to be a bootstrap project for the 2024 Q3 Cohort sessions.

It does contains:
- [A Solana Blink nextjs project that let's you mint NFTs collections from images in AWS S3 `blinks/madrug`](./blinks/madrug/)
- My classwork and homework done during the training under the `rs` and `ts` folders
- My personal Session's backlog that you can find below this readme.

## Highlights
Under this section I keep the most relevant work done during the sessions or at home.

### Blink Madrug NTF Generator
This is a simple project that allows you to mint NFTs from images stored in an AWS S3 bucket. It uses the Solana Blink library to create the NFTs and the metadata.

You can find the project under the `blinks/madrug` folder.

The blink is deployed at:
- [https://madrug.vercel.app/api/actions/rug](https://madrug.vercel.app/api/actions/rug)
- You can test it out in the Dialect Blink explorer: [https://dial.to/devnet](https://dial.to/devnet)

This is how the blink looks like:

![Blink](https://i.imgur.com/rAjIV8V.png)

## Sessions
I will be adding notes from each session as a reference.

<details>
  <summary>Session 1 - 2024-07-31</summary>
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
</details>

<details>
  <summary>Session 2 - 2024-07-31</summary>
We had Nick Frostbutter doing a presentation (recorded from the morning session) about Blinks.

Blinks are a cool tool, with nice uses cases, they do have some limitations for security and integration reasons that might not be appealing (Ex: There is a registry you need to apply controlled by Dialect), but it's fine.

#### Homework
- [x] Create Token Metadata
</details>

<details>
  <summary>Session 3 - 2024-08-01</summary>
This session was about the Solana Program Library (SPL) and how to create NFTs.

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
</details>

<details>
  <summary>Session 4 - 2024-08-06</summary>
This session was about building the first Anchor program (a Vault proposal).

I did manage to finish the vault during the class time, the code is [here](./anchor_vault/)

- I also updated the format for the folders, so I will be now keeping a format as:
  - `week1`/`session1`

</details>

<details>
  <summary>Session 5 - 2024-08-07</summary>
This session was about building a escrow smart contract.

It did required real focus during the session, but at the end I think we got a good understanding.

I've uploaded the `escrow` to [week2/session2/escrow](./escrow/)
</details>

<details>
  <summary>Session 6 - 2024-08-08</summary>
This session was about building an automated market maker (AMM) smart contract.

It did required real focus during the session, but at the end I think we got a good understanding.

I've uploaded the `amm` to [anchor_amm](./anchor_amm/)
</details>

<details>
  <summary>Session 7 - 2024-08-13</summary>
This session was about building an NFT stacker

It did required real focus during the session, but at the end I think we got a good understanding.
</details>

<details>
  <summary>Session 8 - 2024-08-14</summary>
This session was about finishing the NFT stacker

It did required real focus during the session, but at the end I think we got a good understanding.

I've uploaded the `nft_stake` to [anchor_nft_stake](./anchor_nft_stake/)
</details>

<details>
  <summary>Session 9 - 2024-08-15</summary>
Quite interesting session about pitching each other ideas.
</details>
