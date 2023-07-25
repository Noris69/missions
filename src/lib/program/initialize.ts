import {
    AnchorProvider, BN, Program, utils, Wallet, web3
} from '@project-serum/anchor';

const idl = require("../../data/pixsells.json")

export async function init_tracker(
    anchorWallet: Wallet,
    tweet_id: string,
    connection: web3.Connection
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

        const tx = await program.methods.initCounter(new BN(Number(tweet_id))).accounts({
            counter: counter,
            authority: anchorWallet.publicKey,
            systemProgram: web3.SystemProgram.programId
        }).transaction()
        // .rpc({
        //     commitment: "confirmed",
        // })
    return tx;
    }