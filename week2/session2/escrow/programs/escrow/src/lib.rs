use anchor_lang::prelude::*;
mod state;
use state::*;

mod instructions;
use instructions::*;


declare_id!("9E7rcwCjqSRDWRJcSU5sursP4aKwBc9q2yG6zDLxjLN2");

#[program]
pub mod escrow {
    use super::*;

    pub fn make(ctx: Context<Make>, seed: u64, amount: u64, receive: u64) -> Result<()> {
        ctx.accounts.init_escrow(seed, receive, ctx.bumps.escrow)?;
        ctx.accounts.deposit(amount)
    }

    pub fn take(ctx: Context<Take>) -> Result<()> {
        ctx.accounts.release()?;
        ctx.accounts.close()
    }

    pub fn refund(ctx: Context<Refund>) -> Result<()> {
        ctx.accounts.refund()?;
        ctx.accounts.close()
    }
}