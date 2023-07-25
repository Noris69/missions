import {
    AnchorProvider, BN, Program, utils, Wallet, web3
} from '@project-serum/anchor';
import { createAssociatedTokenAccountInstruction, TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { WalletContextState } from '@solana/wallet-adapter-react';
import { init_tracker } from "./initialize";


const SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID: web3.PublicKey = new web3.PublicKey(
  'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL',
);

const mint: web3.PublicKey = new web3.PublicKey(
  'PNTNyw5Yqb2Qf5jMV7jhfDMBaTDpxBKiyYS8uVzCCPH',
);
const idl = require("../../data/pixsells.json")

export async function points(
    wallet: WalletContextState,
    anchorWallet: any,
    tweet_id: string,
    connection: web3.Connection,
    instruction: number
) {


    const provider = new AnchorProvider(
        connection, anchorWallet, {"preflightCommitment": "processed"},
        );

    const PROGRAM_ID = new web3.PublicKey(idl.metadata.address)
    const program = new Program(idl, idl.metadata.address, provider);
    const twitter_id_resp = await fetch("/api/twitter/get_session");
    const twitter_id = (await twitter_id_resp.json()).twitter_id;

        const [counter, bump] = await web3.PublicKey.findProgramAddress(
            [
                new BN(Number(twitter_id)).toArrayLike(Buffer, 'le', 8),
                new BN(Number(tweet_id)).toArrayLike(Buffer, 'le', 8),
            ],
            PROGRAM_ID
        );
        
        const [escrow] = await web3.PublicKey.findProgramAddress(
            [
                Buffer.from("PIXSELLS"),
            ],
            PROGRAM_ID
        );

        const [escrow_ata] = await web3.PublicKey.findProgramAddress(
            [
                escrow.toBuffer(),
                TOKEN_PROGRAM_ID.toBuffer(),
                mint.toBuffer(),
            ],
            SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID
        );
        

        const [user_ata] = await web3.PublicKey.findProgramAddress(
            [
                anchorWallet.publicKey.toBuffer(),
                TOKEN_PROGRAM_ID.toBuffer(),
                mint.toBuffer(),
            ],
            SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID
        );

        const tx = new web3.Transaction();

        try {
            const info = await connection.getBalance(user_ata);
            // create associted token account
            if (info == 0) {
                const ataTransaction = new web3.Transaction().add(
                    createAssociatedTokenAccountInstruction(
                        anchorWallet.publicKey,
                        user_ata,
                        anchorWallet.publicKey,
                        mint!
                        )
                        );
                        tx.add(ataTransaction)
                        // const signature = await wallet.sendTransaction(ataTransaction, connection)
                        // await connection.confirmTransaction(signature, "processed");
            }
        } catch(e) {
            console.log(e)
        }

        try {
            const balance = await connection.getBalance(counter);
            // create associted token account
            if (balance == 0) {
                const transaction = await init_tracker(anchorWallet, tweet_id, connection);
                tx.add(transaction);
            }
        } catch(e) {
            console.log(e)
        }

        const tx1 = await program.methods.point(
            new BN(Number(instruction)),
            new BN(Number(twitter_id)),
            new BN(Number(tweet_id))
            ).accounts({
            tracker: counter,
            user: anchorWallet.publicKey,
            escrow: escrow,
            escrowAta: escrow_ata,
            userAta: user_ata,
            mint: mint,
            tokenProgram: TOKEN_PROGRAM_ID,
            systemProgram: web3.SystemProgram.programId
        }).transaction()

        tx.add(tx1);

        let blockhash = (await connection.getLatestBlockhash('finalized')).blockhash;
        tx.recentBlockhash = blockhash;
        tx.feePayer = new web3.PublicKey(anchorWallet.publicKey);
    
        // .rpc({
        //     commitment: "confirmed",
        // })
        return tx;
    }