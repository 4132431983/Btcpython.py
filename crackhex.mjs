import fs from 'fs';
import { exec } from 'child_process';

// Function to extract hex private key from wallet.dat
async function extractPrivateKey(walletPath) {
    return new Promise((resolve, reject) => {
        // Command to extract private key using Bitcoin Core's dumpprivkey
        const command = bitcoin-cli -datadir=${walletPath} dumpprivkey <address>;
        
        exec(command, (error, stdout, stderr) => {
            if (error) {
                reject(`Error: ${stderr}`);
                return;
            }
            resolve(stdout.trim());
        });
    });
}

// Main function to run the extraction
async function main() {
    const walletPath = '/home/userland/Btcpython.py/Btcpython.py/Wallet.dat; // Specify the path to your wallet.dat
    const address = '<1HBXJBXWYM1jZd8p1ff2a4uhJxvtgoXiYU>'; // Replace with the address for which you want the private key

    try {
        const privateKey = await extractPrivateKey(walletPath);
        console.log(`Hex Private Key: ${privateKey}`);
    } catch (error) {
        console.error(error);
    }
}

main();