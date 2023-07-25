import {
    AnchorProvider, BN, Program, utils, Wallet, web3
} from '@project-serum/anchor';
import { AnchorWallet, WalletContextState } from "@solana/wallet-adapter-react";
const idl = require("../../../data/pixsells.json");


export async function get_tracker(
    anchorWallet: AnchorWallet,
    connection: web3.Connection,
    tweet_id: string
    ) {


        try {
            const twitter_id_resp = await fetch("/api/twitter/get_session");
            const twitter_id = (await twitter_id_resp.json()).twitter_id;
            const PROGRAM_ID = new web3.PublicKey(idl.metadata.address);
        
            const [counter] = await web3.PublicKey.findProgramAddress(
                [
                    new BN(Number(twitter_id)).toArrayLike(Buffer, 'le', 8),
                    new BN(Number(tweet_id)).toArrayLike(Buffer, 'le', 8),
                ],
                PROGRAM_ID
            );


        const provider = new AnchorProvider(
            connection, anchorWallet, {"preflightCommitment": "processed"},
            );
            const program = new Program(idl, idl.metadata.address, provider);
            const account = await program.account.pointTracker.fetch(counter);
            return account;
        } catch(e) {
            console.log(e);
            return null
        }

}



